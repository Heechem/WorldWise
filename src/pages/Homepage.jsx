import { Link } from "react-router-dom";
import PageNAv from "../components/PageNAv";

function Homepage() {
  return (
    <div>
      <PageNAv />
      <h1>Worldwise</h1>

      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
