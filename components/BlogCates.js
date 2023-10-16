import React, { Fragment } from "react";
import Link from "next/link";

const BlogCates = (props) => {
  return (
    <Fragment>
      <div className="widgetlink">
        <h3 className="widget-title ">Categories</h3>
        <ul>
          {props.blogcats.map((blogcat) => (
            <li key={blogcat.id}>
              <Link href={`/blogs/${blogcat.slug_url}`}>
                <i className="fa fa-angle-right"></i> {blogcat.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BlogCates;
