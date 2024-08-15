import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import styles from './Task.module.css';
import axios from 'axios';

export default function Task({ task, setTasks }) {
  const deleteHandler = async () => {
    const response = await axios.delete(
      `${import.meta.env.VITE_FETCH}/${task.id}`
    );
    if (response.status === 200) {
      setTasks((prev) => prev.filter((el) => el.id !== task.id));
    }
  };

  return (
    <Card bgColor={'#313239'} className={styles.wrapper}>
      <CardHeader>
        <Heading size='md'>{task.title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              {new Date(task.createdAt).toLocaleDateString('ru', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </Heading>
            <div className={styles.content}>
              <Text pt='2' fontSize='sm'>
                {task.text}
              </Text>
              <Button onClick={deleteHandler} variant='ghost' colorScheme='red'>
                Удалить
              </Button>
            </div>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
