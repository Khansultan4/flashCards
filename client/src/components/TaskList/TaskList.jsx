import Task from '../Task/Task';

export default function TaskList({ tasks, setTasks }) {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} />
        ))
      ) : (
        <h2>Загрузка</h2>
      )}
    </div>
  );
}
