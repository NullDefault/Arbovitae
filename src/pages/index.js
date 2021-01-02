import {Box, Center} from "@chakra-ui/react";
import {TopNavigation} from "../components/TopNavigation/TopNavigation";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {Footer} from "../components/Footer/Footer";
import {SideDrawer} from "../components/MainMenu/SideDrawer";

export default function Home() {
  return (
    <Box>
        <TopNavigation/>
        <BackgroundContainer>
            <Box h={"1000px"}>
                <SideDrawer/>
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
