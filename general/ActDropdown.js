import React, { Fragment } from "react";
import Link from "next/link";

const ActDropdown = (props) => {
  return (
    <Fragment>
      <>
        {props.actEvents?.map((actdata) => (
          <li key={actdata.id}>
            <Link href={`/activity/${actdata.slug_url}`}>{actdata.title}</Link>
          </li>
        ))}
      </>
    </Fragment>
  );
};

export default ActDropdown;
