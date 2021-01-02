import {useColorMode, IconButton} from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

export const GitHubButton = () => {
    const {colorMode} = useColorMode();
    const bgColor = { light: 'green.200', dark: 'green.800' };
    const color = { light: 'black', dark: 'white' };
    const icon = <FaGithub/>;

    return (
        <IconButton aria-label="View GitHub repository" icon={icon} bg={bgColor[colorMode]} color={color[colorMode]} size="lg"/>
    )
}