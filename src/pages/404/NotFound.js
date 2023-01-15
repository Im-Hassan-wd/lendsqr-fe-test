import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/Navbar";

export default function NotFound () {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Lendsqr | 404</title>
        <meta name="description" content="Page Not found" />
        <link rel="canonical" href="/*" />
      </Helmet>
      <div className="not-found">
        <div className="bg-primary">
          <Navbar />
          <h1 className="font-xxl text-white pl-5">404</h1>
          <h2 className="font-xl text-white pl-5 pr-5">This is not the web page your are looking for</h2>
          <Link className="bg-white font-lg text-primary p-2" to="/">Back to safety</Link>
        </div>
      </div>
    </div>
  );
}