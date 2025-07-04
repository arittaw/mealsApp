import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screen/CategoriesScreen";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScree from './screens/MealsDetailScree';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#987070'},
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#F1E5D1'}
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#C39898'}
            }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealsDetailScree}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});