"use client";

import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import style from "./page.module.css";
import TaskCard from "./components/TaskCard";
import NewTask from "./components/NewTask";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Page() {
  const [group1Tasks, setGroup1Tasks] = useState([
    {
      id: 1,
      taskName: "Re-designed the zero-g doggie bags. No more spills!",
      progress: 100,
    },
    {
      id: 2,
      taskName: "Bundle interplanetary analytics for improved transmission",
      progress: 30,
    },
  ]);
  const [group3Tasks, setGroup3Tasks] = useState([
    {
      id: 3,
      taskName: "Data Migration: Performance & Culture End Game",
      progress: 60,
    },
  ]);
  const [group4Tasks, setGroup4Tasks] = useState([
    {
      id: 4,
      taskName: "Bundle interplanetary analytics for improved transmission",
      progress: 20,
    },
  ]);
  const [group2Tasks, setGroup2Tasks] = useState<
    { id: number; taskName: string; progress: number }[]
  >([]);

  const handleMoveToGroup1 = (taskId: number) => {
    const taskToMove2 = group2Tasks.find((task) => task.id === taskId);
    if (taskToMove2) {
      setGroup2Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup1Tasks((prevTasks) => [...prevTasks, taskToMove2]);
    }
  };

  const handleMoveToGroup2 = (taskId: number) => {
    const taskToMove1 = group1Tasks.find((task) => task.id === taskId);
    const taskToMove3 = group3Tasks.find((task) => task.id === taskId);
    const taskToMove4 = group4Tasks.find((task) => task.id === taskId);

    if (taskToMove1) {
      setGroup1Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup2Tasks((prevTasks) => [...prevTasks, taskToMove1]);
    }
    if (taskToMove3) {
      setGroup3Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup2Tasks((prevTasks) => [...prevTasks, taskToMove3]);
    }
    if (taskToMove4) {
      setGroup4Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup2Tasks((prevTasks) => [...prevTasks, taskToMove4]);
    }
  };

  const handleMoveToGroup3 = (taskId: number) => {
    const taskToMove2 = group2Tasks.find((task) => task.id === taskId);
    const taskToMove4 = group4Tasks.find((task) => task.id === taskId);
    if (taskToMove2) {
      setGroup2Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup3Tasks((prevTasks) => [...prevTasks, taskToMove2]);
    }
    if (taskToMove4) {
      setGroup4Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup3Tasks((prevTasks) => [...prevTasks, taskToMove4]);
    }
  };

  const handleMoveToGroup4 = (taskId: number) => {
    const taskToMove4 = group3Tasks.find((task) => task.id === taskId);
    if (taskToMove4) {
      setGroup3Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup4Tasks((prevTasks) => [...prevTasks, taskToMove4]);
    }
  };

  const Task = ({
    id,
    taskName,
    groupIndex,
  }: {
    id: number;
    taskName: string;
    groupIndex: number;
  }) => {
    const ref = useRef<HTMLDivElement>(null); // Buat ref dengan tipe HTMLDivElement

    const [{ isDragging }, drag] = useDrag({
      type: "TASK",
      item: { id, groupIndex },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    drag(ref); // Berikan ref kepada drag

    let progress = 0;
    switch (groupIndex) {
      case 1:
        progress = id === 1 ? 100 : 30;
        break;
      case 2:
        progress = group2Tasks.find((task) => task.id === id)?.progress || 0;
        break;
      case 3:
        progress = group3Tasks.find((task) => task.id === id)?.progress || 0;
        break;
      case 4:
        progress = group4Tasks.find((task) => task.id === id)?.progress || 0;
        break;
      default:
        progress = 0;
        break;
    }

    return (
      <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <TaskCard
          key={id}
          taskName={taskName}
          progress={progress}
          onMoveToGroupLeft={
            groupIndex === 2
              ? () => handleMoveToGroup1(id)
              : groupIndex === 3
              ? () => handleMoveToGroup2(id)
              : groupIndex === 4
              ? () => handleMoveToGroup3(id)
              : undefined
          }
          onMoveToGroupRight={
            groupIndex === 1
              ? () => handleMoveToGroup2(id)
              : groupIndex === 2
              ? () => handleMoveToGroup3(id)
              : groupIndex === 3
              ? () => handleMoveToGroup4(id)
              : undefined
          }
        />
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <DndProvider backend={HTML5Backend}>
          <MainCard
            groupName="Grup Task 1"
            taskCard={
              group1Tasks.length > 0
                ? group1Tasks.map((task) => (
                    <Task
                      key={task.id}
                      id={task.id}
                      taskName={task.taskName}
                      groupIndex={1}
                    />
                  ))
                : [<TaskCard key="No Task" taskName="No Task" />]
            }
          />

          <MainCard
            groupName="Grup Task 2"
            taskCard={
              group2Tasks.length > 0
                ? group2Tasks.map((task) => (
                    <Task
                      key={task.id}
                      id={task.id}
                      taskName={task.taskName}
                      groupIndex={2}
                    />
                  ))
                : [<TaskCard key="No Task" taskName="No Task" />]
            }
          />

          <MainCard
            groupName="Grup Task 3"
            taskCard={
              group3Tasks.length > 0
                ? group3Tasks.map((task) => (
                    <Task
                      key={task.id}
                      id={task.id}
                      taskName={task.taskName}
                      groupIndex={3}
                    />
                  ))
                : [<TaskCard key="No Task" taskName="No Task" />]
            }
          />

          <MainCard
            groupName="Grup Task 4"
            taskCard={
              group4Tasks.length > 0
                ? group4Tasks.map((task) => (
                    <Task
                      key={task.id}
                      id={task.id}
                      taskName={task.taskName}
                      groupIndex={4}
                    />
                  ))
                : [<TaskCard key="No Task" taskName="No Task" />]
            }
          />
        </DndProvider>
      </div>
    </div>
  );
}

export default Page;
