import {Box, Link, HStack} from '@chakra-ui/react';

export const NavLogo = (props) => {
    return (
        <Box {...props}>
            <HStack>
                <Link pl="24px" style={{fontFamily: 'Redressed', fontSize: 48, textDecoration: 'none'}} href="/">
                    Arbovitae
                </Link>
            </HStack>
        </Box>
    )
}