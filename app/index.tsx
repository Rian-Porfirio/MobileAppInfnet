import Routes from "./routes";
import {StatusBar} from "react-native";
import BottomTab from "@/components/navigation/BottomTab";
import {useState} from "react";
import AppBar from "@/components/navigation/AppBar";

export default function Home(){
    const [user, setUser] = useState(true);

  return(
      <>
          <AppBar/>
          <StatusBar backgroundColor="#003f7a" barStyle="light-content" />
          <Routes />
          <BottomTab />
      </>
  )
}
