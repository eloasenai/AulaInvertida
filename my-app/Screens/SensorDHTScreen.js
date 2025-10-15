import {Text, View } from 'react-native';
import {createStyles} from "react-native-buildstrap";
import { Carousel } from "react-native-buildstrap/src/components/Carousel";
export default function SensorDHTScreen(){

    const styles = createStyles()
      
    return (
  <View styles={[styles.container]}>
    <Carousel/>
  </View>
  )
}