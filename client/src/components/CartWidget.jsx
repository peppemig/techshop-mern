import {Button, Fade, Flex, Slide, Box, Text, useColorModeValue as mode, useColorMode, Image, Link} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { removeCartItem } from '../redux/actions/cartActions'

const CartWidget = (open) => {
    const { colorMode } = useColorMode()
    const dispatch = useDispatch()

    const cartInfo = useSelector((state) => state.cart)
    const { loading, error, cart, subtotal } = cartInfo;

  return (
    <Fade in>
    <Box position='fixed' top='70px' right='20px' height='400px' width='450px' rounded='md' shadow='lg' zIndex='999' p='5' backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'} border='2px' borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}>
            <Flex alignItems='center' direction='column' maxH='100%' overflowY='auto' overflowX='hidden'>
                
                    {cart.length > 0 &&
                        <Flex direction='row' justifyContent='space-between' alignItems='center' pb='10px'> 
                            <Text fontSize='lg' pr='10px'>Your cart: </Text>
                            <Text fontSize='lg' fontWeight='bold'>€{subtotal}</Text>
                        </Flex>
                    }
                    
                    {cart.length <= 0 &&
                        <Flex direction='column' justifyContent='center' alignItems='center'>
                            <Text fontWeight='bold' fontSize='lg' pb='10px'>Your cart is empty</Text>
                            <Link as={ReactLink} to='/products'>
                                <Button colorScheme='orange'>Shop now!</Button>
                            </Link>
                        </Flex>
                    }

                    {cart.length > 0 && cart.map((cartItem) => (
                        <Flex direction='row' justifyContent='space-between' height='90px' width='95%' mb='10px' p='5' rounded='lg' alignItems='center' border='1px' borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}>
                            <Flex>
                                <Image src={cartItem.image} w='60xp' h='60px' rounded='md'/>
                                <Flex direction='column' pl='10px'>
                                    <Text fontSize='sm' pb='5px'>{cartItem.name}</Text>
                                    <Text fontWeight='bold'>€{cartItem.price}</Text>
                                </Flex>
                            </Flex>

                            <Flex direction='column' justifyContent='center' alignItems='center'>
                                <Text border='1px' px='10px' py='2px' rounded='sm' mb='4px'>{cartItem.qty}</Text>
                                <Button onClick={() => dispatch(removeCartItem(cartItem.id))} width='60px' height='20px' fontSize='sm' color={colorMode === 'light' ? 'orange.800' : 'orange.200'}>Remove</Button>
                            </Flex>
                        </Flex>
                    ))}

                    {cart.length > 0 &&
                        <Link as={ReactLink} to='/cart'>
                            <Button colorScheme='orange'>Go to cart page!</Button>
                        </Link>
                    }  
            </Flex>
    </Box>
    </Fade>
  )
}

export default CartWidget