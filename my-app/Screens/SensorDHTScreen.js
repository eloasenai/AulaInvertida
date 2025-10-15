import {Text, View } from 'react-native';
import {createStyles} from "react-native-buildstrap";
import {Carousel} from "react-native-Buildstrap/scr/components/Carousel"
export default function SensorDHTScreen(){

    const styles = createStyles()
    const {isConnected} = useMQTT()
      
    return (
  <View styles={[styles.container]}>
    <Carousel/>
  </View>
  )
}