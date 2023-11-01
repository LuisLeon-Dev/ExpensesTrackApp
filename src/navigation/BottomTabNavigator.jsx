import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet } from "react-native";
import { colors } from "../constants/color";
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
              color={focused ? "#fff" : "#000"}
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
            <Feather size={24} color={focused ? "#fff" : "#000"} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.color_background,
  },
});
