import { Grid, Typography } from "@material-ui/core";
import useStyles from "../../utils/styles";
import Rating from "../Rating";

function Reviews({ reviews }) {
  const classes = useStyles();
  if (!reviews) return null;
  const allReviews = reviews.map((review) => (
    <div key={review.id} className={classes.review}>
      {review.message ? review.message : "No Message"}
      <Rating rating={review.rating} />
    </div>
  ));
  return (
    <Grid item md={9} xs={12}>
      <Typography variant="h2"> Reviews: </Typography>
      {allReviews}
    </Grid>
  );
}

export default Reviews;
