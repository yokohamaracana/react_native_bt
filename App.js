import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './screens/SignIn'
import RegisterScreen from './screens/SignUp';

import IconSimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SignIn" component={SignInScreen}
          options={{
            headerTitle: 'Sign In',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FF4500',
            },
            headerTitleStyle: {
              color: 'white',
            },
            tabBarIcon: ({ color, size }) => (
              <IconSimpleLineIcon name="login" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="SignUp" component={RegisterScreen}
          options={{
            headerTitle: 'Sign Up',
            tabBarOptions: {
              showIcon: false
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitleStyle: {
              color: 'white',
            },
            tabBarIcon: ({ color, size }) => (
              <IconOcticons name="person-add" color={color} size={size} />
            ),

          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})
