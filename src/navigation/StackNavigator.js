import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Details } from "../screens";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    /**
     * screenOptions={({ route, navigation }) => ({
     *  headerShown: true,
     *  header: () => (
     *  <View>
     *  <Button onPress={() => navigation.goBack()} title="Back"/>
     *      <Header title =(route.name === 'Home' ? 'Categories' : 'Otro titulo')
     *  <View/>
     * )
     * })}
     */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
