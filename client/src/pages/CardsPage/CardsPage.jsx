'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  Input,
} from '@chakra-ui/react'
import axiosInstance from '../../axiosInstance';


export default function CardsPage({ topicID, title, question, image, answer }) {
  const initialState = { answer:''};
  const [inputs, setInputs] = useState(initialState);
  const [feedback, setFeedback] = useState(''); 
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState();
  const {id} = useParams()
  const [questionIndex, setquestionIndex] = useState(0); 

  const changeHandler = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  
  useEffect(()=>{
    axiosInstance
      .get(`${import.meta.env.VITE_FETCH_APITEMS}/${id}`)
      .then((res) =>{
        console.log('dawwdwdw',res.data);
        
        setQuestions(res.data)
      })
  }, [])
  // console.log(questions);
console.log(questions?.[questionIndex]?.question);

  const submitHandler = (event) => {
    event.preventDefault();
    if(questionIndex < questions.length){
    if (inputs.answer.trim().toLowerCase() === questions?.[questionIndex]?.answer.toLowerCase()) {
      setFeedback('Правильный ответ!');
      setCount((prev)=> prev + 1)
      setquestionIndex((prev)=> prev + 1)
    } else {
      setFeedback('Неправильный ответ. Попробуйте еще раз.');
      setquestionIndex((prev)=> prev + 1)
    }
  }else{
    setFeedback(`ВЫ НАБРАЛИ ${count} ОЧКОВ`)
  }
    console.log(inputs); 
    setInputs(initialState);
  };

  return (
    <Card size ='lg' marginLeft={500} marginTop={50} width={550} height={550} >
  <CardBody>
    <Stack fontSize={18} mt='10' spacing='3'>
      <Text color='black'>
        {questions?.[questionIndex]?.question}
      </Text>
    </Stack>
  </CardBody>
  <Stack mt='6' paddingLeft={20} >
    <Text color='black'>
    {feedback}
    </Text>
    </Stack>
  <Divider />
  <CardFooter>
    <ButtonGroup paddingLeft={25} spacing='4'>
    <Input onChange={changeHandler} value={inputs.answer} name={'answer'}  placeholder={"Введите ответ"} gridArea={"answer"} type='text' />
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
