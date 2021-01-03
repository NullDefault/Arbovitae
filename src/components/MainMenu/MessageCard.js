import {BackgroundContainer} from "../BackgroundContainer";
import {VStack, Text} from '@chakra-ui/react';

export const MessageCard = () => {
    return(
        <BackgroundContainer w="100%" style={{borderRadius: "24px"}}>
            <VStack spacing="24px">
                <Text p="12px">
                    Messages
                </Text>
            </VStack>
        </BackgroundContainer>
    )
}