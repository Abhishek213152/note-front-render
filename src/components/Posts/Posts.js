import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    if (posts.length > 0) {
      setIsLoading(false);
    }
  }, [posts]);

  return (
    <>
      {isLoading ? (
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{ height: "100vh" }}
        >
          <Grid item>
            <CircularProgress />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "10px",
                marginTop: "8px",
              }}
            >
              Loading...
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
