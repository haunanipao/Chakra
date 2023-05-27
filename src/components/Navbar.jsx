import { Flex, Box, Heading, Spacer, HStack, Button } from '@chakra-ui/react'

export default function Navbar() {
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
        <Box bg="gray.300" p="10px">
          Avatar
        </Box>
        <Box>Name</Box>
        <Button colorScheme="pink">Login</Button>
      </HStack>
    </Flex>
  )
}
