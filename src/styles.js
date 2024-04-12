import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontFamily: "Times New Roman",
    color: "#cd6133",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  image: {
    borderRadius: "10px",
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "8px",
      borderRadius: "15px",
      height: "45px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
