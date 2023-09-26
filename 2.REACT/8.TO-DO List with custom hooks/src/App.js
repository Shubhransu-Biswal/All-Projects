import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  //   const fetchTasks = async (taskText) => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch(
  //         "https://react-data-36aa6-default-rtdb.firebaseio.com/tasks.json"
  //       );

  //       if (!response.ok) {
  //         throw new Error("Request failed!");
  //       }

  //       const data = await response.json();

  //       const loadedTasks = [];

  //       for (const taskKey in data) {
  //         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //       }

  //       setTasks(loadedTasks);
  //     } catch (err) {
  //       setError(err.message || "Something went wrong!");
  //     }
  //     setIsLoading(false);
  //   };

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        console.log(taskKey);
        console.log(taskObj[taskKey].text);
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://react-data-36aa6-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  console.log(tasks);
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
