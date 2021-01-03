import {BackgroundContainer} from "../BackgroundContainer";
import {Button, VStack, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {FaTh} from "react-icons/fa";
import {MdSchool, MdCreate} from "react-icons/md";
import { useRouter } from 'next/router'

export const InteractionMenu = ({sideNavClose}) => {
    const router = useRouter();

    return (
        <BackgroundContainer w="100%" style={{borderRadius: "24px"}} p="36px">
            <VStack spacing="24px">
                <Button mt="12px" rightIcon={<FaTh/>} w="100%" onClick={() => {
                    router.push('/gallery');
                    sideNavClose();
                }}>
                    Browse Gallery
                </Button>
                <Menu>
                    <MenuButton as={Button} rightIcon={<MdCreate/>}  w="100%">
                        Create
                    </MenuButton>
                    <MenuList mt="-24px">
                        <MenuItem>New Autotroph</MenuItem>
                        <MenuItem>New Heterotroph</MenuItem>
                        <MenuItem>New Species Branch</MenuItem>
                        <MenuItem>New Environment</MenuItem>
                    </MenuList>
                </Menu>
                <Button mb="12px" rightIcon={<MdSchool/>} w="100%">
                    Tutorials
                </Button>
            </VStack>
        </BackgroundContainer>
    )
}