import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens";

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
