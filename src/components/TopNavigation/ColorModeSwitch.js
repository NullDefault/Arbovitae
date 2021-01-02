import {useColorMode, IconButton} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark';
    const icon = isDark ? <MoonIcon/> : <SunIcon/>
    const bgColor = { light: 'green.200', dark: 'green.800' };
    const color = { light: 'black', dark: 'white' };

    return (
        <IconButton aria-label="Toggle dark mode" icon={icon} onClick={toggleColorMode} bg={bgColor[colorMode]} color={color[colorMode]} size="lg"/>
    )
}