import LazyLoad from "react-lazy-load";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="mt-10">
      <LazyLoad><img className=" mx-auto mb-5 rounded-lg relative h-[500px]" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="" /></LazyLoad>
      <div className="absolute top-[49%] lg:top-[70%] left-[15%] lg:left-[40%]">
        <h1 className="text-4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Link to="/"><button className="btn btn-primary normal-case text-base">Back To Homepage</button></Link>
    </div>
  );
}