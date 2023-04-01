import {Button, Fade, Flex, Box, Text, useColorMode, Link} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import CartWidgetItem from './CartWidgetItem'

const CartWidget = (open) => {
    const { colorMode } = useColorMode()

    const cartInfo = useSelector((state) => state.cart)
    const { loading, error, cart, subtotal } = cartInfo;

  return (
    <Fade in>
        <Box overflowY='auto' overflowX='hidden' position='fixed' top='70px' right='20px' maxHeight='400px' width='450px' rounded='md' shadow='lg' zIndex='999' p='5' backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'} border='2px' borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}>
                <Flex alignItems='center' direction='column' maxH='100%'>
                    
                        {cart.length > 0 &&
                            <Flex direction='row' justifyContent='space-between' alignItems='center' pb='10px'> 
                                <Text fontSize='lg' pr='5px'>Your cart: </Text>
                                <Text fontSize='lg' fontWeight='bold' pr='10px'>€{subtotal}</Text>
                                <Link as={ReactLink} to='/cart'>
                                    <Button colorScheme='orange'>Go to cart page!</Button>
                                </Link>
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

                        {cart.length > 0 && cart.map((item) => (
                            <CartWidgetItem key={item.id} item={item}/>
                        ))}

                </Flex>
        </Box>
    </Fade>
  )
}

export default CartWidget