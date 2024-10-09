import axios from "axios";

const API_URL = "https://interlab.mrjtrade.uz/api/banner";

// Получение всех баннеров
export const getBanners = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Создание нового баннера
export const createBanner = async (bannerData, bannerImage) => {
  const formData = new FormData();
  formData.append(
    "json",
    JSON.stringify({
      title: bannerData.title,
      subtitle: bannerData.subtitle,
      description: bannerData.description,
      navigateToUrl: bannerData.navigateToUrl,
      active: bannerData.active,
    })
  );
  formData.append("photo", bannerImage);

  return await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Обновление баннера
export const updateBanner = async (bannerId, bannerData, bannerImage) => {
  const formData = new FormData();
  formData.append(
    "json",
    JSON.stringify({
      title: bannerData.title,
      subtitle: bannerData.subtitle,
      description: bannerData.description,
      navigateToUrl: bannerData.navigateToUrl,
      active: bannerData.active,
    })
  );
  formData.append("photo", bannerImage);

  return await axios.put(`${API_URL}/${bannerId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Удаление баннера
export const deleteBanner = async (bannerId) => {
  return await axios.delete(`${API_URL}/${bannerId}`);
};