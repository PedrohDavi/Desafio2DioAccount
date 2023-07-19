import { 
    ChakraProvider,
    Center,
    Text
} from '@chakra-ui/react'

export const Header = () => {
    return(
        <ChakraProvider>
            <Center>
                <header>
                    <Text fontSize='4xl' as='b'>DIO Bank Aplication</Text>
                </header>
            </Center>
        </ChakraProvider>
    )
}