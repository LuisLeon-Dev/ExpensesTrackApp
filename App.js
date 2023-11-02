import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
