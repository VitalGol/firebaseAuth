import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const Start = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          headerTitle: 'hi',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lightgreen',
          },
          headerTintColor: 'orange',
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Start;
