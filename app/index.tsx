import Routes from "./routes";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "react-native";

export default function Home(){
  return(
      <>
          <StatusBar backgroundColor="#003f7a" barStyle="light-content" />
          <Routes />
      </>
  )
}
