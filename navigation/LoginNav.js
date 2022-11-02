
import { NavigationContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Registerform from "../components/Registerform";
import Sign from "../components/Sign";

const Stack = createStackNavigator();

function MyStack() {
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
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <MyStack></MyStack>
        </NavigationContainer>
    )
}
export default MainNavigator;