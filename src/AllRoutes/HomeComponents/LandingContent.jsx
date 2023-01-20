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
import { useEffect, useState } from "react"
import axios from 'axios';
import '../Styles/LandingContent.css';

export default function LandingContent(){
const [post, setPost] = useState([]);

const getData=()=>{
    axios.get('http://localhost:8080/latestAdded').then((res)=>setPost(res.data));
}

useEffect(()=>{
    getData();
},[]);


    return (
        <>
        <Heading>Latest Added prdoucts</Heading>
        <div className="postAdd">
        {post.map((el)=>(
            <div className='cardDiv'>
            <img className='productImage' src={el.image}/>
                <h3>{el.title}</h3>
                <hr />
                <div className="innerCard">
                <p> Rs: {el.price}</p>
                <Button>Shop Now</Button>
                </div> 
            </div>
        ))}
        </div>
        </>
    )
}