import React from "react";
import styled from "styled-components";


const MainText = styled.p ` 
    font-size: 1.3rem;
    border-top: 1px solid black;
`
const ListText = styled.li ` 
    margin-top: 30px;
`
const Notes = styled.p ` 
color: red;
border-top: 1px solid black;
`

const MainPage = () => {
  return (
    <div>
      <MainText>
        This is an 8-week cycle using 3-position snatches and cleans, power
        snatches and power cleans, and plenty of pulls, squats and classic
        snatch and clean & jerk.
      </MainText>
      <Notes>NOTES</Notes>
      <ul>
        <ListText>
          Conditioning work conducted during scheduled Strangth & Conditioning
          WODs.
        </ListText>
        <ListText>
          Your 1RMs are likely not accurate, and you may have to adjust the
          prescribed weights up if they feel too easy
        </ListText>
      </ul>
    </div>
  );
};

export default MainPage;
