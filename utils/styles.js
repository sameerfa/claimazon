import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    margin: 50,
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  tags: {
    borderRadius: 5,
    backgroundColor: "#203040",
    padding: 5,
    margin: 5,
    fontSize: "0.8rem",
    color: "#ffffff",
  },
  stars: {
    color: "#f0c000",
  },
  review: {
    padding: 10,
    borderRadius: 5,
    background: "#203040",
    margin: 10,
    color: "#ffffff",
  },
});
export default useStyles;
