import { axiosPrivate } from "./privateAxios";

export const signup = async (data, profilePicture) => {
  const user = await axiosPrivate({
    url: "/auth/register",
    method: "POST",
    data: { data, profilePicture },
  });
  return user;
};

export const login = async (email, password) => {
  const user = await axiosPrivate({
    url: `/auth/login`,
    method: "POST",
    data: { email, password },
  });
  return user;
};

export const loginDemo = async () => {
  const user = await axiosPrivate({
    url: "/auth/login/demo",
    method: "POST",
  });
  return user;
};

export const createSettings = async (payload) => {
  await axiosPrivate({
    url: "/settings/create",
    method: "POST",
    data: payload,
  });
};

export const logout = async (accessToken) => {
  await axiosPrivate.get("/logout", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const uploadImage = async (profilePicture, page) => {
  try {
    const url = await axiosPrivate({
      url: "/auth/upload",
      method: "POST",
      data: { profilePicture, page },
    });
    return url;
  } catch (error) {
    throw new Error(error);
  }
};
