import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, animi
        enim necessitatibus alias quam, architecto libero, dolor sequi sint nemo
        ipsum. Molestias dolore non vitae repellendus tempore iusto illum
        eveniet.
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;
