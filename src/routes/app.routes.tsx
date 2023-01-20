import React from "react";

// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { Home } from "../screens/Home";
import { About } from "../screens/About";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
