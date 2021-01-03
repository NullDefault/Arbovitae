import {Box, Center} from "@chakra-ui/react";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {SideDrawer} from "../components/MainMenu/SideDrawer";
import {TopNavigation} from "../components/TopNavigation/TopNavigation";
import {Footer} from "../components/Footer/Footer";

export default function Home() {
  return (
    <Box>
        <TopNavigation/>
        <BackgroundContainer>
            <Box h={"1000px"}>
                <Center>
                    <SideDrawer/>
                </Center>

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
