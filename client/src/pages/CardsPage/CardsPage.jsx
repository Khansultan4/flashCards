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

export default function CardsPage({ title, question, image, answer }) {
  const initialState = { answer:''};
  const [inputs, setInputs] = useState(initialState);
  const [feedback, setFeedback] = useState(''); 

  const changeHandler = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputs.answer.trim().toLowerCase() === answer.toLowerCase()) {
      setFeedback("Правильный ответ!");
    } else {
      setFeedback("Неправильный ответ. Попробуйте еще раз.");
    }
    console.log(inputs); 
    setInputs(initialState);
  };

  return (
    <Card size ='lg' marginLeft={500} marginTop={50} width={550} height={550} >
  <CardBody>
    <Image
      src={image}
      alt='theme image'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading color='black' size='lg'>{title}тема</Heading>
      <Text color='black'>
        {question} вопрос
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup paddingLeft={10} spacing='3'>
    <Input onChange={changeHandler} name={'answer'}  placeholder={"Введите ответ"} gridArea={"answer"} type='text' />
      <Button onClick={submitHandler} padding={7} variant='ghost' colorScheme='blue' type='submit'>
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
