import { Text, TouchableOpacity, View } from "react-native";
import { createStyles, useTheme } from "react-native-buildstrap";
import { CustomStyles } from "../Styles/CustomStyles";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function HomeScreens() {
  const styles = createStyles();
  const { toggleTheme, isDark } = useTheme();

  return (
    <View style={[styles.container, styles.bgToggle]}>
      <Text style={[styles.textToggale, styles.mb1]}>Pagina Inicial </Text>
      <TouchableOpacity
        onPress={toggleTheme}
        styles={[styles.bgInfo, styles.px2, styles.py1, styles.roundedCircle]}
      >
        {isDark ? (
          <Ionicons name="sunny" size={24} color="white"></Ionicons>
        ) : (
          <Ionicons name="moon" size={24} color="whiter"></Ionicons>
        )}
      </TouchableOpacity>
      <Text styles={[styles.mt2, styles.text]}> Meu estilo proprio</Text>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
    </View>
  );
}
