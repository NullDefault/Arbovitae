import Link from 'next/link'
import {Box, Center, Text, VStack, Divider} from "@chakra-ui/react";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {Footer} from "../components/Footer/Footer";


export default function FourOhFour() {
    return (
        <Box>
            <BackgroundContainer>
                <Box h={"1000px"}>
                    <Center>
                        <VStack mt="20%">
                            <Text fontSize="6xl" align="center">
                                404 Page Not Found
                            </Text>
                            <Divider/>
                            <Link href="/">
                                <a>
                                    Go back home
                                </a>
                            </Link>
                        </VStack>
                    </Center>
                </Box>
            </BackgroundContainer>
            <Footer/>
        </Box>
    )
}