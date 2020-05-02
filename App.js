import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
import Feed from './src/screens/Feed';
import Article from './src/screens/Article';
import Start from './src/screens/Start';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Start" component={Start} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
