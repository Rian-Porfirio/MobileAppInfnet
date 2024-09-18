import { Avatar } from "react-native-paper"

// @ts-ignore
export default function AvatarComp({size, source}){
    return(
        <Avatar.Image size={size} source={source}/>
    );
}