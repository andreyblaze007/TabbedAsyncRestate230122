import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import Cafe from "./Cafe.js"
import Settings from "./Settings.js"
import Pizza from "./Pizza.js"
import FastFood from "./Fast-food.js"
import IceCream from "./Ice-Cream.js"
import Pint from "./Pint.js"
import Checkout from "./Checkout.js"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name === "Starbucks") {
              iconName = "cafe"
            } else if (route.name === "Settings") {
              iconName = "md-settings"
            } else if (route.name === "McDonald's"){
              iconName="fast-food"
            } else if (route.name === "My Little Desert"){
              iconName="ice-cream"
            } else if (route.name === "The Raven"){
              iconName="pint"
            } else if (route.name === "Domino's"){
              iconName="pizza"
            }else if (route.name === "Checkout"){
              iconName="server"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarStyle: { backgroundColor: "#000177" },
          tabBarActiveTintColor: "#7707ff",
          tabBarInactiveTintColor: "#707",
          headerStyle: { backgroundColor: "#7007ff99" },
        })}
      >
        <Tab.Screen name="Starbucks" component={Cafe} />
        <Tab.Screen name="McDonald's" component={FastFood} />
        <Tab.Screen name="My Little Desert" component={IceCream} />
        <Tab.Screen name="The Raven" component={Pint} />
        <Tab.Screen name="Domino's" component={Pizza} />
        <Tab.Screen name="Checkout" component={Checkout} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
