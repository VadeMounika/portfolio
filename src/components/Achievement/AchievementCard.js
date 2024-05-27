import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AiOutlineFolder } from "react-icons/ai";

import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
      cursor: "pointer",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent: {
      backgroundColor: theme.background,
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      borderRadius: "8px",
      outline: "none",
      maxWidth: "80vw",
      maxHeight: "80vh",
      overflow: "auto",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
    },
  }));
  // const handleCloseModal = (event) => {
  //   if (event.target === event.currentTarget) {
  //     setIsModalOpen(false);
  //     console.log("Close " + isModalOpen);
  //   }
  // };

  // const handleOpenModal = async () => {
  //   setIsModalOpen(true);
  //   console.log("open " + isModalOpen);
  // };
  // useEffect(() => {
  //   console.log("open " + isModalOpen);
  // }, [isModalOpen]);

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        key={id}
        className={`achievement-card ${classes.achievementCard}`}
        // onClick={handleOpenModal}
      >
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: theme.primary }}>{title}</h2>
            <p style={{ color: theme.tertiary80 }}>{details}</p>
          </div>
          <div
            className="achievecard-details2"
            style={{ color: theme.primary }}
          >
            <h5>{date}</h5>
            <div className="achievecard-field">
              <AiOutlineFolder />
              <h5>{field}</h5>
            </div>
          </div>
        </div>
        <div className="achievecard-imgcontainer">
          <img src={image} alt="" />
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;
