import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Button,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <SimpleGrid p={10} spacing={10} minChildWidth={200}>
      <Box bg="white" height="200px" border="1px solid">
        <Text
          fontSize={{ base: '24px', md: '40px', lg: '56px' }}
          color={{ base: 'pink.600', md: 'blue', lg: 'green' }}
        >
          This is responsive text that changes sizes depending on my screen
          size.
        </Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}
