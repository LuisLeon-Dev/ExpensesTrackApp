import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";

//redux Toolkit
import { Provider } from "react-redux";
import store from "./src/store/index";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
