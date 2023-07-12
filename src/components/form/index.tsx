import { useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
  const [newTask, setNewTask] = useState({
    task: "",
    time: "00:00",
  });

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...newTask,
        selected: false,
        completed: false,
        id: uuidv4(),
        isRunning: false,
      },
    ]);
    setNewTask({ task: "", time: "00:00:00" });
  }

  return (
    <div>
      <form className={style.newTask} onSubmit={(event) => addTask(event)}>
        <div className={style.inputContainer}>
          <label htmlFor="task_id">Tarefa</label>
          <input
            value={newTask.task}
            onChange={(event) =>
              setNewTask({ ...newTask, task: event.target.value })
            }
            type="text"
            name="task"
            id="task_id"
            placeholder="Insira o que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time_id">Tempo</label>
          <input
            value={newTask.time}
            onChange={(event) =>
              setNewTask({ ...newTask, time: event.target.value })
            }
            type="time"
            step="1"
            name="time"
            id="time_id"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Adicionar" type="submit" />
      </form>
    </div>
  );
}

export default Form;
