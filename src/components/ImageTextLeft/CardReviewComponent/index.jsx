import React, { useState } from "react";
import { useStyles } from "./CardReview.styles";
import { Typography } from "@mui/material";

function CardReviewComponent(props) {
  const { place, opinion, name, placeReviewer, date, source, image } = props;
  const classes = useStyles();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.header}>
        <div className={classes.nameReviewer}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.placeReviewer}>
            {placeReviewer}
          </Typography>
        </div>
        <img src={image} alt={`${name}'s review`} className={classes.image} />
      </div>
      <div className={classes.content}>
        <Typography className={classes.place}>{place}</Typography>
        <Typography className={classes.date}>{date}</Typography>
        <Typography
          variant="body"
          className={`${classes.opinion} ${
            isHovered ? classes.expandedOpinion : ""
          }`}
        >
          {opinion}
        </Typography>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.source}
        >
          Fuente
        </a>
      </div>
    </div>
  );
}

export default CardReviewComponent;
