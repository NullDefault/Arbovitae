import {
    useDisclosure,
    Button,
    Drawer,
    VStack,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useColorMode
} from "@chakra-ui/react";
import {useRef} from 'react';
import {FaHome} from 'react-icons/fa';
import {useAuth} from "../../lib/auth";
import {ProfileCard} from "./ProfileCard";
import {InteractionMenu} from "./InteractionMenu";
import {MessageCard} from "./MessageCard";

export const SideDrawer = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const auth = useAuth();
    const btnRef = useRef();

    const {colorMode} = useColorMode();
    const bgColor = {light: 'gray.400', dark: 'gray.800'};
    const color = {light: 'black', dark: 'white'};

    const profileCard = <ProfileCard userData={auth?.user}/>
    const interactionMenu = <InteractionMenu sideNavClose={onClose}/>
    const messageCard = <MessageCard/>

    const drawerContents = [profileCard, interactionMenu, messageCard];


    return (
        <>
            <Button ref={btnRef} onClick={onOpen} leftIcon={<FaHome/>}>
                Main Menu
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent bg={bgColor[colorMode]}
                                   color={color[colorMode]}>
                        <DrawerCloseButton/>
                        <DrawerHeader>Main Menu</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing="48px">
                                {drawerContents}
                            </VStack>
                        </DrawerBody>
                        <DrawerFooter>

                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}