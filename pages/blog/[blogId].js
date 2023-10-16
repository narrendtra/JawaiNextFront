import React, { Fragment } from "react";
import { getAllEvents, getblogEventById } from "../../hooks/api-utils";
import Image from "next/image";
import Link from "next/link";
import InnerTopBanner from "../../components/InnerTopBanner";
import RightLinks from "../../components/RightLinks";
import BlogCates from "../../components/BlogCates";

const BlogDetail = (props) => {
  const cdata = props.selectedEvent;
  return (
    <Fragment>
      <InnerTopBanner cimage="" />
      <section className="inner section">
        {cdata && (
          <div className="container">
            <h2 className="title">Blog</h2>
            <div className="row">
              <div className="col-md-8">
                <div className="blog-left">
                  <div className="row">
                    <div className="iBox02">
                      {cdata.image && (
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_URl +
                            "/blog_images/" +
                            cdata.image
                          }
                          className="img-fullwidth"
                          alt={cdata.alt_tag}
                          width={500}
                          height={300}
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}

                      <h3>{cdata.title}</h3>
                      <div className="blog-info">
                        <Link href="">{cdata.blog_date}</Link>
                        <Link href="">
                          <i className="fa fa-user"></i>By: {cdata.author_name}
                        </Link>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: cdata.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {cdata && (
                  <>
                    <RightLinks />
                    <BlogCates blogcats={props.blogcats} />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const actIds = context.params.blogId;
  const acts = await getblogEventById(actIds);
  const blogcatEvents = await getAllEvents("api/blogcates");
  return {
    props: {
      selectedEvent: acts,
      blogcats: blogcatEvents,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents("api/blogs");
  const paths = events.map((event) => ({
    params: { blogId: event.slug_url },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default BlogDetail;
