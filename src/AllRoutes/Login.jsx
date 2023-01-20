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
import { useState,useReducer } from 'react';


const initstate={
    email: '',
    password: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload }

        case 'password':
            return { ...state, password: action.payload }

        default:
            return state
    }
}


    export default function Login() {
        const [ans, dispatch] = useReducer(reducer, initstate);
        const [acess, setAcess] = useState(false);
        const [token, setToken]= useState('');
        const [data , setData] = useState({});

        const handleLogin=(e)=>{
            e.preventDefault();
            setData(ans);
            login(ans);
        }

        const login= async(submittedData)=>{
            const url = `http://localhost:8080/login`;
            let login_request = await fetch(url, {
                method: "POST",
                body: JSON.stringify(submittedData),
                headers: {
                  "Content-Type": "application/json",
                }
              })
              if (login_request.ok === true) {
                let token = await login_request.json();
                setAcess(true);
                setToken(token);
                console.log(token);
              }
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
                            value={ans.email} onChange={(e)=> dispatch({type:'email', payload: e.target.value})}
                        />
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            value={ans.password} onChange={(e)=> dispatch({type:'password', payload: e.target.value})}
                        />
                    </FormControl>

                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'blue.500',
                            }} as='a' href='/Sign-up'>
                            Create Account
                        </Button>
                        <Button
                            bg={'green.500'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'blue.500',
                            }}
                            type='submit'>
                            Login
                        </Button>
                    </Stack>
                    </form>
                </Stack>
            </Flex>
        );
    }