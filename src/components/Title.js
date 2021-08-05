import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../styles.css/TitleName";

const Title = () => {
  return (
    <div>
      <Link to="/">
      <TitlePage>EliteFit 8-Week Olympic Lifting Cycle</TitlePage>
      </Link>
     
    </div>
  );
};

export default Title;
