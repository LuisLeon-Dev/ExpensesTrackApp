import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Singup, SingUpHome } from "../screens";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="SingUpHome"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="singuphome" component={SingUpHome} />
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="singup" component={Singup} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
