import { useEffect } from "react";
import { useGetProfileImageQuery } from "../services/api";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/Auth/AuthSlice";

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);
  const dispatch = useDispatch;
  const { data, error, isLoading } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
