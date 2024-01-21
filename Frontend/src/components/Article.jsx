import { Box, Card, Container, colors } from "@mui/material";
import React from "react";

const Article = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <Container className="my-3">
      <Box className="card" style={{ width: "18rem" }} sx={{ '@media (max-width:600px)': { marginLeft:'7rem' } }}>
        <img src={imageUrl} className="card-img-top" alt="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png" />
        <div className="card-body">
          <h5 className="card-title" style={{color:"black" ,fontFamily:'times-new-roman'}}>{title}...</h5>
          <p className="card-text" style={{color:"grey"}}>{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </Box>
    </Container>
  );
};

export default Article;
