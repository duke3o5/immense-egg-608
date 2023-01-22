import { LoadData } from "../LocalStorage"
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import './Styles/ProductPage.css';

export default function Viewproduct() {

    const PageDat = LoadData('viewProduct');
    console.log(PageDat)

    return (
        <>
            <div className="mainDiv">
                <div className="leftDiv">
                </div>
                <Image className="imgDiv" src={PageDat.image} />
                <div className="rigthDiv">
                    <Heading>{PageDat.title}</Heading>
                    <Text>{PageDat.category}</Text>
                    <h3>{PageDat.price}</h3>

                </div>
            </div>
        </>
    )
}