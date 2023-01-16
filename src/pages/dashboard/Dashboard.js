import { Helmet } from 'react-helmet-async'
// static files
import loading from "../../img/loading.png"
// components
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Navbar from "../../components/Navbar";

export default function Dashboard ({ user, isPending, error }) {
  return (
    <div className="dashboard bg-light">
      <Helmet>
        <title>Lendsqr | Dashboard</title>
        <meta name="description" content="At Lendsqr, many of our lenders use web apps to reach over half a million customers" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <div className="display-f">
        <Sidebar />
        <div className="container mr-2">
          <h1 className="font-lg mt-2 mb-2 text-primary">Dashboard</h1>
          <Card />
          {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
          {error && 
            <div className="error mt-2 text-primary font-lg bg-white p-2">{error}, but don't fret- let's give it another shot
            <button className="btn-blue text-white font-sm mt-1" onClick={() => window.location.reload()}>Refresh</button>
            </div>
          }
          {user && <Table user={user.slice(0, 10)} isPending={isPending} />}
        </div>
      </div>
    </div>
    );
}