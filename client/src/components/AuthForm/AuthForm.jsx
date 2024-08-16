import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Btn from '../../widgets/Btn/Btn';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { Container, Stack, Flex, Box, Heading, Text, Icon, useColorModeValue, InputGroup, InputLeftElement, Input, InputRightElement, Button } from '@chakra-ui/react'
import { EmailIcon, EditIcon, ViewIcon, ViewOffIcon, CheckIcon, AddIcon } from '@chakra-ui/icons'

export default function AuthForm({ title, type, setUser }) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post(`api/auth/${type}`, inputs);
    console.log(response);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
    navigate('/');
  };
console.log(inputs);
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

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <form onSubmit={submitHandler} className='form'>
      {/* <h3>{title}</h3> */}
      <Container maxW={'1x1'}>
        <Stack
          align={'start'}
          // spacing={{ base: 8, md: 10 }}
          // py={{ base: 10, md: 14 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1}>
            <Heading
              // lineHeight={1.1}
              fontWeight={600}
              fontSize={{ lg: '5xl' }}
            >
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
                }}
              >
                {title}
              </Text>
            </Heading>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'130%'}
              h={'130%'}
              position={'absolute'}
              top={'15%'}
              left={'-13%'}
              // zIndex={-1}
              color={useColorModeValue('red.400', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'512px'}
              rounded={'2xl'}
              // boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            ></Box>
          </Flex>
        </Stack>
      </Container>

      {type === 'signin' && (
        <>
          <Stack spacing={0} width={'30%'} position={'absolute'} top={'20%'}>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon
                  color='gray.300'
                  top={'55%'}
                  left={'20px'}
                  position='absolute'
                />
              </InputLeftElement>
              <Input
                type='email'
                placeholder='Эл.почта'
                onChange={changeHandler}
                name='email'
                value={inputs?.email}
              />
            </InputGroup>
            <InputGroup size='md'>
              <InputLeftElement pointerEvents='none'>
                {show ? (
                  <ViewIcon
                    color='gray.300'
                    top={'55%'}
                    left={'20px'}
                    position='absolute'
                  />
                ) : (
                  <ViewOffIcon
                    color='gray.300'
                    top={'55%'}
                    left={'20px'}
                    position='absolute'
                  />
                )}
              </InputLeftElement>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Пароль'
                onChange={changeHandler}
                name='password'
                value={inputs?.password}
              />
              <InputRightElement width='4.5rem'>
                <Button
                  h='1.75rem'
                  size='sm'
                  onClick={handleClick}
                  top={'40%'}
                  right={'15px'}
                  position='absolute'
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </>
      )}

      {type === 'signup' && (
        <>
          <Stack spacing={0} width={'30%'} position={'absolute'} top={'20%'}>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <EditIcon
                  color='gray.300'
                  top={'55%'}
                  left={'20px'}
                  position='absolute'
                />
              </InputLeftElement>
              <Input
                type='text'
                placeholder='Имя пользователя'
                onChange={changeHandler}
                name='username'
                value={inputs?.username}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon
                  color='gray.300'
                  top={'55%'}
                  left={'20px'}
                  position='absolute'
                />
              </InputLeftElement>
              <Input
                type='email'
                placeholder='Эл.почта'
                onChange={changeHandler}
                name='email'
                value={inputs?.email}
              />
            </InputGroup>
            <InputGroup size='md'>
              <InputLeftElement pointerEvents='none'>
                {show ? (
                  <ViewIcon
                    color='gray.300'
                    top={'55%'}
                    left={'20px'}
                    position='absolute'
                  />
                ) : (
                  <ViewOffIcon
                    color='gray.300'
                    top={'55%'}
                    left={'20px'}
                    position='absolute'
                  />
                )}
              </InputLeftElement>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Пароль'
                onChange={changeHandler}
                name='password'
                value={inputs?.password}
              />
              <InputRightElement width='4.5rem'>
                <Button
                  h='1.75rem'
                  size='sm'
                  onClick={handleClick}
                  top={'40%'}
                  right={'15px'}
                  position='absolute'
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </>
      )}
      {type === 'signin' && (
        <Stack
          direction='row'
          spacing={4}
          position={'absolute'}
          top={'50%'}
          left={'0.5%'}
        >
          <Button
            onClick={submitHandler}
            leftIcon={<CheckIcon />}
            colorScheme='teal'
            variant='solid'
          >
            Вход
          </Button>
        </Stack>
      )}
      {type === 'signup' && (
        <Stack
          direction='row'
          spacing={4}
          position={'absolute'}
          top={'60%'}
          left={'0.5%'}
        >
          <Button
            onClick={submitHandler}
            leftIcon={<AddIcon />}
            colorScheme='teal'
            variant='solid'
          >
            Регистрация
          </Button>
        </Stack>
      )}
    </form>
  );
}
