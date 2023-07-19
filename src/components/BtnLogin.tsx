import { 
    ChakraProvider,
    Button
} from '@chakra-ui/react'
import { login } from '../services/login'

export const BtnLogin = () => {
    return(
        <ChakraProvider>
            <Button onClick={login} colorScheme='teal' size='md' marginTop='10px' width='100%'>Entrar</Button>
        </ChakraProvider>
    )
}