import {
    useDisclosure,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
} from "@chakra-ui/react";
import {useRef} from 'react';
import {FaHome} from 'react-icons/fa';
import {useAuth} from "../../lib/auth";

export const SideDrawer = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const auth = useAuth();
    const btnRef = useRef();

    return (
        <>
            <Button ref={btnRef} colorScheme="green" onClick={onOpen} leftIcon={<FaHome/>}>
                Main Menu
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Main Menu</DrawerHeader>

                        <DrawerBody>

                        </DrawerBody>

                        <DrawerFooter>
                            Logged in user: {auth?.user?.email}
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}