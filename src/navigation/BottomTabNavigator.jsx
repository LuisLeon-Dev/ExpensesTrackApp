import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import StackNavigator from "./StackNavigator";
import ProfileNavigator from "./ProfileNavigator";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Principal"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              size={24}
              color={focused ? "#000" : "#B3B3B3"}
              name="clipboard"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Secondary"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              size={24}
              color={focused ? "#000" : "#B3B3B3"}
              name="user"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
