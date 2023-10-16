import React, { Fragment } from "react";
import Link from "next/link";
import InnerTopBanner from "../components/InnerTopBanner";
import MetaTags from "../components/MetaTags";
function Custom404() {
  return (
    <Fragment>
      <MetaTags
        title="404 Error"
        description="404 Error"
        keywords="404 Error"
      />
      <InnerTopBanner cimage="" />
      <div class="row justify-content-center">
        <div class="col-md-12 col-sm-12">
          <div class="card shadow-lg border-0 rounded-lg mt-5 mx-auto">
            <h3 class="card-header display-1 text-muted text-center">404</h3>

            <span class="card-subtitle mb-2 text-muted text-center">
              Page Could Not Be Found
            </span>

            <div class="card-body mx-auto">
              <Link
                type="button"
                href="#"
                class="btn btn-sm btn-info text-white"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Custom404;
