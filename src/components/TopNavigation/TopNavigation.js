import {useState} from "react";
import {NavLogo} from "./NavLogo";
import {NavContainer} from "./NavContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {ColorModeSwitch} from "./ColorModeSwitch";
import {GitHubButton} from "./GitHubButton";
import {LogInButton} from "./LogInButton";

export const TopNavigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const colorModeSwitch = <ColorModeSwitch/>
    const gitHubButton = <GitHubButton/>
    const logInButton = <LogInButton/>

    const navChildren = [gitHubButton, colorModeSwitch, logInButton];

    return (
        <NavContainer {...props}>
            <NavLogo h="100px"/>
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavContainer>
    );
};