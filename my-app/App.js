import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/native';
import { Buildstrap } from '@react-native-buildstrap';
import { enableScreens } from 'react-native-screens';
import  HomeScreens  from './Screens/HomeScreens';
import { dark, light} from "./Themes/Themes";
import SensorDHTScreen from './Screens/SensorDHTScreen';

enableScreens()

export default function App() {

return (
<Buildstrap customThemes={{dark, light}}>
<NavigationContainer>
  <Tab.Navigator screenOptions={{headerShown: false}}>
<Tab.Screen name= 'Home' component={HomeScreens} />
<Tab.Screen name= 'SensorDHT' component={SensorDHTScreens} />
  </Tab.Navigator>
</NavigationContainer>
</Buildstrap>
  );
}


