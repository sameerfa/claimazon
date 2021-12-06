import { ListItem, Typography } from "@material-ui/core";
import useStyles from "../../utils/styles";

function Tags({ tags }) {
  const classes = useStyles();
  if (!tags) return null;
  const allTags = tags.map((tag) => (
    <span key={tag.id} className={classes.tags}>
      {tag.name}
    </span>
  ));
  return (
    <ListItem>
      <Typography>Tags: {allTags}</Typography>
    </ListItem>
  );
}

export default Tags;
