import {BackgroundContainer} from "../components/BackgroundContainer";
import {TopNavigation} from "../components/TopNavigation/TopNavigation";
import {Box} from "@chakra-ui/react";
import {Footer} from "../components/Footer/Footer";

export default function Forum () {
    return (
        <Box>
            <TopNavigation/>
            <BackgroundContainer>
                <Box h={"1000px"}>

                </Box>
            </BackgroundContainer>
            <Footer/>
        </Box>
    )
}