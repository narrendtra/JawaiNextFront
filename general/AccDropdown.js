import { Fragment } from "react";
import Link from "next/link";
const AccDropdown = (props) => {
  return (
    <Fragment>
      <>
        {props.accEvents?.map((acmdata) => (
          <li key={acmdata.id}>
            <Link href={`/accommodation/${acmdata.slug_url}`}>
              {acmdata.title}
            </Link>
          </li>
        ))}
      </>
    </Fragment>
  );
};

export default AccDropdown;
