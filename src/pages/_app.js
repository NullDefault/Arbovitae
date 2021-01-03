import '../styles/globals.css';
import {ChakraProvider, ColorModeProvider, CSSReset} from "@chakra-ui/react";
import {ProvideAuth} from "../lib/auth";


function MyApp({Component, pageProps}) {
    return <ChakraProvider>
        <ProvideAuth>
            <ColorModeProvider
                options={{
                    useSystemColorMode: true,
                }}
            >
                <CSSReset/>
                <Component {...pageProps}/>
            </ColorModeProvider>
        </ProvideAuth>
    </ChakraProvider>
}

export default MyApp;
