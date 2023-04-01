import {Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge} from '@chakra-ui/react'
import { useState } from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link as ReactLink, useNavigate } from 'react-router-dom'

const CartOrderSummary = () => {
    const [buttonLoading, setButtonLoading] = useState(false)
    const standardShipping = Number(4.99).toFixed(2)
    const cartItems = useSelector((state) => state.cart)
    const {subtotal} = cartItems
    const navigate = useNavigate

    const checkoutHandler = () => {
        setButtonLoading(true)
        navigate('/checkout')
    }

  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' p='8' w='full'>
        <Heading size='md'>Order Summary</Heading>
        <Stack spacing='6' >
            <Flex justify='space-between'>
                <Text fontWeight='medium' color={mode('gray.600','gray.400')}>
                    Subtotal
                </Text>
                <Text fontWeight='medium'>€{subtotal}</Text>
            </Flex>
            <Flex justify='space-between'>
                <Text fontWeight='medium' color={mode('gray.600','gray.400')}>Shipping</Text>
                <Text fontWeight='medium'>
                    {subtotal <= 1000 ? ('€' + standardShipping) : (<Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>Free</Badge>)}
                </Text>
            </Flex>
            <Flex justify='space-between' align='center'>
                <Text fontSize='xl' fontWeight='extrabold'>Total</Text>
                <Text fontSize='xl' fontWeight='extrabold'>€{subtotal <= 1000 ? Number(subtotal) + Number(standardShipping) : subtotal}</Text>
            </Flex>
        </Stack>
        <Button as={ReactLink} to='/checkout' onClick={() => checkoutHandler()} colorScheme='orange' size='lg' fontSize='md' rightIcon={<FaArrowRight/>} isLoading={buttonLoading}>Checkout</Button>
    </Stack>
  )
}

export default CartOrderSummary