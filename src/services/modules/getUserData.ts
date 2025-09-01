import api from "../databaseApi";

const getUserData = async () => {
  const token = localStorage.getItem("token");

  try {
    const { data } = await api.post(
      "/get-user",
      { phone: "75991012569" },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getUserData;
