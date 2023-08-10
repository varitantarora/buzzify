import { axiosPrivate } from "../api/auth/privateAxios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import { accessTokenActions } from "../store/access-token-slice";

const useRefreshToken = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const refresh = async () => {
    const response = await axiosPrivate.get("/refresh", {
      withCredentials: true,
    });
    dispatch(accessTokenActions.setAccessToken(response.data.accessToken));
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
