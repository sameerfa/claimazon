import { ListItem, Typography } from "@material-ui/core";
import useStyles from "../../utils/styles";

function Rating({ rating }) {
  const classes = useStyles();
  const total = 5;
  const star = "★".repeat(rating);
  const emptyStar = "☆".repeat(total - rating);
  return (
    <ListItem>
      <Typography>
        Rating:{" "}
        <span className={classes.stars}>
          {star}
          {emptyStar}
        </span>
      </Typography>
    </ListItem>
  );
}

export default Rating;
