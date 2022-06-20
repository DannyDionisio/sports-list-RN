import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { Provider } from "react-redux";
//import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  //Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import theme from "./src/theme";
import { store } from "./src/redux/store";

import { List } from "./src/screens/List";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    //fontsLoaded.loadAsync(Entypo.font)
    setTimeout(() => SplashScreen.hideAsync(), 2000);
  }, []);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    //Roboto_700Bold,
  });

  /*if (!fontsLoaded) {
    return ;
  }*/

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <List />
      </ThemeProvider>
    </Provider>
  );
}
