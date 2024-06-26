import React, { useRef } from "react";
import style from "./MainCard.module.css";
import TaskCard from "../TaskCard";
import NewTask from "../NewTask";
import { useDrop } from "react-dnd";

interface MainCardProps {
  groupName: string;
  taskCard: React.ReactNode[];
}

function MainCard({ groupName, taskCard }: MainCardProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null); // Ref for the drop target

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item: { id: number; groupIndex: number }) => {
      // Logic for dropping here
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  drop(ref); // Attach the drop target to the div element

  let groupStyle;
  let dateCard;

  switch (groupName) {
    case "Grup Task 1":
      groupStyle = style.group1;
      dateCard = "January - March";
      break;
    case "Grup Task 2":
      groupStyle = style.group2;
      dateCard = "April - June";
      break;
    case "Grup Task 3":
      groupStyle = style.group3;
      dateCard = "July - September";
      break;
    case "Grup Task 4":
      groupStyle = style.group4;
      dateCard = "October - December";
      break;
    default:
      groupStyle = style.group1;
      dateCard = "Unknown Date Range";
  }

  return (
    <div ref={ref} className={`${style.container}`}>
      <div className={`${style.card} ${groupStyle}`}>
        <div className={style.name}>{groupName}</div>
        <div className={style.dateCard}>{dateCard}</div>
        <div className={style.containerTask}>
          {taskCard.map((taskCard, index) => (
            <div className={style.taskCard} key={index}>
              {taskCard}
            </div>
          ))}
        </div>

        <div className={style.addcard} onClick={() => toggleMenu()}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33342 8.16663V8.66663H9.83342H12.3334C12.4218 8.66663 12.5066 8.70175 12.5691 8.76426C12.6316 8.82677 12.6668 8.91155 12.6668 8.99996C12.6668 9.08836 12.6316 9.17315 12.5691 9.23566C12.5066 9.29817 12.4218 9.33329 12.3334 9.33329H9.83342H9.33342V9.83329V12.3333C9.33342 12.4217 9.2983 12.5065 9.23579 12.569C9.17327 12.6315 9.08849 12.6666 9.00008 12.6666C8.91168 12.6666 8.82689 12.6315 8.76438 12.569C8.70187 12.5065 8.66675 12.4217 8.66675 12.3333V9.83329V9.33329H8.16675H5.66675C5.57835 9.33329 5.49356 9.29817 5.43105 9.23566C5.36854 9.17315 5.33342 9.08836 5.33342 8.99996C5.33342 8.91155 5.36854 8.82677 5.43105 8.76426C5.49356 8.70175 5.57835 8.66663 5.66675 8.66663H8.16675H8.66675V8.16663V5.66663C8.66675 5.57822 8.70187 5.49344 8.76438 5.43092C8.8269 5.36841 8.91168 5.33329 9.00008 5.33329C9.08849 5.33329 9.17327 5.36841 9.23579 5.43092C9.2983 5.49344 9.33342 5.57822 9.33342 5.66663V8.16663ZM4.64812 2.48678C5.9363 1.62604 7.4508 1.16663 9.00008 1.16663C10.0288 1.16663 11.0474 1.36924 11.9978 1.7629C12.9482 2.15656 13.8117 2.73356 14.5391 3.46096C15.2665 4.18835 15.8435 5.05189 16.2371 6.00227C16.6308 6.95266 16.8334 7.97127 16.8334 8.99996C16.8334 10.5492 16.374 12.0637 15.5133 13.3519C14.6525 14.6401 13.4291 15.6441 11.9978 16.237C10.5664 16.8299 8.9914 16.985 7.47188 16.6828C5.95236 16.3805 4.55659 15.6345 3.46108 14.539C2.36557 13.4435 1.61952 12.0477 1.31727 10.5282C1.01502 9.00865 1.17014 7.43363 1.76303 6.00227C2.35592 4.57092 3.35993 3.34752 4.64812 2.48678ZM5.0185 14.9588C6.19705 15.7463 7.58265 16.1666 9.00008 16.1666C10.9008 16.1666 12.7237 15.4116 14.0677 14.0676C15.4117 12.7235 16.1668 10.9007 16.1668 8.99996C16.1668 7.58253 15.7464 6.19693 14.959 5.01837C14.1715 3.83982 13.0522 2.92125 11.7426 2.37882C10.4331 1.8364 8.99214 1.69447 7.60194 1.971C6.21174 2.24753 4.93476 2.93008 3.93249 3.93236C2.93021 4.93464 2.24765 6.21162 1.97112 7.60181C1.6946 8.99201 1.83652 10.433 2.37895 11.7425C2.92138 13.0521 3.83995 14.1713 5.0185 14.9588Z"
              fill="#333333"
              stroke="#333333"
            />
          </svg>
          New Task
        </div>
      </div>
      <div className={style.popup}>{isMenuOpen && <NewTask />}</div>
    </div>
  );
}

export default MainCard;
