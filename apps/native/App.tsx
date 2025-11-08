import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

// Import screens
import HomeScreen from './screens/HomeScreen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: 'left',
          drawerType: 'front',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#3B82F6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#3B82F6',
          drawerInactiveTintColor: '#6B7280',
          drawerActiveBackgroundColor: '#EFF6FF',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: 'Screen 1' }}
        />
        <Drawer.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: 'Screen 2' }}
        />
        <Drawer.Screen
          name="Screen3"
          component={Screen3}
          options={{ title: 'Screen 3' }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
