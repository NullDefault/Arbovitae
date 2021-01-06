import {BackgroundContainer} from "../components/BackgroundContainer";
import {TopNavigation} from "../components/TopNavigation/TopNavigation";
import {
    Box,
    Grid,
    GridItem,
    Image,
    Flex,
    Input,
    useColorMode,
    VStack,
    InputGroup,
    InputRightElement,
    IconButton,
    Select,
    Textarea,
    HStack,
    Container,
    Stack,
    Center
} from "@chakra-ui/react";
import {Footer} from "../components/Footer/Footer";
import {MdHelp} from "react-icons/md";

export default function CreateSpecies() {
    const {colorMode} = useColorMode();
    const bgColor = {light: 'gray.600', dark: 'gray.800'};
    const color = {light: 'black', dark: 'white'};

    return (
        <Box>
            <TopNavigation/>
            <BackgroundContainer h="1200px">
                <Grid
                    h="1000px"
                    m="24px"
                    templateRows="repeat(3, 1fr)"
                    templateColumns={{base: "1", xl: "repeat(3, 1fr)"}}
                    gap={4}
                >
                    <GridItem colSpan={1} p="6px" bg={bgColor[colorMode]} color={color[colorMode]} style={{borderRadius: "12px"}}>
                        <Flex direction={['column', 'column', 'column', 'row']}>
                            <Center>
                                <Image boxSize="250px"
                                       objectFit="cover"
                                       alt="your species picture"
                                       m="6px"
                                       fallbackSrc="/onychodont_by_flowerball_from_the_Tira_discord.png"
                                       style={{borderRadius: "6px"}}/>
                            </Center>
                            <VStack w="100%" spacing="12px">
                                <InputGroup>
                                    <Input placeholder="Your species name"/>
                                    <InputRightElement width="4.5rem">
                                        <IconButton h="2rem" size="lg" onClick={() => {
                                        }} icon={<MdHelp/>}/>
                                    </InputRightElement>
                                </InputGroup>
                                <Select placeholder="Select organism type">
                                    <option value="heterotroph">Heterotroph</option>
                                    <option value="autotroph">Autotroph</option>
                                    <option value="necrotroph">Necrotroph</option>
                                </Select>
                                <Select placeholder="Choose diet">
                                    <option value="heterotroph">Carnivore</option>
                                    <option value="autotroph">Herbivore</option>
                                    <option value="necrotroph">Omnivore</option>
                                    <option value="necrotroph">Chemotroph</option>
                                    <option value="necrotroph">Phototroph</option>
                                    <option value="necrotroph">Custom</option>
                                </Select>
                            </VStack>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={{base: 1, xl: 2}} bg={bgColor[colorMode]} color={color[colorMode]} style={{borderRadius: "12px"}}>
                        <Center>
                            <VStack>
                                <Textarea m="24px" placeholder="Species description"/>
                                <Stack direction={{base: 'column', xl: 'row'}}>
                                    <Input placeholder="Kingdom"/>
                                    <Input placeholder="Phylum"/>
                                    <Input placeholder="Class"/>
                                    <Input placeholder="Order"/>
                                    <Input placeholder="Family"/>
                                </Stack>
                            </VStack>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={{base: 1, xl: 3}} bg={bgColor[colorMode]} color={color[colorMode]}>

                    </GridItem>
                </Grid>
            </BackgroundContainer>
            <Footer/>
        </Box>
    )
}