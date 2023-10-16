import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogCates from "./BlogCates";
import RightLinks from "./RightLinks";
const BlogRight = (props) => {
  return (
    <Fragment>
      <RightLinks />
      {props.latest && <BlogCates blogcats={props.blogcats} />}
      <div className="blog-right">
        {props.latest && (
          <div className="latest-news">
            <h3>Latest Posts</h3>
            {props.latest.map((reclatest) => (
              <div className="single-news" key={reclatest.id}>
                <Image
                  src={props.baseURLs + reclatest.image}
                  alt={reclatest.alt_tag}
                  width="120"
                  height="15"
                />
                <h4>
                  <Link href={`/blog/${reclatest.slug_url}`}>
                    {reclatest.title}
                  </Link>
                </h4>
                <p>{reclatest.blog_date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default BlogRight;
