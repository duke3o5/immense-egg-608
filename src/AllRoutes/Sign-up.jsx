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
import { useReducer, useState } from 'react';
import axios from 'axios';

const initstate = {
    userName: '',
    email: '',
    password: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'userName':
            return { ...state, userName: action.payload }

        case 'email':
            return { ...state, email: action.payload }

        case 'password':
            return { ...state, password: action.payload }

        case 'reset':
            return initstate

        default:
            return state
    }
}
export default function SignUp() {
    const [ans, dispatch] = useReducer(reducer, initstate);
    const [acess, setAcess] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const [token, setToken]= useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, ans]);
        dispatch({ type: 'reset' });
        setAcess(true);
        console.log(ans);
        login(ans);
    }

    const login=(submittedData)=>{
        axios.post('http://localhost:8080/login', submittedData).then((res)=>console.log(res));
    }

    // console.log(ans)



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
                    <span style={{ color: 'green' }}>SellAtdoor</span> sign-up form
                </Heading>

                <form action="" onSubmit={handleRegistration}>

                    <FormControl id="userName" isRequired>
                        <FormLabel>User name</FormLabel>
                        <Input
                            placeholder="UserName"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            value={ans.userName} onChange={(e) => dispatch({ type: 'userName', payload: e.target.value })}
                        />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                            value={ans.email} onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
                        />
                    </FormControl>
                    
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            value={ans.password} onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                        />
                    </FormControl>
                   
                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            bg={'red.400'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'red.500',
                            }} as='a' href='/Login'>
                            Login
                        </Button>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'blue.500',
                            }}
                            type='submit'>
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Flex>
    );
}