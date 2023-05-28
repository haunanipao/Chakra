import {
  EmailIcon,
  ChatIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon,
  AtSignIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Image,
  Highlight,
  Heading,
} from '@chakra-ui/react'
export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.600' }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box>
            <Image
              boxSize="200px"
              objectFit="cover"
              src="/img/mario.png"
              fallbackSrc="https://via.placeholder.com/150"
              alt="Mario"
              borderRadius="full"
            ></Image>
          </Box>
          <Heading lineHeight="tall">
            <Highlight
              query="Mario"
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'pink.100' }}
            >
              Mario
            </Highlight>
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={AtSignIcon} />
              Mario
            </ListItem>
            <ListItem>
              <ListIcon as={EmailIcon} />
              mario@supermario.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Always found with his brother, Luigi.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
