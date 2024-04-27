import React from "react";
import style from "./MainCard.module.css";

interface MainCardProps {
  groupName: string;
}

function MainCard({ groupName }: MainCardProps) {
  let groupStyle;
  switch (groupName) {
    case "Grup Task 1":
      groupStyle = style.group1;
      break;
    case "Grup Task 2":
      groupStyle = style.group2;
      break;
    case "Grup Task 3":
      groupStyle = style.group3;
      break;
    case "Grup Task 4":
      groupStyle = style.group4;
      break;
    default:
      groupStyle = style.group1;
  }

  return (
    <div className={style.container}>
      <div className={`${style.card} ${groupStyle}`}>
        <div className={style.name}>{groupName}</div>
      </div>
    </div>
  );
}

export default MainCard;
