import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskdata) => {
    const generatedId = taskdata.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-data-36aa6-default-rtdb.firebaseio.com/tasks.json",

        method: "POST",
        body: { text: taskText },
        headers: { "Content-Type": "application/json" },
      },
      createTask.bind(null, taskText)
    );
  };

  // setIsLoading(true);
  // setError(null);
  // try {
  //   const response = await fetch(
  //     "https://react-data-36aa6-default-rtdb.firebaseio.com/tasks.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({ text: taskText }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error("Request failed!");
  //   }

  //   const data = await response.json();

  //   const generatedId = data.name; // firebase-specific => "name" contains generated id
  //   const createdTask = { id: generatedId, text: taskText };

  //   props.onAddTask(createdTask);
  // } catch (err) {
  //   setError(err.message || "Something went wrong!");
  // }
  // setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
