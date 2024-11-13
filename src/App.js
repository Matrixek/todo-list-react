import React, {useEffect, useState,} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const defaultTasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść kolację", done: true },
];
function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || defaultTasks);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);

  };
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  useEffect(() => {

  })
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } :
        task
    ));
  }
  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };
  const addNewTask = (content) => {
    setTasks(task => [
      ...task,
      {
        content,
        done: false,
        id: task.length ? task[tasks.length - 1].id + 1 : 1,
      }
    ]);
  };
  localStorage.setItem("Tasks", JSON.stringify(Tasks));
  sessionStorage.getItem("Tasks", JSON.stringify(Tasks))
  JSON.parse(localStorage.getItem("Tasks"))

  return (
    <Container >
      <Header title="Lista zadań" />
      <Section title=
        "Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań "
        body={
          <Tasks tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons tasks={tasks}
            hideDone={hideDone}
            key={tasks.id}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
