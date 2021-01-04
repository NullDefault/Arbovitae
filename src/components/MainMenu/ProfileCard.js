import {BackgroundContainer} from "../BackgroundContainer";
import {Avatar, Center} from '@chakra-ui/react';

export const ProfileCard = ({userData}) => {
    const userName = userData?.displayName;
    return(
        <BackgroundContainer w="100%" style={{borderRadius: "24px"}}>
            <Avatar p="12px" m="24px" name={userName} src={userData?.photoURL} size={["md", "lg", "xl"]}/>
            <Center p="24px">{userName}</Center>
        </BackgroundContainer>
    )
}