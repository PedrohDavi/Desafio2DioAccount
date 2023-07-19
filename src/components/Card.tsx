import { Footer } from "./Footer"
import { Header } from "./Header/Header"
import { BtnLogin } from "./BtnLogin"
import { 
    ChakraProvider,
    Input,
    Box,
    Center,
    Text 
} from '@chakra-ui/react'


export const Card = () => {
    return(
        <ChakraProvider>
        <div>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='15px'>
            <Header/>
            <Box backgroundColor='white' borderRadius='25px' padding='15px'>
                <section id='Login'>
                    <Center>
                        <Text fontSize='xl'>Faça o login</Text>
                    </Center>
                    <Input placeholder='E-mail' type="email"/>
                    <br/>
                    <Input placeholder='Senha' type="password"/>
                    <br/>
                    <BtnLogin/>
            </section>
            </Box>
            <Footer/>
            </Box>
        </div>
        </ChakraProvider>
    )
}