import {BackgroundContainer} from "../BackgroundContainer";
import {Button, VStack} from "@chakra-ui/react";
import {FaTh} from "react-icons/fa";
import {MdSchool, MdCreate} from "react-icons/md";


export const InteractionMenu = () => {
    return (
        <BackgroundContainer w="100%" style={{borderRadius: "24px"}}>
            <VStack spacing="24px">
                <Button mt="12px" rightIcon={<FaTh/>} w="100%">
                    Browse Gallery
                </Button>
                <Button rightIcon={<MdCreate/>} w="100%">
                    Create New
                </Button>
                <Button mb="12px" rightIcon={<MdSchool/>} w="100%">
                    Tutorials
                </Button>
            </VStack>
        </BackgroundContainer>
    )
}