import {useState} from "react";
import {HStack, VStack, Box, useBreakpointValue} from "@chakra-ui/react";
import {NavLogo} from "./NavLogo";
import {NavContainer} from "./NavContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {ColorModeSwitch} from "./ColorModeSwitch";
import {GitHubButton} from "./GitHubButton";
import {LogInButton} from "./LogInButton";
import {MenuItem} from "./MenuItem";
import {SideDrawer} from "../MainMenu/SideDrawer";

export const TopNavigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const colorModeSwitch = <ColorModeSwitch/>
    const gitHubButton = <GitHubButton/>
    const logInButton = <LogInButton/>

    const buttons = <HStack>
        {colorModeSwitch}{gitHubButton}{logInButton}
    </HStack>

    const forumLink = <MenuItem to="/forum" style={{fontSize: 24}}>Forum</MenuItem>
    const frontPageLink = <MenuItem to="/wall" style={{fontSize: 24}}>Front Page</MenuItem>

    const links = useBreakpointValue({base: <VStack>{forumLink}{frontPageLink}</VStack>,
                                             md: <HStack>{forumLink}{frontPageLink}</HStack>});

    const a = [buttons, links]
    const b = [links, buttons]

    const navChildren = useBreakpointValue({base: a, md: b})

    return (
        <NavContainer {...props}>
            <SideDrawer/>
            <NavLogo/>
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavContainer>
    );
};