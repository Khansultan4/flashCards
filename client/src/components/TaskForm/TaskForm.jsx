import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import styles from './TaskForm.module.css';

export default function TaskForm({ setTasks }) {
  const [inputs, setInputs] = useState({ title: '', text: '' });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addHandler = async () => {
    const response = await axios.post(`${import.meta.env.VITE_FETCH}`, inputs);

    if (response.status === 200) {
      setTasks((prev) => [...prev, response.data]);
      setInputs({ title: '', text: '' });
    }

    // const responseFetch = await fetch('/api/tasks/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(inputs),
    // });
  };

  return (
    <form className={styles.wrapper}>
      <Input
        onChange={changeHandler}
        name='title'
        value={inputs.title}
        placeholder='Задача'
      />
      <Input
        onChange={changeHandler}
        name='text'
        value={inputs.text}
        placeholder='Описание'
      />
      <Button onClick={addHandler}>Добавить</Button>
    </form>
  );
}
