import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function NotFound () {
  return (
    <div className="container">
      <Helmet>
        <title>404</title>
        <meta name="description" content="Not found" />
        <link rel="canonical" href="/*" />
      </Helmet>
      <div className="not-found">
        <div className="bg-primary">
          <h1 className="font-xxl text-white">404</h1>
          <h2 className="font-xl text-white">This is not the web page your are looking for</h2>
          <Link className="bg-white font-lg text-primary p-2" to="/search">Back to safety</Link>
        </div>
      </div>
    </div>
  );
}