import {Box, Stack} from "@chakra-ui/react";

export const MenuLinks = ({isOpen, children}) => {
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
            w="80%"
        >
            <Stack
                spacing={4}
                align="right"
                justify={"space-between"}
                direction={"row"}
                pt={[4, 4, 0, 0]}
            >
                {children}
            </Stack>
        </Box>
    );
};