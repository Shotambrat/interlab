"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import AddressItem from "@/app/[locale]/_components/addresses/AddressItem";
import arrowRightRed from "@/public/svg/arrow-right.svg";
import Image from "next/image";

export default function Map() {
  const [clinics, setClinics] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const mapInstanceRef = useRef(null); // Store map instance as ref to avoid re-renders
  const userMarkerRef = useRef(null); // Store user marker ref
  const activeRouteRef = useRef(null); // Store active route as a ref (non-react state)
  const [activeClinic, setActiveClinic] = useState(null); // Active clinic state for UI highlight

  useEffect(() => {
    if (!mapInstanceRef.current) {
      initMap([41.311158, 69.279737], '/images/maps/geolocation.png');
    }
  }, []);

  // Initialize the map and add a default user icon in the center of Tashkent
  const initMap = (location, locIcon) => {
    const mapElement = document.getElementById("map");

    if (!mapElement._leaflet_id) {
      const map = L.map("map").setView(location, 13);
      mapInstanceRef.current = map;

      // Adding OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add the user icon in the center of Tashkent by default
      const userIcon = L.icon({
        iconUrl: locIcon,
        iconSize: [50, 50],
        iconAnchor: [25, 30],
      });

      const marker = L.marker(location, { icon: userIcon }).addTo(map);
      userMarkerRef.current = marker;
    }
  };

  // Handle searching clinics and add icons for each clinic
  const handleSearchClinics = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        updateMapToUserLocation([latitude, longitude]);
        searchNearbyClinics([latitude, longitude]);
      });
    } else {
      alert("Геолокация не поддерживается вашим браузером.");
    }
  };

  const updateMapToUserLocation = (location) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(location, 14);
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng(location);
      }
    }
  };

  const searchNearbyClinics = async (userCoords) => {
    const radius = 3000;

    // Fetch clinics from Overpass API
    const query = `
      [out:json];
      node["amenity"="clinic"](around:${radius},${userCoords[0]},${userCoords[1]});
      out body;
    `;
    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
    const data = await response.json();

    const clinicData = data.elements.map((clinic) => ({
      id: clinic.id,
      name: clinic.tags.name || "Не указано",
      address: clinic.tags.address || "Не указано",
      coords: [clinic.lat, clinic.lon],
    }));

    setClinics(clinicData);

    // Add clinic markers on the map
    clinicData.forEach((clinic) => {
      const clinicIcon = L.divIcon({
        className: 'custom-clinic-icon',
        html: `<svg width="44" height="57" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1226 56.0115C23.2785 56.0115 43.9327 34.1321 43.9327 22.1897C43.9327 10.2473 34.1679 0.56604 22.1226 0.56604C10.0772 0.56604 0.3125 10.2473 0.3125 22.1897C0.3125 34.1321 20.9667 56.0115 22.1226 56.0115ZM22.1226 33.0052C28.2296 33.0052 33.1804 28.0967 33.1804 22.0418C33.1804 15.987 28.2296 11.0786 22.1226 11.0786C16.0156 11.0786 11.0649 15.987 11.0649 22.0418C11.0649 28.0967 16.0156 33.0052 22.1226 33.0052Z" fill="#FB6A68"/>
        </svg>`,
        iconSize: [44, 57],
        iconAnchor: [22, 57],
      });

      const clinicMarker = L.marker(clinic.coords, { icon: clinicIcon }).addTo(mapInstanceRef.current)
        .bindPopup(`<b>${clinic.name}</b>`);

      clinicMarker.on('click', () => {
        buildRoute(userCoords, clinic.coords, clinic.id); // Build route on click
      });
    });
  };

  // Build route and highlight active clinic
  const buildRoute = (start, end, clinicId) => {
    // Clear any previous route if it exists
    if (activeRouteRef.current) {
      mapInstanceRef.current.removeControl(activeRouteRef.current);
    }

    // Create a new route control
    const newRouteControl = L.Routing.control({
      waypoints: [
        L.latLng(start),
        L.latLng(end),
      ],
      routeWhileDragging: true,
      createMarker: function (i, wp) {
        return L.marker(wp.latLng, {
          icon: i === 0 ? userMarkerRef.current.options.icon : userMarkerRef.current.options.icon, // Use user icon for the first marker
        });
      },
      lineOptions: {
        styles: [{ color: 'red', opacity: 0.7, weight: 4 }],
      },
    }).on('routesfound', function () {
      // Handle any additional logic when the route is found
    }).addTo(mapInstanceRef.current);

    // Set the new route control as active
    activeRouteRef.current = newRouteControl;
    setActiveClinic(clinicId); // Set the clicked clinic as active
  };

  // Update clinic list to highlight active clinic
  const sortedClinics = activeClinic
  ? [
      clinics.find((clinic) => clinic.id === activeClinic), // Move active clinic to the top
      ...[...clinics].reverse().filter((clinic) => clinic.id !== activeClinic), // Use a copy of the array to reverse it
    ]
  : [...clinics].reverse(); // Use a copy of the array to reverse it


  return (
    <div className="w-full relative mt-24">
      <div className="w-full max-w-[1440px] relative mx-auto flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Карта пунктов</h1>
        <div className="relative w-full flex max-xl:flex-col-reverse gap-5">
          <div className="flex flex-col gap-4 overflow-y-scroll h-[725px] max-xl:h-[200px] max-xl:flex-row max-xl:w-full w-1/3">
            {sortedClinics.length === 0 ? (
              <p>Найдите ближайшие поликлиники, нажав кнопку поиска.</p>
            ) : (
              sortedClinics.map((clinic, index) => (
                <AddressItem
                  key={index}
                  title={clinic.name}
                  address={clinic.address}
                  graphic={["Часы работы: Не указано"]}
                  tel="1156"
                  url="/"
                  className={clinic.id === activeClinic ? "bg-red-100" : ""} // Highlight active clinic
                />
              ))
            )}
          </div>
          <div className="relative w-2/3 max-xl:w-full max-xl:h-[725px]">
            <button
              onClick={handleSearchClinics}
              className="rounded-full px-4 py-3 bg-red-400 w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10"
            >
              Поиск ближайшей поликлиники
            </button>
            <div className="w-full h-full absolute top-0 left-0 z-0 rounded-xl">
              <div id="map" className="w-full h-full rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="py-3 px-6 font-semibold border-red-400 text-red-400 border rounded-full flex items-center cursor-pointer gap-2">
            Посмотреть все
            <Image
              src={arrowRightRed}
              width={100}
              height={100}
              alt="Arrow right red"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
