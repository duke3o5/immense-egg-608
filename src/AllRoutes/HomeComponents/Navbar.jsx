import { ReactNode } from 'react';
import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import {
    Box,
    Flex,
    Text,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Divider,
    HStack,
    Input,
    InputGroup,
    InputRightAddon,
    Dropdown
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Lazyload from './Carousel';
import PostAdd from './PostAdd';
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isPost , setisPost]= useState(false);
    const { loginWithRedirect, logout  } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

const postItemForm=()=>{
    setisPost(true);
}

// if(isPost){
//     return <Navigate to='/PostAdd' />
// }

    return (
        <>
            <Box bg={useColorModeValue('white.100', 'gray.900')} px={4}>
                <Flex h={16} pl="190px" w={1090} alignItems={'center'} justifyContent={'space-around'}>
                    <Box as='a' href='/'>
                        <img  width="100px" style={{ borderRadius: '10%' }} src='https://www.linkpicture.com/q/InShot_20230119_121832513.jpg' alt='logo' />
                    </Box>
                    <Box>
                        <InputGroup>
                            <Input placeholder='Search in All india' height="40px" width="400px" HiOutlineSearch />
                            <InputRightAddon pointerEvents="" bg={"blue.300"} children={<SearchIcon color="white.300" />} />
                        </InputGroup>
                    </Box>
                    <Box pl="30px">
                        {/* <Button width="105px" height="30px" border={"1px solid grey"} as='a' href='/Login'>
                            <Text fontSize={"12px"}>
                                Login/Register
                            </Text></Button> */}
                            {isAuthenticated ? <Button>{user.name}</Button> : <Button onClick={() => loginWithRedirect()}>Log In</Button>}

                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={5}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        {isAuthenticated && <p>{user.name}</p>}
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    
                                    {
                                        isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                      </button> :  <button onClick={() => loginWithRedirect()}>Log In</button>
                                    }
                                    {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
                                </MenuList>

                            </Menu>

                        </Stack>

                    </Flex>
                    {/* {isAuthenticated && <p>Hello {user.name}</p>} */}
                    <Button bg='yellow.400'  as='a' href='/PostAdd'>
                        
                            Post Add
                        
                        </Button>
                </Flex>

            </Box>
            <Divider border={"1px solid grey"} orientation='horizontal' />


            {/* ******************************MENU**************** */}

            <HStack pt={"10px"} pl="200px" w={1090} alignItems={'center'} justifyContent={'space-around'}>
                <Menu >
                    <MenuButton

                        style={{ width: '166px' }} >

                        <Text fontSize='13px'>Mobile & Tablets<ChevronDownIcon /></Text>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Used Mobiles</MenuItem>
                        <MenuItem>Tablets</MenuItem>
                        <MenuItem>Accessories</MenuItem>
                        <MenuItem>Wearables</MenuItem>
                        <MenuItem>View All</MenuItem>
                    </MenuList>
                </Menu>
                <Menu >
                    <MenuButton

                        style={{ width: '166px' }} >
                        <Text fontSize='13px'> Home & Lifestyle<ChevronDownIcon /></Text>


                    </MenuButton>
                    <MenuList>
                        <MenuItem>Furniture & Decor</MenuItem>
                        <MenuItem>Sports, Hobbies & Fashion</MenuItem>
                        <MenuItem>Luggages</MenuItem>
                        <MenuItem>Footwear</MenuItem>
                        <MenuItem>Househol Items</MenuItem>
                        <MenuItem>View All</MenuItem>
                    </MenuList>
                </Menu>

                <Menu>

                    <MenuButton

                        style={{ width: '166px' }} >


                        <Text fontSize='13px'>Appliances<ChevronDownIcon /></Text>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Laptop & Accessories</MenuItem>
                        <MenuItem>TV -DVD - Multimedia</MenuItem>
                        <MenuItem>Camera & Accessories</MenuItem>
                        <MenuItem>Home & Appliances</MenuItem>
                        <MenuItem>Kitchen Appliances</MenuItem>
                        <MenuItem>View All</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton

                        style={{ width: '166px' }} >


                        <Text fontSize='13px'> HOME APPLIANCES <ChevronDownIcon /></Text>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton

                        style={{ width: '166px' }} >


                        <Text fontSize='13px'>KIDS & TOYS  <ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton

                        style={{ width: '166px' }} >


                        <Text fontSize='13px'>SPORTS & FASHION <ChevronDownIcon /></Text>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

            </HStack>
            <Divider pt={"10px"} color={"grey"} orientation='horizontal' />


            



            {/* ************************************landing page************ */}



        </>

    );
}