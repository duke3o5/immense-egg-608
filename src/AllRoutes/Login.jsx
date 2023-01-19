import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';



    export default function Login() {
        // const [ans, dispatch] = useReducer(reducer, initstate);
        // const [acess, setAcess] = useState(false);

        const handleLogin=()=>{

        }


        return (
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                        <span style={{ color: 'green' }}>SellAtdoor</span> sign-in Buy-Sell
                    </Heading>


                    <form onSubmit={handleLogin}>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                        />
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                        />
                    </FormControl>

                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Guest Login
                        </Button>
                        <Button
                            bg={'green.500'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Login
                        </Button>
                    </Stack>
                    </form>
                </Stack>
            </Flex>
        );
    }