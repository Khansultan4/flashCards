import { useState } from 'react';
import { useEffect } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset);
    });
    //? 1. (async () => {})()
    //! 2. fetch().then()
    //* 3. async function getData {}
    //*   getData()

    fetch(`${import.meta.env.VITE_FETCH}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
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
