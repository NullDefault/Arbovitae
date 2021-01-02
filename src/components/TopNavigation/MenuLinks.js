import {Box, Stack} from "@chakra-ui/react";

export const MenuLinks = ({isOpen, children}) => {
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={4}
                align="right"
                justify={"flex-end"}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                {children}
            </Stack>
        </Box>
    );
};