import {Flex, Image, Text, Button, useColorMode, Link} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { removeCartItem } from '../redux/actions/cartActions'

const CartWidgetItem = ({item}) => {
    const dispatch = useDispatch()
    const { colorMode } = useColorMode()

  return (
    <Flex direction='row' justifyContent='space-between' height='90px' width='95%' mb='10px' p='5' rounded='lg' alignItems='center' border='1px' borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}>
        <Link as={ReactLink} to={`/product/${item.id}`}>
        <Flex>
            <Image src={item.image} w='60xp' h='60px' rounded='md'/>
            <Flex direction='column' pl='10px'>
                <Text fontSize='sm' pb='5px'>{item.name}</Text>
                <Text fontWeight='bold'>€{item.price}</Text>
            </Flex>
        </Flex>
        </Link>

        <Flex direction='column' justifyContent='center' alignItems='center'>
            <Text border='1px' px='10px' py='2px' rounded='sm' mb='4px'>{item.qty}</Text>
            <Button onClick={() => dispatch(removeCartItem(item.id))} width='60px' height='20px' fontSize='sm' color={colorMode === 'light' ? 'orange.800' : 'orange.200'}>Remove</Button>
        </Flex>
</Flex>
  )
}

export default CartWidgetItem