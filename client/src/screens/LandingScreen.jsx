import {Link as ReactLink} from 'react-router-dom'
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'

const LandingScreen = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
      <Box
        width={{ lg: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: useColorModeValue('orange.50', 'orange.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Heading size="xl" color='orange.400'>
              TechShop
            </Heading>
            <Heading size="xl" fontWeight="normal">
              We love tech.
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link as={ReactLink} to='/products' color='orange.400' fontWeight="bold" fontSize="lg">
              Shop now
            </Link>
            <Icon color='orange.400' as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
      </Flex>
    </Stack>
  </Box>
  )
}

export default LandingScreen