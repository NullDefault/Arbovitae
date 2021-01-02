import {Box} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";

export const MenuToggle = ({toggle, isOpen}) => {
    const icon = isOpen ? <CloseIcon color="white" size="lg"/> : <HamburgerIcon color="white" size="lg"/>
    return (
        <Box display={{base: "block", md: "none"}} onClick={toggle}>
            {icon}
        </Box>
    );
};