import { axiosPrivate } from "../../api/auth/privateAxios";
const getLocations = async () => {
  const locations = await axiosPrivate.get(
    "https://countriesnow.space/api/v0.1/countries"
  );

  return locations.data.data;
};

export default getLocations;
