import { Box, Flex, HStack, Link, IconButton, Icon, Text, useDisclosure, Button, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { GiTechnoHeart } from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import CartWidget from './CartWidget'

const links = [
    {linkName: 'Products', path: '/products'},
]

const NavLink = ({path, children}) => {
    return (
        <Link as={ReactLink} to={path} px={2} py={2} rounded='md' _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>{children}</Link>
    )
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const [openCart, setOpenCart] = useState(false)

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position='sticky' top='0' zIndex='999'>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
            {/* MOBILE HAMBURGER/CLOSE ICON */}
            <IconButton size='md' icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>} display={{md: 'none'}} onClick={isOpen ? onClose : onOpen}/>

            <HStack>
                <Link as={ReactLink} to='/'>
                    <Flex alignItems='center'>
                        <Icon as={GiTechnoHeart} h={6} w={6} color='orange.400'/>
                        <Text fontWeight='extrabold'>TechShop</Text>
                    </Flex>
                </Link>

                <HStack as='nav' spacing={4} display={{base:'none', md:'flex'}}>
                    {links.map(link => (
                        <NavLink key={link.linkName} path={link.path}>{link.linkName}</NavLink>
                    ))}
                </HStack>
            </HStack>

            <Flex alignItems='center'>
                <NavLink>
                    <Icon as={colorMode === 'light' ? MoonIcon : SunIcon} alignSelf='center' onClick={() => toggleColorMode()}/>
                </NavLink>

                <NavLink>
                    <AiOutlineShoppingCart size={22} color={colorMode === 'light' ? 'black' : 'white'} onClick={() => setOpenCart(!openCart)}/>
                </NavLink>

                <Button to='/login' as={ReactLink} p={2} fontSize='sm' fontWeight={400} variant='_link'>Sign In</Button>
                <Button to='/registration' as={ReactLink} m={2} fontSize='sm' fontWeight={400} _hover={{bg: 'orange.400'}} bg='orange.500' color='white' display={{base:'none', md:'inline-flex'}}>Sign Up</Button>
            </Flex>

        </Flex>
        
        {/* MOBILE HAMBURGER MENU */}
        {isOpen ? (
            <Box pb={4} display={{md: 'none'}} w='100%'>
                <Stack as='nav' spacing={4}>
                    {links.map(link => (
                        <NavLink key={link.linkName} path={link.path}>{link.linkName}</NavLink>
                    ))}
                    <Button to='/registration' as={ReactLink} fontWeight={400} _hover={{bg: 'orange.400'}} bg='orange.500' color='white'>Sign Up</Button>
                </Stack>
            </Box>
        ) : null}

        {/* CART WIDGET */}
        {openCart &&
            <CartWidget open={openCart}/>
        }

    </Box>
    
  )
}
 
export default Navbar