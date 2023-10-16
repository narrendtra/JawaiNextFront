import React, { Fragment } from "react";
import { getAllEvents } from "../hooks/api-utils";
import Image from "next/image";
import Link from "next/link";
import InnerTopBanner from "../components/InnerTopBanner";
import BlogRight from "../components/BlogRight";
import MetaTags from "../components/MetaTags";

const Blog = (props) => {
  return (
    <Fragment>
       <MetaTags title="Blog" description="Blog" keywords="Blog" />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        {props.blogEvents && (
          <div className="container">
            <h2 className="title">Blog</h2>
            <div className="row">
              <div className="col-md-8">
                <div className="blog-left">
                  <div className="row">
                    {props.blogEvents.map((blogdata) => (
                      <div className="col-sm-6" key={blogdata.id}>
                        <div className="iBox02">
                          {blogdata.image && (
                            <Image
                              src={
                                process.env.NEXT_PUBLIC_BACKEND_URl +
                                "/blog_images/" +
                                blogdata.image
                              }
                              className="img-fullwidth"
                              alt={blogdata.alt_tag}
                              width="500"
                              height="245"
                              style={{ width: "100%", height: "auto" }}
                            />
                          )}
                          <h3>
                            <Link href={`/blog/${blogdata.slug_url}`}>
                              {blogdata.title}
                            </Link>
                          </h3>
                          <div className="blog-info">
                            <Link href={`/blog/${blogdata.slug_url}`}>
                              <i className="fa fa-clock-o"></i>
                              {blogdata.blog_date}{" "}
                            </Link>
                            <Link href={`/blog/${blogdata.slug_url}`}>
                              <i className="fa fa-user"></i>By:
                              {blogdata.author_name}{" "}
                            </Link>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: blogdata.description
                                ? blogdata.description.substring(0, 120)
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {props.blogEvents && (
                  <BlogRight
                    baseURLs={
                      process.env.NEXT_PUBLIC_BACKEND_URl + "/blog_images/"
                    }
                    latest={props.blogEvents}
                    blogcats={props.blogcatEvents}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const blogEvents = await getAllEvents("api/blogs");
  const blogcatEvents = await getAllEvents("api/blogcates");
  return {
    props: {
      blogEvents: blogEvents,
      blogcatEvents: blogcatEvents,
    },
    revalidate: 1800,
  };
}
export default Blog;
