// Page.tsx
"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import style from "./page.module.css";
import TaskCard from "./components/TaskCard";
import NewTask from "./components/NewTask";

function Page() {
  // Menyimpan daftar kartu tugas di setiap grup
  const [group1Tasks, setGroup1Tasks] = useState<
    { id: number; taskName: string; progress: number }[]
  >([
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
  const [group3Tasks, setGroup3Tasks] = useState<
    { id: number; taskName: string; progress: number }[]
  >([
    {
      id: 3,
      taskName: "Data Migration: Performance & Culture End Game",
      progress: 60,
    },
  ]);

  const [group4Tasks, setGroup4Tasks] = useState<
    { id: number; taskName: string; progress: number }[]
  >([
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
    const taskToMove = group2Tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setGroup2Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup1Tasks((prevTasks) => [...prevTasks, taskToMove]);
    }
  };

  const handleMoveToGroup3 = (taskId: number) => {
    const taskToMove = group2Tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setGroup2Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup3Tasks((prevTasks) => [...prevTasks, taskToMove]);
    }
  };
  const handleMoveToGroup4 = (taskId: number) => {
    const taskToMove = group3Tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setGroup3Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
      setGroup4Tasks((prevTasks) => [...prevTasks, taskToMove]);
    }
  };

  const handleMoveToGroup2 = (taskId: number) => {
    // Temukan kartu tugas yang akan dipindahkan
    const taskToMove = group1Tasks.find((task) => task.id === taskId);
    const taskToMove3 = group3Tasks.find((task) => task.id === taskId);
    const taskToMove4 = group4Tasks.find((task) => task.id === taskId);

    if (taskToMove) {
      // Hapus kartu tugas dari Grup 1
      setGroup1Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );

      // Tambahkan kartu tugas ke Grup 2
      setGroup2Tasks((prevTasks) => [...prevTasks, taskToMove]);
    }
    if (taskToMove3) {
      // Remove the task from Group 3
      setGroup3Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );

      // Add the task to Group 2
      setGroup2Tasks((prevTasks) => [...prevTasks, taskToMove3]);
    }

    if (taskToMove4) {
      // Hapus kartu tugas dari Grup 1
      setGroup4Tasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );

      // Tambahkan kartu tugas ke Grup 2
      setGroup2Tasks((prevTasks) => [...prevTasks, taskToMove4]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <MainCard
          groupName="Grup Task 1"
          taskCard={
            group3Tasks.length > 0
              ? group1Tasks
                  .slice(0, 2)
                  .map((task) => (
                    <TaskCard
                      key={task.id}
                      taskName={task.taskName}
                      progress={task.progress}
                      onMoveToGroupRight={() => handleMoveToGroup2(task.id)}
                    />
                  ))
              : [<TaskCard key={1} taskName="No Task" />]
          }
        />

        <MainCard
          groupName="Grup Task 2"
          taskCard={
            group2Tasks.length > 0
              ? group2Tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    taskName={task.taskName}
                    progress={task.progress}
                    onMoveToGroupLeft={() => handleMoveToGroup1(task.id)}
                    onMoveToGroupRight={() => handleMoveToGroup3(task.id)}
                  />
                ))
              : [<TaskCard key={1} taskName="No Task" />]
          }
        />

        <MainCard
          groupName="Grup Task 3"
          taskCard={
            group3Tasks.length > 0
              ? group3Tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    taskName={task.taskName}
                    progress={task.progress}
                    onMoveToGroupLeft={() => handleMoveToGroup2(task.id)}
                    onMoveToGroupRight={() => handleMoveToGroup4(task.id)}
                  />
                ))
              : [<TaskCard key={1} taskName="No Task" />]
          }
        />
        <MainCard
          groupName="Grup Task 4"
          taskCard={
            group4Tasks.length > 0
              ? group4Tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    taskName={task.taskName}
                    progress={task.progress}
                    onMoveToGroupLeft={() => handleMoveToGroup3(task.id)}
                  />
                ))
              : [<TaskCard key={1} taskName="No Task" />]
          }
        />
      </div>
      {/* <NewTask /> */}
    </div>
  );
}

export default Page;
