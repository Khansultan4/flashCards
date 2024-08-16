'use client'

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  // Button,
  Image,
  Icon,
  // IconButton,
  // createIcon,
  useColorModeValue,
} from '@chakra-ui/react'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'


export default function HomePage() {  
  // const res = await axios.get()
  const getThemes = async () => {
    try {
      //console.log(import.meta.env)      
      const response = await axios.get(`${import.meta.env.VITE_FETCH_APITEMS}`)
      return response.data
    } catch (err) {
      console.error(err.toJSON())
    }
  }
  console.log(getThemes());
  
  // let themes
  // useEffect(()=>{
  //   themes = getThemes()
  // }, [])
  // const response = await getThemes()
  const themes = [
    {
      id: 1,
      title: 'Космос',
      image: 'https://c4.wallpaperflare.com/wallpaper/899/936/977/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg',
     
    },
    {
      id: 2,
      title: 'География',
      image: 'https://images.wallpaperscraft.com/image/single/globe_country_ball_94625_1600x900.jpg',
     
    },
    {
      id: 3,
      title: 'Авто',
      image: 'https://img.uhdpaper.com/wallpaper/sports-car-digital-art-755@1@l-preview.jpg',
     
    },
    {
      id: 4,
      title: 'Реакт',
      image: 'https://wallpapersmug.com/download/1600x900/acd20d/reactjs-atom-minimal.jpg',
     
    },
  ]
  
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Flashcards
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Flashcard Decks
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          A flashcard or flash card is a card bearing information on both sides, which is intended to be used as an aid in memorization. 
          Each flashcard typically bears a question or definition on one side and an answer or target term on the other. 
          Flashcards are often used to memorize vocabulary, historical dates, formulae or any subject matter that can be learned via a question-and-answer format.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Tabs variant='soft-rounded' colorScheme='red'>
            <TabList justifyContent={'space-around'}>
              {themes.map(topic => (
                <Tab key={topic.id} bg={'red.400'} ps={`${70-Math.floor(topic.title.length/2)*10}px`} pe={`${70-Math.floor(topic.title.length/2)*10}px`}>{topic.title}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {themes.map(topic => (
                <TabPanel key={topic.id}>
                  <Link to='/cards' topicID = {topic.id}>
                    <Image
                        alt={`Tab ${topic.id} Image`}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={`${topic.image}`}
                    />
                    <Text
                      fontSize={{ lg: '6xl' }}
                      align={'center'}
                      top={'70%'}
                      left={'18%'}
                      color={'yellow.400'}
                      textShadow={'red 2px 2px'}
                      position={'absolute'}>
                        НАЧАТЬ ИГРУ
                    </Text>
                  </Link>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.400', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'512px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={`/homepage/${Math.floor(Math.random()*4+1)}.jpg`}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}
