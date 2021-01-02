import {Flex, useColorMode} from "@chakra-ui/react";

export const NavContainer = ({children, ...props}) => {
    const {colorMode} = useColorMode();
    const bgColor = {light: 'green.300', dark: 'green.700'};
    const color = {light: 'black', dark: 'white'};

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            {...props}
        >
            {children}
        </Flex>
    );
};