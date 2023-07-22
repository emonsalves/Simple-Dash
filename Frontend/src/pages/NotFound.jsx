import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>404</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export { NotFound };
