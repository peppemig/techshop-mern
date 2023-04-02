import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, Flex, Spinner, Stack, Wrap, WrapItem, Text, Button, Input, HStack, Select } from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getProductsByBrand, getProductsByPrice } from '../redux/actions/productActions'
import { useEffect, useState } from 'react'

const ProductsScreen = () => {
  const [priceForFilter, setPriceForFilter] = useState('')
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products)
  const {loading, error, products} = productList;

  const brands = ['Samsung', 'Apple', 'Sony']

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>

    <Flex mt='10px' justifyContent='center' alignItems='center' flexDirection={{base: 'column', md: 'row'}} gap={{base: '20px', md: '30px'}}>

      <Flex direction='column' gap='10px'>
        <Text fontSize='lg' fontWeight='bold'>Filter by brand name:</Text>
        <HStack>
        <Select width='300px' onChange={(e) => e.target.value === '' ? dispatch(getProducts()) : dispatch(getProductsByBrand(e.target.value))}>
                <option value=''>All</option>
            {brands.map((brand) => (
                <option value={brand}>{brand}</option>
              ))
            }
        </Select>
        </HStack>
      </Flex>

      <Flex direction='column' gap='10px'>
        <Text fontSize='lg' fontWeight='bold'>Filter by max price:</Text>
        <HStack>
          <Input type='number' placeholder='Insert max price here' onChange={(e) => setPriceForFilter(e.target.value)}/>
          <Button onClick={priceForFilter !== '' ? () => dispatch(getProductsByPrice(priceForFilter)) : () => dispatch(getProducts())}>Filter</Button>
        </HStack>
      </Flex>

    </Flex>
    
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
        
        {loading ? (
          <Stack direction='row' spacing={4}>
            <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl'/>
          </Stack>) : 

        error ? (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Oops!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (  

          products.map((product) => (
              <WrapItem key={product._id} className='grow'>
                  <Center w='250px' h='500px'>
                      <ProductCard product={product}/>
                  </Center>
              </WrapItem>
          ))

        )}

    </Wrap>
    </>
  )
}

export default ProductsScreen