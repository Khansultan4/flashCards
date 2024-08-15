'use client'
import { useState } from "react";
import {
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Card,
  ButtonGroup,
  Input
} from '@chakra-ui/react'

export default function CardsPage({ title, question, image }) {
  const initialState = { answer:''};
  const [inputs, setInputs] = useState(initialState);

  const changeHandler = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setExercises((prev) => [...prev, inputs]);
    setInputs(initialState);
  };

  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='theme image'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading color='black' size='md'>{title}тема</Heading>
      <Text color='black'>
        {question} вопрос
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Input onChange={changeHandler} name={'answer'} text={"ответ"} placeholder={"Введите ответ"} gridArea={"answer"} />
      <Button onClick={submitHandler} padding={7} variant='ghost' colorScheme='blue'>
        Ответить
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  );
}

//? componentDidMount - []
//* useEffect(() => {
//*   console.log('Компонент TasksPage смонтирован в дерево!');
//* }, []);

//? componentDidUpdate - [tasks]
//* useEffect(() => {
//*   console.log('state count обновился');
//* }, [count]);

//? componentWillUnmount - return () => {}
//* useEffect(() => {
//*   return () => {
//*     console.log('Компонент TasksPage покинул дерево');
//*   };
//* }, []);
