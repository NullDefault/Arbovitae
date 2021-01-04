import {Center, Flex, useColorMode} from '@chakra-ui/react';

export const Footer = (props) => {
    const {colorMode} = useColorMode();
    const bgColor = {light: 'yellow.200', dark: 'yellow.600'};
    const color = {light: 'black', dark: 'white'};

    return (
        <Flex as="footer" py="8rem" bg={bgColor[colorMode]} color={color[colorMode]} {...props}>
            <Center mx="auto">
                Arbovitae 2021
            </Center>
        </Flex>
    )
}