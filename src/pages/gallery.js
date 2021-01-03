import {Box, Center, useColorMode,  SimpleGrid} from "@chakra-ui/react";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {Footer} from "../components/Footer/Footer";
import {TopNavigation} from "../components/TopNavigation/TopNavigation";
import {useWindowSize} from "../lib/windowSize";
import {SideDrawer} from "../components/MainMenu/SideDrawer";

export default function Gallery() {
    const {colorMode} = useColorMode();
    const bgColor = {light: 'green.400', dark: 'green.900'};
    const color = {light: 'black', dark: 'white'};

    const windowSize = useWindowSize();

    const cardHeight = windowSize.height / 3;
    const cardWidth = windowSize.width / 3;

    return (
        <Box>
            <TopNavigation/>
            <BackgroundContainer>
                <Box ml="36px">
                    <SideDrawer/>
                </Box>

                <Box bgColor={bgColor[colorMode]} color={color[colorMode]} w={windowSize.width * .90} alignContent="center" my='32px' mx='auto'>
                    <SimpleGrid columns={2} spacing={10} p="24px">
                        <Box mx="auto" bg="white" height={cardHeight} width={cardWidth}/>
                        <Box mx="auto" bg="white" height={cardHeight} width={cardWidth}/>
                        <Box mx="auto" bg="white" height={cardHeight} width={cardWidth}/>
                        <Box mx="auto" bg="white" height={cardHeight} width={cardWidth}/>
                        <Box mx="auto" bg="white" height={cardHeight} width={cardWidth}/>
                        <Box mx="auto" bg="white" height={cardHeight} width={cardWidth}/>
                    </SimpleGrid>
                </Box>
            </BackgroundContainer>
            <Footer>
                <Center mx="auto">
                    Arbovitae 2021
                </Center>
            </Footer>
        </Box>
    )
}