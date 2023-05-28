import { MoonIcon, SunIcon, StarIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" gap="4">
      <ListItem>
        <NavLink to="/">
          <ListIcon as={MoonIcon} />
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={SunIcon} />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={StarIcon} />
          Profile
        </NavLink>
      </ListItem>
    </List>
    // <Spacer />
    // <VStack gap="3">
    //   <Box bg="gray.300" p="10px">
    //     Avatar
    //   </Box>
    //   <Box>Name</Box>
    //   <Button colorScheme="pink">Login</Button>
    // </VStack>
  )
}
