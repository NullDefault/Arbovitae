import {BackgroundContainer} from "../BackgroundContainer";
import {VStack, Text} from '@chakra-ui/react';

export const MessageCard = () => {
    return(
        <BackgroundContainer w="100%" style={{borderRadius: "24px"}}>
            <VStack spacing="24px">
                <Text>
                    Messages
                </Text>
            </VStack>
        </BackgroundContainer>
    )
}