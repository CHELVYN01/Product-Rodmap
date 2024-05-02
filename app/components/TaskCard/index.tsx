"use client";
import React, { useState, useEffect } from "react";
import style from "./TaskCard.module.css";
import EditTask from "../EditTask";

interface TaskCardProps {
  taskName?: string;
  progress?: number;
  onMoveToGroupLeft?: () => void;
  onMoveToGroupRight?: () => void;
}

function TaskCard({
  taskName,
  progress,
  onMoveToGroupLeft,
  onMoveToGroupRight,
}: TaskCardProps) {
  const progressBarWidth = progress && progress <= 100 ? progress * 2 : 0; //
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const toggleEditMenu = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const popup = document.querySelector(`.${style.popup}`) as HTMLElement;
      const popupEdit = document.querySelector(
        `.${style.popupEdit}`
      ) as HTMLElement;

      if (!isMenuOpen && !popup.contains(target)) {
        setIsMenuOpen(false);
      }
      if (
        isOpenEdit &&
        !popupEdit.contains(target) &&
        !popupEdit.contains(target)
      ) {
        setIsOpenEdit(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    if (isOpenEdit) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isOpenEdit]);

  return (
    <div
      className={`${style.container} ${
        progress === 100 ? style.containerComplete : ""
      }`}
    >
      <div className={`${style.title} ${!taskName ? style.noTask : ""}`}>
        {taskName ? taskName : "No Task"}
      </div>

      {progress !== undefined && (
        <div className={style.progressBar}>
          <div className={style.progressContainer}>
            <div
              className={`${style.progress} ${
                progress === 100
                  ? style.progressComplete
                  : style.progressIncomplete
              } ${progress >= 90 ? style.rounded : ""}`}
              style={{
                width: "100%",
                maxWidth: progress === 100 ? "100%" : `${progressBarWidth}px`,
              }}
            />
          </div>
          {progress < 100 && (
            <div className={style.progressText}>{`${progress}%`}</div>
          )}
          {progress === 100 && (
            <div className={style.icon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9230_37)">
                  <path
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill="#43936C"
                  />
                  <path
                    d="M5.6001 7.89098L7.2001 9.49098L10.2911 6.40002"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9230_37">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 16) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}

          <div className={style.menuIcon} onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className={style.popup}>
          <a className={style.linkMenu} href="#">
            {onMoveToGroupRight && (
              <div className={style.containerMenu} onClick={onMoveToGroupRight}>
                <div className={style.iconMenu}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_859_2)">
                      <path
                        d="M11.4538 5.80056L11.4575 5.80981C11.5075 5.93154 11.5075 6.06808 11.4575 6.18981L11.4538 6.19906C11.4306 6.25903 11.396 6.31393 11.3519 6.36078L6.35644 11.3563L6.355 11.3577C6.30852 11.4046 6.25321 11.4418 6.19229 11.4672C6.13136 11.4926 6.06601 11.5056 6 11.5056C5.93399 11.5056 5.86864 11.4926 5.80771 11.4672C5.74679 11.4418 5.69148 11.4046 5.645 11.3577L5.6421 11.3548C5.59524 11.3084 5.55804 11.2531 5.53266 11.1921C5.50727 11.1312 5.4942 11.0658 5.4942 10.9998C5.4942 10.9338 5.50727 10.8685 5.53266 10.8076C5.55804 10.7466 5.59524 10.6913 5.6421 10.6448L5.64302 10.6439L8.94302 7.3539L9.7997 6.49981H8.59H1C0.867392 6.49981 0.740215 6.44713 0.646447 6.35336C0.552678 6.2596 0.5 6.13242 0.5 5.99981C0.5 5.8672 0.552678 5.74003 0.646447 5.64626C0.740215 5.55249 0.867392 5.49981 1 5.49981H8.59H9.7997L8.94302 4.64572L5.64355 1.35626C5.64361 1.35631 5.6435 1.3562 5.64355 1.35626C5.54912 1.26174 5.49591 1.13343 5.49591 0.999812C5.49591 0.933612 5.50895 0.868063 5.53428 0.806905C5.55961 0.745746 5.59674 0.690175 5.64355 0.643366C5.73809 0.54883 5.86631 0.495721 6 0.495721C6.0662 0.495721 6.13175 0.508759 6.19291 0.534093C6.25407 0.559426 6.30964 0.596557 6.35645 0.643365L11.3519 5.63884C11.396 5.68569 11.4306 5.7406 11.4538 5.80056Z"
                        fill="#333333"
                      />
                      <path
                        d="M5.64355 1.35626L8.94302 4.64572L9.7997 5.49981H8.59H1C0.867392 5.49981 0.740215 5.55249 0.646447 5.64626C0.552678 5.74003 0.5 5.8672 0.5 5.99981C0.5 6.13242 0.552678 6.2596 0.646447 6.35336C0.740215 6.44713 0.867392 6.49981 1 6.49981H8.59H9.7997L8.94302 7.3539L5.64302 10.6439L5.6421 10.6448C5.59524 10.6913 5.55804 10.7466 5.53266 10.8076C5.50727 10.8685 5.4942 10.9338 5.4942 10.9998C5.4942 11.0658 5.50727 11.1312 5.53266 11.1921C5.55804 11.2531 5.59524 11.3084 5.6421 11.3548L5.645 11.3577C5.69148 11.4046 5.74679 11.4418 5.80771 11.4672C5.86864 11.4926 5.93399 11.5056 6 11.5056C6.06601 11.5056 6.13136 11.4926 6.19229 11.4672C6.25321 11.4418 6.30852 11.4046 6.355 11.3577L6.35644 11.3563L11.3519 6.36078C11.396 6.31393 11.4306 6.25903 11.4538 6.19906L11.4575 6.18981C11.5075 6.06808 11.5075 5.93154 11.4575 5.80981L11.4538 5.80056C11.4306 5.7406 11.396 5.68569 11.3519 5.63884L6.35645 0.643365M5.64355 1.35626C5.6435 1.3562 5.64361 1.35631 5.64355 1.35626ZM5.64355 1.35626C5.54912 1.26174 5.49591 1.13343 5.49591 0.999812C5.49591 0.933612 5.50895 0.868063 5.53428 0.806905C5.55961 0.745746 5.59674 0.690175 5.64355 0.643366C5.73809 0.54883 5.86631 0.495721 6 0.495721C6.0662 0.495721 6.13175 0.508759 6.19291 0.534093C6.25407 0.559426 6.30964 0.596557 6.35645 0.643365M6.35645 0.643365L6.70831 0.291504"
                        stroke="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_859_2">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className={style.textMenu}> Move Right</p>
              </div>
            )}
            {onMoveToGroupLeft && (
              <div className={style.containerMenu} onClick={onMoveToGroupLeft}>
                <div className={style.iconMenu}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_38_2)">
                      <path
                        d="M3.05688 4.64583L2.20019 5.49992H3.4099H10.9999C11.1325 5.49992 11.2597 5.5526 11.3534 5.64637C11.4472 5.74014 11.4999 5.86731 11.4999 5.99992C11.4999 6.13253 11.4472 6.25971 11.3534 6.35347C11.2597 6.44724 11.1325 6.49992 10.9999 6.49992H3.4099H2.20019L3.05688 7.35401L6.35688 10.644L6.3578 10.6449C6.40466 10.6914 6.44186 10.7467 6.46724 10.8077C6.49263 10.8686 6.50569 10.9339 6.50569 10.9999C6.50569 11.0659 6.49263 11.1313 6.46724 11.1922C6.44186 11.2532 6.40466 11.3085 6.3578 11.3549L6.3549 11.3578C6.30841 11.4047 6.25311 11.4419 6.19218 11.4673C6.13126 11.4927 6.06591 11.5057 5.9999 11.5057C5.93389 11.5057 5.86854 11.4927 5.80761 11.4673C5.74668 11.4419 5.69138 11.4047 5.6449 11.3578L5.64345 11.3564L0.647971 6.36089C0.603933 6.31405 0.569333 6.25914 0.546081 6.19917L0.54239 6.18992C0.492381 6.06819 0.492381 5.93165 0.54239 5.80992L0.546081 5.80067C0.569333 5.74071 0.603933 5.6858 0.64797 5.63895L5.64345 0.64347C5.73799 0.548935 5.8662 0.495825 5.9999 0.495825C6.13359 0.495825 6.26181 0.548934 6.35634 0.643469C6.45088 0.738005 6.50399 0.866223 6.50399 0.999916C6.50399 1.13354 6.45094 1.26169 6.3565 1.35621C6.35656 1.35615 6.35645 1.35626 6.3565 1.35621L3.05688 4.64583Z"
                        fill="#333333"
                      />
                      <path
                        d="M5.64345 0.64347L0.64797 5.63895C0.603933 5.6858 0.569333 5.74071 0.546081 5.80067L0.54239 5.80992C0.492381 5.93165 0.492381 6.06819 0.54239 6.18992L0.546081 6.19917C0.569333 6.25914 0.603933 6.31405 0.647971 6.36089L5.64345 11.3564L5.6449 11.3578C5.69138 11.4047 5.74668 11.4419 5.80761 11.4673C5.86854 11.4927 5.93389 11.5057 5.9999 11.5057C6.06591 11.5057 6.13126 11.4927 6.19218 11.4673C6.25311 11.4419 6.30841 11.4047 6.3549 11.3578L6.3578 11.3549C6.40466 11.3085 6.44186 11.2532 6.46724 11.1922C6.49263 11.1313 6.50569 11.0659 6.50569 10.9999C6.50569 10.9339 6.49263 10.8686 6.46724 10.8077C6.44186 10.7467 6.40466 10.6914 6.3578 10.6449L6.35688 10.644L3.05688 7.35401L2.20019 6.49992H3.4099H10.9999C11.1325 6.49992 11.2597 6.44724 11.3534 6.35347C11.4472 6.25971 11.4999 6.13253 11.4999 5.99992C11.4999 5.86731 11.4472 5.74014 11.3534 5.64637C11.2597 5.5526 11.1325 5.49992 10.9999 5.49992H3.4099H2.20019L3.05688 4.64583L6.3565 1.35621M5.64345 0.64347L5.29173 0.291748M5.64345 0.64347C5.73799 0.548935 5.8662 0.495825 5.9999 0.495825C6.13359 0.495825 6.26181 0.548934 6.35634 0.643469C6.45088 0.738005 6.50399 0.866223 6.50399 0.999916C6.50399 1.13354 6.45094 1.26169 6.3565 1.35621M6.3565 1.35621C6.35645 1.35626 6.35656 1.35615 6.3565 1.35621Z"
                        stroke="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_38_2">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className={style.textMenu}> Move Left</p>
              </div>
            )}
          </a>
          <a
            className={style.linkMenu}
            href="edit"
            onClick={() => toggleEditMenu()}
          >
            <div className={style.containerMenu}>
              <div className={style.iconMenu}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_859_4)">
                    <path
                      d="M7.24289 15.4999H7.24H3C2.86739 15.4999 2.74021 15.4473 2.64645 15.3535C2.55268 15.2597 2.5 15.1325 2.5 14.9999L2.50001 10.7599L2.49999 10.757C2.49961 10.6912 2.51222 10.626 2.53711 10.5651C2.56186 10.5045 2.59826 10.4494 2.64426 10.4028C2.6445 10.4025 2.64475 10.4023 2.64499 10.402L9.5833 3.47375L9.58418 3.47287L12.4042 0.642867L12.405 0.64204C12.4515 0.595175 12.5068 0.557978 12.5677 0.532594C12.6286 0.50721 12.694 0.494141 12.76 0.494141C12.826 0.494141 12.8914 0.50721 12.9523 0.532594C13.0131 0.557945 13.0684 0.595077 13.1148 0.641855C13.1147 0.641793 13.1149 0.641917 13.1148 0.641855L17.3544 4.93141L17.3579 4.93494C17.4048 4.98142 17.442 5.03672 17.4673 5.09765C17.4927 5.15858 17.5058 5.22393 17.5058 5.28994C17.5058 5.35595 17.4927 5.4213 17.4673 5.48223C17.4421 5.54276 17.4052 5.59773 17.3588 5.64403C17.3585 5.64433 17.3582 5.64464 17.3579 5.64494L14.5202 8.42263L14.5162 8.42664L7.59789 15.3549C7.59811 15.3547 7.59767 15.3552 7.59789 15.3549C7.55131 15.4009 7.49547 15.4381 7.43484 15.4628C7.37393 15.4877 7.30869 15.5003 7.24289 15.4999ZM13.1136 2.05639L12.76 1.70283L12.4064 2.05639L10.9864 3.47639L10.6329 3.82994L10.9864 4.18349L13.8164 7.01349L14.17 7.36705L14.5236 7.01349L15.9436 5.59349L16.2971 5.23994L15.9436 4.88639L13.1136 2.05639ZM3.64645 10.8164L3.5 10.9628V11.1699V13.9999V14.4999H4H6.83H7.03711L7.18355 14.3535L13.1136 8.42349L13.4671 8.06994L13.1136 7.71639L10.2836 4.88639L9.93 4.53283L9.57645 4.88639L3.64645 10.8164ZM1 18.4999H19C19.1326 18.4999 19.2598 18.5526 19.3536 18.6464C19.4473 18.7402 19.5 18.8673 19.5 18.9999C19.5 19.1325 19.4473 19.2597 19.3536 19.3535C19.2598 19.4473 19.1326 19.4999 19 19.4999H1C0.867391 19.4999 0.740214 19.4473 0.646446 19.3535C0.552679 19.2597 0.5 19.1325 0.5 18.9999C0.5 18.8673 0.552679 18.7402 0.646446 18.6464C0.740214 18.5526 0.867391 18.4999 1 18.4999Z"
                      fill="#333333"
                    />
                    <path
                      d="M13.1148 0.641855C13.0684 0.595077 13.0131 0.557945 12.9523 0.532594C12.8914 0.50721 12.826 0.494141 12.76 0.494141C12.694 0.494141 12.6286 0.50721 12.5677 0.532594C12.5068 0.557978 12.4515 0.595175 12.405 0.64204L12.4042 0.642867L9.58418 3.47287L9.5833 3.47375L2.64499 10.402C2.64475 10.4023 2.6445 10.4025 2.64426 10.4028C2.59826 10.4494 2.56186 10.5045 2.53711 10.5651C2.51222 10.626 2.49961 10.6912 2.49999 10.757L2.50001 10.7599L2.5 14.9999C2.5 15.1325 2.55268 15.2597 2.64645 15.3535C2.74021 15.4473 2.86739 15.4999 3 15.4999H7.24H7.24289C7.30869 15.5003 7.37393 15.4877 7.43484 15.4628C7.49547 15.4381 7.55131 15.4009 7.59789 15.3549M13.1148 0.641855C13.1149 0.641917 13.1147 0.641793 13.1148 0.641855ZM13.1148 0.641855L17.3544 4.93141L17.3579 4.93494C17.4048 4.98142 17.442 5.03672 17.4673 5.09765C17.4927 5.15858 17.5058 5.22393 17.5058 5.28994C17.5058 5.35595 17.4927 5.4213 17.4673 5.48223C17.4421 5.54276 17.4052 5.59773 17.3588 5.64403C17.3585 5.64433 17.3582 5.64464 17.3579 5.64494L14.5202 8.42263L14.5162 8.42664L7.59789 15.3549M7.59789 15.3549C7.59767 15.3552 7.59811 15.3547 7.59789 15.3549ZM13.1136 2.05639L12.76 1.70283L12.4064 2.05639L10.9864 3.47639L10.6329 3.82994L10.9864 4.18349L13.8164 7.01349L14.17 7.36705L14.5236 7.01349L15.9436 5.59349L16.2971 5.23994L15.9436 4.88639L13.1136 2.05639ZM3.64645 10.8164L3.5 10.9628V11.1699V13.9999V14.4999H4H6.83H7.03711L7.18355 14.3535L13.1136 8.42349L13.4671 8.06994L13.1136 7.71639L10.2836 4.88639L9.93 4.53283L9.57645 4.88639L3.64645 10.8164ZM1 18.4999H19C19.1326 18.4999 19.2598 18.5526 19.3536 18.6464C19.4473 18.7402 19.5 18.8673 19.5 18.9999C19.5 19.1325 19.4473 19.2597 19.3536 19.3535C19.2598 19.4473 19.1326 19.4999 19 19.4999H1C0.867391 19.4999 0.740214 19.4473 0.646446 19.3535C0.552679 19.2597 0.5 19.1325 0.5 18.9999C0.5 18.8673 0.552679 18.7402 0.646446 18.6464C0.740214 18.5526 0.867391 18.4999 1 18.4999Z"
                      stroke="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_859_4">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className={style.textMenu}>Edit</p>
            </div>
          </a>
          <a className={style.linkMenu} href="#">
            <div className={style.containerMenu}>
              <div className={style.iconMenuD}>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_859_6)">
                    <path
                      d="M12.5 4V4.5H13H17C17.1326 4.5 17.2598 4.55268 17.3536 4.64645C17.4473 4.74021 17.5 4.86739 17.5 5C17.5 5.13261 17.4473 5.25979 17.3536 5.35355C17.2598 5.44732 17.1326 5.5 17 5.5H16H15.5V6V17C15.5 17.663 15.2366 18.2989 14.7678 18.7678C14.2989 19.2366 13.663 19.5 13 19.5H5C4.33696 19.5 3.70107 19.2366 3.23223 18.7678C2.76339 18.2989 2.5 17.663 2.5 17V6V5.5H2H1C0.867392 5.5 0.740215 5.44732 0.646446 5.35355C0.552678 5.25979 0.5 5.13261 0.5 5C0.5 4.86739 0.552678 4.74021 0.646446 4.64645C0.740215 4.55268 0.867392 4.5 1 4.5H5H5.5V4V3C5.5 2.33696 5.76339 1.70107 6.23223 1.23223C6.70107 0.763392 7.33696 0.5 8 0.5H10C10.663 0.5 11.2989 0.763392 11.7678 1.23223C12.2366 1.70107 12.5 2.33696 12.5 3V4ZM11 4.5H11.5V4V3C11.5 2.60217 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5H8C7.60218 1.5 7.22064 1.65804 6.93934 1.93934C6.65804 2.22064 6.5 2.60217 6.5 3V4V4.5H7H11ZM4 5.5H3.5V6V17C3.5 17.3978 3.65804 17.7794 3.93934 18.0607C4.22064 18.342 4.60218 18.5 5 18.5H13C13.3978 18.5 13.7794 18.342 14.0607 18.0607C14.342 17.7794 14.5 17.3978 14.5 17V6V5.5H14H4ZM7.35355 15.3536C7.25979 15.4473 7.13261 15.5 7 15.5C6.86739 15.5 6.74021 15.4473 6.64645 15.3536C6.55268 15.2598 6.5 15.1326 6.5 15V9C6.5 8.86739 6.55268 8.74022 6.64645 8.64645C6.74022 8.55268 6.86739 8.5 7 8.5C7.13261 8.5 7.25978 8.55268 7.35355 8.64645C7.44732 8.74022 7.5 8.86739 7.5 9V15C7.5 15.1326 7.44732 15.2598 7.35355 15.3536ZM11.3536 15.3536C11.2598 15.4473 11.1326 15.5 11 15.5C10.8674 15.5 10.7402 15.4473 10.6464 15.3536C10.5527 15.2598 10.5 15.1326 10.5 15V9C10.5 8.86739 10.5527 8.74022 10.6464 8.64645C10.7402 8.55268 10.8674 8.5 11 8.5C11.1326 8.5 11.2598 8.55268 11.3536 8.64645C11.4473 8.74022 11.5 8.86739 11.5 9V15C11.5 15.1326 11.4473 15.2598 11.3536 15.3536Z"
                      fill="#333333"
                      stroke="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_859_6">
                      <rect width="18" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className={style.textMenuD}>Delete</p>
            </div>
          </a>
        </div>
      )}
      <div className={style.popupEdit}>{isMenuOpen && <EditTask />}</div>
    </div>
  );
}

export default TaskCard;
