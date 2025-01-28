import { useState, useEffect } from "react";
import { defaultTasks } from "./defaultTask";

export const useTasks = () => {
    const getInitialTask = () => {
        const localStorageTask = localStorage.getItem("tasks");
        if (localStorageTask === null) {
            return defaultTasks;
        }
        return JSON.parse(localStorage.getItem("tasks"));
    }
    const [tasks, setTasks] = useState(getInitialTask);

    useEffect(() => {
        localStorage.setItem(tasks, JSON.stringify("tasks"));
    }, [tasks]);


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
    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };
}
