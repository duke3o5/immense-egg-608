import React from 'react'
import { Grid, GridItem, Flex, Heading,Tesxt, TableContainer, Tbody, Tr, Td, VStack, Box, Text, Divider } from '@chakra-ui/react'
// import Phoneimage from "../images/Phoneimage.png"
import { ChevronRightIcon } from '@chakra-ui/icons';
const Landingpagebelowtop = () => {
    return (
        <div>

            {/* <h1 style={{ paddingTop: "15px", fontSize: "23px", fontFamily: "bold" }}> Buy and Sell from 1200+ Cities Across India</h1> */}
            <hr/>
            <Heading style={{marginTop: '30px', marginBottom:'30px'}}>Buy and Sell from 1200+ Cities Across India</Heading>



            {/* *********************************container with 3 divs*********** */}


            <Grid templateColumns='repeat(3, 1fr)' width={"1090px"} gap={6} mt="10px" >
                <Flex pl="190px" w={1090} gap={6} justifyContent={'space-evenl'}>

                    {/* *************istdiv********** */}
                    <GridItem w='84%' h='320px'   >
                        <VStack borderRadius={5} boxShadow={'2xl'} h='320px'>

                            <Box w="100%" h='75px' bgSize="120%" bgImage="https://clearcheck.co.uk/wp-content/uploads/2017/09/all-about-access-ni-1.png" borderRadius={5}>

                                <Text pt="25px" fontSize='15px' color="grey.100"  >Mobiles & Tablets</Text>
                            </Box>



                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >
                                <GridItem  >
                                    <Text pr={"175px"} fontSize='12px'  >
                                        Used Mobiles
                                    </Text>
                                </GridItem>
                                <GridItem  >
                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>



                            <Divider />

                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"210px"} fontSize='12px'  >
                                        Tablets
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>

                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"184px"} fontSize='12px'  >
                                        Accessories
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"190px"} fontSize='12px'  >
                                        Wearables
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>
                            <Divider />

                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"203px"} fontSize='12px'  >
                                        View All
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>


                        </VStack>




                    </GridItem>

                    {/* ***********************************2nd div***************** */}
                    <GridItem w='84%' h='320px'   >
                        <VStack boxShadow={'2xl'} h='320px' borderRadius={5}>

                            <Box w="100%" h='75px' bgSize="75%" bgImage="https://media-cdn.tripadvisor.com/media/vr-splice-j/01/5c/6d/a2.jpg" borderRadius={5}>
                                <Text pt="25px" fontSize='15px' color="grey.100"  >Home & LifeStyle</Text>
                            </Box>



                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >
                                <GridItem  >
                                    <Text pr={"146px"} fontSize='12px'  >
                                        Furniture & Decor
                                    </Text>
                                </GridItem>
                                <GridItem  >
                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>



                            <Divider />

                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"100px"} fontSize='12px'  >
                                        Sports,Hobbies & Fashion
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>

                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"184px"} fontSize='12px'  >
                                        Luggages
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"190px"} fontSize='12px'  >
                                        Footwear
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>
                            <Divider />

                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"150px"} fontSize='12px'  >
                                        Household items
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>
                            <Divider />

                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"200px"} fontSize='12px'  >
                                        View All
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>


                        </VStack>




                    </GridItem>


                    {/* ****************************3rddiv************************ */}
                    <GridItem w='84%' h='320px'   >
                        <VStack boxShadow={'2xl'} h='320px' borderRadius={5}>

                            <Box w="100%" h='75px' bgSize="75%" bgImage="https://www.bangkokcable.com/system/product/images/electronics%20cover.png" borderRadius={5}>

                                <Text pt="25px" fontSize='14px' color="grey.100"  >Electronics & Appliances</Text>
                            </Box>



                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >
                                <GridItem  >
                                    <Text pr={"135px"} fontSize='12px'  >
                                        Laptops & Accessories
                                    </Text>
                                </GridItem>
                                <GridItem  >
                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>



                            <Divider />

                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"145px"} fontSize='12px'  >
                                        TV-DVD-Multimedia
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>

                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"134px"} fontSize='12px'  >
                                        Camera & Accessories
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"156px"} fontSize='12px'  >
                                        Home Appliances
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>

                            </Box>
                            <Divider />


                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"150px"} fontSize='12px'  >
                                        Kitchen Appliances
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>

                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent={'space-between'} alignItems={'center'} >


                                <GridItem  >
                                    <Text pr={"203px"} fontSize='12px'  >
                                        View All
                                    </Text>
                                </GridItem>
                                <GridItem  >

                                    <ChevronRightIcon />
                                </GridItem>
                            </Box>


                        </VStack>




                    </GridItem>
                </Flex>
            </Grid>






        </div>
    )
}

export default Landingpagebelowtop