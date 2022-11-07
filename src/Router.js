import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Category from './pages/Category/Category';
import Detail from './pages/Detail/Detail';
import Food from './pages/Food/Food';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
          options={{
            title: 'Categories   ', //tam ortalamak icin 3 bosluk biraktim...
            headerTitleStyle: {color: '#ffa501'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FoodPage"
          component={Food}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: '#ffa501'},
            headerTintColor: '#ffa501',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: {color: '#ffa501'},
            headerTintColor: '#ffa501',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
