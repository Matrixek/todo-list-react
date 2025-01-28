import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import {useTasks} from "./useTasks";


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);

  };
  const {
    tasks,
    removeTasks,
    toggleTasksDone,
    setAllDone,
    addNewTasks,
  } = useTasks();

  return (
    <Container >
      <Header title="Lista zadań" />
      <Section title=
        "Dodaj nowe zadanie"
        body={<Form addNewTasks={addNewTasks} />}
      />
      <Section
        title="Lista zadań "
        body={
          <Tasks tasks={tasks}
            hideDone={hideDone}
            removeTasks={removeTasks}
            toggleTasksDone={toggleTasksDone}
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
