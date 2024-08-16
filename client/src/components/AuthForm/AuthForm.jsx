import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Btn from '../../widgets/Btn/Btn';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { Container, Stack, Flex, Box, Heading, Text, Image, Icon, useColorModeValue } from '@chakra-ui/react'

export default function AuthForm({ title, type, setUser }) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post(`/auth/${type}`, inputs);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
    navigate('/');
  };

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

  return (
    <form onSubmit={submitHandler} className='form'>
      {/* <h3>{title}</h3> */}
      <Container maxW={'1x1'}>
        <Stack
          align={'start'}
          // spacing={{ base: 8, md: 10 }}
          // py={{ base: 10, md: 14 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1}>
            <Heading
              // lineHeight={1.1}
              fontWeight={600}
              fontSize={{ lg: '5xl' }}>
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
                {title}
              </Text>
            </Heading>
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
              top={'10%'}
              left={'-30%'}
              // zIndex={-1}
              color={useColorModeValue('red.400', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'512px'}
              rounded={'2xl'}
              // boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
            </Box>
          </Flex>
        </Stack>
      </Container>

      {type === 'signin' && (<>
          <input
            onChange={changeHandler}
            type='email'
            name='email'
            value={inputs?.email}
            placeholder='Эл.почта'
          />
          <input
            onChange={changeHandler}
            type='password'
            name='password'
            value={inputs?.password}
            placeholder='Пароль'
          />
        </>
      )}
      {type === 'signup' && (
        <>
          <input
            onChange={changeHandler}
            name='username'
            value={inputs?.username}
            placeholder='Имя пользователя'
          />
          <input
            onChange={changeHandler}
            type='email'
            name='email'
            value={inputs?.email}
            placeholder='Эл.почта'
          />
          <input
            onChange={changeHandler}
            type='password'
            name='password'
            value={inputs?.password}
            placeholder='Пароль'
          />
        </>
      )}
      {type === 'signin' && <button color='#293990'>Вход</button> }
      {type === 'signup' && <button color='#293990'>Регистрация</button>}
    </form>
  );
}
