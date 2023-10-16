import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import HomeEnquiry from "../components/HomeEnquiry";
import Tripadvisor from "../components/Tripadvisor";

const Blogs = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <section className="testi section">
      <Container>
        <Row>
          <Col sm={4}>
            <h2>Blog</h2>
            <div className="blog-left m-0">
              <Row>
                {props.blogs.slice(0, 2).map((blogdata) => (
                  <Col sm={12} key={blogdata.id}>
                    <div className="iBox02">
                      <h3>
                        <Link href={`/blog/${blogdata.slug_url}`}>
                          {blogdata.title}
                        </Link>
                      </h3>
                      <div className="blog-info">
                        <a>
                          <i className="fa fa-clock-o"></i>
                          {blogdata.blog_date}
                        </a>
                        <a>
                          <i className="fa fa-folder"></i>
                          {blogdata.author_name}{" "}
                        </a>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blogdata.description
                            ? blogdata.description.substring(0, 40)
                            : "",
                        }}
                      />
                      <Link
                        className="btn btn-dark btn-sm m-2"
                        href={`/blog/${blogdata.slug_url}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          <Col sm={4}>
            <HomeEnquiry submitForm={submitForm} />
          </Col>
          <Col sm={4}>
            <Tripadvisor />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
