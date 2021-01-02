import {IconButton, useColorMode} from '@chakra-ui/react';
import {useAuth} from "../../lib/auth";
import {FaRegUser, FaRegUserCircle} from "react-icons/fa";

export const LogInButton = () => {
    const {colorMode} = useColorMode();
    const auth = useAuth();

    const bgColor = { light: 'green.200', dark: 'green.800' };
    const color = { light: 'black', dark: 'white' };

    const icon = !auth?.user ? <FaRegUser/> : <FaRegUserCircle/>;
    if(!auth?.user){
        return (
            <IconButton
                aria-label="Log In / Out"
                icon={icon}
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                size="lg"
                onClick={()=>{auth.signInWithGithub()}}
            />
        )
    }else{
        return (
            <IconButton
                aria-label="Log In / Out"
                icon={icon}
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                size="lg"
                onClick={()=>{auth.signOut()}}
            />
        )
    }


}