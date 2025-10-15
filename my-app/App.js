import { NavigationContainer} from '@react-navigation/native';
import { Buildstrap } from 'react-native-buildstrap';
import { enableScreens } from 'react-native-screens';
import  HomeScreens  from './Screens/HomeScreens';
import SensorDHTScreen from './Screens/SensorDHTScreen'
import { dark, light} from "./Themes/Themes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

enableScreens()

const Tab = createBottomTabNavigator()

export default function App() {

return (
<Buildstrap customThemes={{dark, light}}>
<NavigationContainer>
  <Tab.Navigator screenOptions={{headerShown: false}}>
<Tab.Screen name= 'Home' component={HomeScreens} />
<Tab.Screen name= 'SensorDHT' component={SensorDHTScreen} />
  </Tab.Navigator>
</NavigationContainer>
</Buildstrap>
  );
}


