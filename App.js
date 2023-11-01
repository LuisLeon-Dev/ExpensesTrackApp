import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import StackNavigator from "./src/navigation/StackNavigator";
import { Home } from "./src/screens";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return <StackNavigator />;
}
