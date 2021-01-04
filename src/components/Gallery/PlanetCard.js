import {Box, Text, VStack, HStack, Avatar, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Container } from "@chakra-ui/react";

export const PlanetCard = ({cardWidth, cardHeight, bgColor, item}) => {
    return (
        <Box w={cardWidth} h={cardHeight} bgColor={bgColor} style={{borderRadius: "24px"}}>
            <HStack>
                <VStack spacing={"12px"}>
                    <Avatar src="/planet@256.png" w={cardHeight / 2} h={cardHeight / 2}/>
                    <Text>
                        <b style={{fontSize: "3vmin"}}>{item.name}</b>
                    </Text>
                    <Text>
                        132 MYO
                    </Text>
                </VStack>
                <Container display={{base: "none", xl: "block"}}>
                    <Table variant="simple">
                    <TableCaption>{item.species} total species</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Type</Th>
                            <Th isNumeric>Ecolinks</Th>
                            <Th isNumeric>Species Number</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                Heterotrophs
                            </Td>
                            <Td>24</Td>
                            <Td isNumeric>46</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Autotrophs
                            </Td>
                            <Td>42</Td>
                            <Td isNumeric>85</Td>
                        </Tr>
                        <Tr>
                            <Td>Saprotrophs</Td>
                            <Td>31</Td>
                            <Td isNumeric>36</Td>
                        </Tr>
                    </Tbody>
                </Table>
                </Container>

            </HStack>
        </Box>
    );
}