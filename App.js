import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthContext = React.createContext();
const Tab = createMaterialBottomTabNavigator();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);
  return (

    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
      <Text >Signed in!</Text>
        <View style={styles.buttonContainer}>
        <Button title="Sign out" onPress={signOut} />
        </View>
      </View>
    </SafeAreaView>
  );
}
function LogoutScreen() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Logout"
            onPress={() => signOut()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
        </View>
      </View>
    </SafeAreaView>
  );
}
function SignUpScreen() {
  const [address, setAddress] = React.useState('');
  const [state, setState] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="123 Street Rd"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput style={styles.input}
          placeholder="Victoria"
          value={state}
          onChangeText={setState}
          secureTextEntry
        />
        <TextInput style={styles.input}
          placeholder="0957659884"
          value={phone}
          onChangeText={setPhone}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
        <Button title="Register" onPress={() => signIn({ address, state, phone })} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Tab.Navigator>
          
          {state.isLoading ? (
            <Tab.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <>
            <Tab.Screen
              name="SignIn" component={SignInScreen}
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
                  <MaterialCommunityIcons name="login" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="SignUp" component={SignUpScreen}
              options={{
                title: 'Sign Up',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#FF8500',
                },
                headerTitleStyle: {
                  color: 'white',
                },
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />
                ),
              }}
            />
          </>
          ) : (
            <>
            <Tab.Screen 
              name="Home" component={HomeScreen} 
              options={{
                tabBarLabel: 'home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
              />
            <Tab.Screen 
              name="Logout" component={LogoutScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="logout" color={color} size={26} />
                ),
              }}
            />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },

  input: {
    fontSize: 18,
    width: '100%',
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#FF4500',
  },

  button: {
  },

  buttonContainer: {
    width: 120,
    height: 40,
    marginBottom: "10%"
  }

});
