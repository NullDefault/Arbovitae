import {Box, Text, HStack} from '@chakra-ui/react';

export const NavLogo = (props) => {
    return (
        <Box {...props}>
            <HStack>
                <Text pl="24px" style={{fontFamily: 'Redressed', fontSize: 48}}>
                    Arbovitae
                </Text>
            </HStack>
        </Box>
    )
}