import {Box, Center, useColorMode, SimpleGrid} from "@chakra-ui/react";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {Footer} from "../components/Footer/Footer";
import {TopNavigation} from "../components/TopNavigation/TopNavigation";
import {useWindowSize} from "../lib/windowSize";
import {SideDrawer} from "../components/MainMenu/SideDrawer";
import {PlanetCard} from "../components/Gallery/PlanetCard";

export default function Gallery() {
    const {colorMode} = useColorMode();
    const bgColor = {light: 'green.400', dark: 'green.900'};
    const color = {light: 'black', dark: 'white'};
    const cardBgColor = {light: 'gray.100', dark: 'gray.500'}

    const windowSize = useWindowSize();

    const cardHeight = windowSize.height / 3;
    const cardWidth = windowSize.width / 3;

    const projects = [
        {name: 'Tira', species: 42},
        {name: 'Darwin IV', species: 26},
        {name: 'Serena', species: 42},
        {name: 'Future Earth', species: 31},
        {name: 'Terrania', species: 12}
    ];

    return (
        <Box>
            <TopNavigation/>
            <BackgroundContainer>
                <Box ml="36px">
                    <SideDrawer/>
                </Box>

                <Box bgColor={bgColor[colorMode]} color={color[colorMode]} w={windowSize.width * .90}
                     alignContent="center" my='32px' mx='auto' style={{borderRadius: "24px"}}>
                    <SimpleGrid columns={2} spacing={10} p="24px">
                        {projects.map((item, i) =>
                            <PlanetCard cardWidth={cardWidth} cardHeight={cardHeight}  key={i} bgColor={cardBgColor[colorMode]} item={item}/>)}
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