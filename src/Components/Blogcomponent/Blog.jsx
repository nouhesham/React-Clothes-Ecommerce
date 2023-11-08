import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

import Tilt from "react-parallax-tilt";
import "./BlogSection.css";
import axios from "axios";

const BlogSection = () => {
  const [articleslist, setData] = useState({});

  const fetchData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=apple&from=2023-11-07&to=2023-11-07&sortBy=popularity&apiKey=4ff734a982784fbeb8ca580b3af320fd"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="blogs">
      <Container>
        <h2 className="text-center font-details-b pb-4">Latest Blogs</h2>
        <div className="row">
          {Array.isArray(articleslist) &&
            articleslist?.map((article) => {
              if (!article.content || !article.urlToImage) {
                return null;
              }
              return (
                <div className="col-lg-4" key={article.id}>
                  <Tilt>
                    <Card className="card-resize m-2">
                      <Card.Img
                        className="image-resize"
                        variant="top"
                        src={article.urlToImage && article?.urlToImage}
                        alt="Blog 1"
                      />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {article.content && article?.content?.slice(0, 29)}
                        </Card.Title>
                        <Card.Text className="text-center">
                          {article?.description?.slice(0, 100)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tilt>
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};
export default BlogSection;
