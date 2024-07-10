export default function Map() {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full max-w-[1440px] relative mx-auto">
        <button 
          className="rounded-full px-4 py-2 bg-rose-400 text-white shadow-md shadow-rose-400 absolute top-4 left-4 z-10"
        >
          Поиск ближайшей поликлиники
        </button>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23974.90094303543!2d69.26711311926405!3d41.31185219550986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1720602412212!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23974.90094303543!2d69.26711311926405!3d41.31185219550986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1720602412212!5m2!1sru!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
