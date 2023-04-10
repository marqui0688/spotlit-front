import "./Home.scss";
import axios from "axios";
import { AuditionList } from "../components/AuditionList/AuditionList";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [auditionData, setAuditionData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5050/auditions")
      .then((result) => {
        console.log(result.data);
        setAuditionData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <p className="header-1">My Auditions</p>
      <button onClick={() => navigate("/addaudition")}>Add Addition</button>
      {auditionData.length > 0 ? (
        <AuditionList auditionData={auditionData} />
      ) : (
        ""
      )}
    </div>
  );
};

export { Home };
export default Header;
