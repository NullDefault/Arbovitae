import {useState} from "react";
import {HStack, VStack, useBreakpointValue} from "@chakra-ui/react";
import {NavLogo} from "./NavLogo";
import {NavContainer} from "./NavContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {ColorModeSwitch} from "./ColorModeSwitch";
import {GitHubButton} from "./GitHubButton";
import {LogInButton} from "./LogInButton";
import {MenuItem} from "./MenuItem";

export const TopNavigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const colorModeSwitch = <ColorModeSwitch/>
    const gitHubButton = <GitHubButton/>
    const logInButton = <LogInButton/>

    const buttons = <HStack>
        {colorModeSwitch}{gitHubButton}{logInButton}
    </HStack>

    const forumLink = <MenuItem to="/forum">Forum</MenuItem>
    const frontPageLink = <MenuItem to="/wall">Front Page</MenuItem>

    const links = useBreakpointValue({base: <VStack>{forumLink}{frontPageLink}</VStack>,
                                             md: <HStack>{forumLink}{frontPageLink}</HStack>});

    const a = [buttons, links]
    const b = [links, buttons]

    const navChildren = useBreakpointValue({base: a, md: b})

    return (
        <NavContainer {...props}>
            <NavLogo h="100px"/>
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavContainer>
    );
};