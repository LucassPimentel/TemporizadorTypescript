import Form from "./components/form";
import List from "./components/list";
import style from "./App.module.scss";
import Timer from "./components/timer";
import { useState } from "react";
import { ITask } from "./types/ITask";
function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldsTasks) =>
        oldsTasks.map((oldTask) => {
          if (oldTask.id === selected.id) {
            return {
              ...oldTask,
              selected: false,
              completed: true,
            };
          }
          return oldTask;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;
