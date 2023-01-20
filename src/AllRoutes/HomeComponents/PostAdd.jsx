import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
} from '@chakra-ui/react';

import { useReducer, useState } from 'react';
import axios from 'axios';
import LandingContent from './LandingContent';
import Navbar from './Navbar';


const initstate = {
    image: '',
    title: '',
    description: '',
    price: '',
    category: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'image':
            return { ...state, image: action.payload }

        case 'title':
            return { ...state, title: action.payload }

        case 'description':
            return { ...state, description: action.payload }

        case 'price':
            return { ...state, price: action.payload }

        case 'category':
            return { ...state, category: action.payload }

        case 'reset':
            return initstate

        default:
            return state
    }
}

export default function PostAdd() {
    const [ans, dispatch] = useReducer(reducer, initstate);
    const [submittedData, setSubmittedData] = useState([]);

    const AddProduct=(e)=>{
        e.preventDefault();
        setSubmittedData([...submittedData, ans]);
        dispatch({ type: 'reset' });
        fetchData(ans);
    }

    const fetchData=(data)=>{
        axios.post('http://localhost:8080/latestAdded', data).then((res)=>console.log(res));
    }

    return (
        <>
        <Navbar/>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sell your product faster than ever</Heading>
                    <form onSubmit={AddProduct}>
                    <FormControl id="image">
                        <FormLabel>Product Image</FormLabel>
                        <Input type="text" value={ans.image} onChange={(e) => dispatch({ type: 'image', payload: e.target.value })}/>
                    </FormControl>
                    <FormControl id="title">
                        <FormLabel>Product Title</FormLabel>
                        <Input type="text" value={ans.title} onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}/>
                    </FormControl>
                    <FormControl id="description">
                        <FormLabel>Product Description</FormLabel>
                        <Input type="text" value={ans.description} onChange={(e) => dispatch({ type: 'description', payload: e.target.value })}/>
                    </FormControl>
                    <FormControl id="price">
                        <FormLabel>Product Price</FormLabel>
                        <Input type="number" value={ans.price} onChange={(e) => dispatch({ type: 'price', payload: e.target.value })}/>
                    </FormControl>
                    <FormControl id="category">
                        <FormLabel>Product Category</FormLabel>
                        <Input type="text" value={ans.category} onChange={(e) => dispatch({ type: 'category', payload: e.target.value })}/>
                    </FormControl>
                    <Stack spacing={6}>
                        {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack> */}
                        <Button type='submit' colorScheme={'green'} variant={'solid'}>
                            Sell Now
                        </Button>
                    </Stack>
                    </form>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
        </>
    );
}