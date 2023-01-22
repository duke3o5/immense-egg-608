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
import { ChevronDownIcon, ChevronUpIcon, WarningIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react"
import axios from 'axios';
import '../Styles/LandingContent.css';
import UserFeedback from './UserFeedback';
import { savData } from '../../LocalStorage';

export default function LandingContent() {
    const [post, setPost] = useState([]);
    const [hl, setHl] = useState([]);
    const [page, setPage] = useState(6);
    const [limit, setLimit] = useState(4);
    // const [view, setView]= useState({});

    const getData = () => {
        axios.get(`http://localhost:8080/latestAdded?_limit=${limit}`).then((res) => setPost(res.data));
    }

    const HomeLifestyle = () => {
        axios.get(`http://localhost:8080/Home&Lifestyle?_limit=${page}`).then((res) => setHl(res.data));
    }

    useEffect(() => {
        getData();
        HomeLifestyle();
    }, [page, limit]);



    return (
        <>
            <Heading style={{marginTop: '30px'}}>Latest Added prdoucts</Heading>
            <div className="postAdd">
                {post.map((el) => (
                    <div className='cardDiv' key={el.id}>
                        <img className='productImage' src={el.image} />
                        <h3>{el.title}</h3>
                        <hr />
                        <div className="innerCard">
                            <p> Rs: {el.price}</p>
                            <Button className='knowMoreBtn' onClick={()=>savData('viewProduct',el)} as='a' href='ProductPage'>Know More</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='showMorebtn'>
                <Button isDisabled={limit == 4} onClick={() => setLimit(4)}><ChevronUpIcon/></Button>
                <Button isDisabled={Math.floor(hl.length/5)==page} onClick={() => setLimit(limit+4)}><ChevronDownIcon/></Button>
                </div>

            <UserFeedback/>

            {/* Home & LifeStyles */}
            <Heading style={{marginTop: '30px'}}>Home & Lifestyles</Heading>
            <div className="homestylesAdd" >
                {hl.map((el) => (
                    <div className='hlDiv' key={el.id}>
                        <img className='hlImage' src={el.image} />
                        <h3>{el.category}</h3>
                        <hr />
                        <div className="innerCards">
                            <p> Rs: {el.price}</p>
                            <Button className='knowMoreBtn' onClick={()=>savData('viewProduct',el)} as='a' href='ProductPage'>Know More</Button>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='showMorebtn'>
                <Button isDisabled={page == 6} onClick={() => setPage(6)}><ChevronUpIcon/></Button>
                <Button isDisabled={Math.floor(hl.length/5)==page} onClick={() => setPage(page+6)}><ChevronDownIcon/></Button>
                </div>
        </>
    )
}