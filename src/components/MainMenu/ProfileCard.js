import {BackgroundContainer} from "../BackgroundContainer";
import {Avatar, Center} from '@chakra-ui/react';

export const ProfileCard = ({userData}) => {
    console.log(userData)
    return(
        <BackgroundContainer w="100%" style={{borderRadius: "24px"}}>
            <Avatar p="12px" m="24px" src={userData?.photoURL} size={["md", "lg", "xl"]}/>
            <Center p="12px">{userData?.displayName}</Center>
        </BackgroundContainer>
    )
}