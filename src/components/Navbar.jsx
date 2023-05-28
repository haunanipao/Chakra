import { UnlockIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  Heading,
  Spacer,
  HStack,
  Button,
  useToast,
  Avatar,
  AvatarBadge,
  Text,
} from '@chakra-ui/react'

export default function Navbar() {
  const toast = useToast()
  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />,
    })
  }
  return (
    <Flex
      as="nav"
      p={'20px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap="2"
    >
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Hello World!
      </Heading>
      <Spacer />
      <HStack gap="3">
        <Avatar name="mario" src="/img/mario.png" bg="purple.200">
          <AvatarBadge width="1.3em" bg="brand.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Box>Mario</Box>
        <Button colorScheme="pink" onClick={showToast}>
          Login
        </Button>
      </HStack>
    </Flex>
  )
}
