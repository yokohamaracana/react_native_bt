import { Platform, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './screens/SignIn'
import RegisterScreen from './screens/SignUp';

import IconSimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen}
          options={{
            headerTitle: 'Sign In',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FF4500',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }} />
        <Stack.Screen name="SignUp" component={RegisterScreen}
          options={{
            headerTitle: 'Sign Up',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})
