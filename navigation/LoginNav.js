
import { NavigationContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Registerform from "../components/Registerform";
import Sign from "../components/Sign";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Sign} />
      <Stack.Screen name="Register" component={Registerform} />
    </Stack.Navigator>
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