import React from "react";
import Exercise from "../styles.css/TreningStyles";
import DaysStyle from "../styles.css/DaysStyle";

const Week1 = () => {
  return (
    <div>
      <div>
        <DaysStyle>Monday</DaysStyle>
        <Exercise>
          3-Position Snatch (ground, below knee, above knee) 60%, 65%, 70% x 4
          sets
        </Exercise>
        <Exercise>Snatch Pull 90% (of sn) x 3 x 2, 95% x 3 x 2</Exercise>
        <Exercise>Back Squat 70% x 5 x 5</Exercise>
        <Exercise>Push Press 70% x 5 x 5</Exercise>
      </div>
      <div>
        <DaysStyle>Tuesday</DaysStyle>
        <Exercise>Power Clean 70% x 3 x 5</Exercise>
        <Exercise>Push Jerk 60% (of split jerk) x 3 x 5</Exercise>
        <Exercise>Overhead Squat 70% x 3 x 5</Exercise>
      </div>
      <div>
        <DaysStyle>Thursday</DaysStyle>
        <Exercise>Power Snatch 70% x 3 x 5</Exercise>
        <Exercise>Snatch High-Pull 70% (of sn) x 3 x 5</Exercise>
        <Exercise>
          Snatch Push Press + Overhead Squat 70% (of sn or ohs) x 5+1 x 5
        </Exercise>
      </div>
      <div>
        <DaysStyle>Friday</DaysStyle>
        <Exercise>
        3-Position Clean (ground, below knee, above knee) + Jerk 60%, 65%, 70% x 4 sets
        </Exercise>
        <Exercise>Clean Pull 90% (of cln) x 3 x 2, 95% x 3 x 2</Exercise>
        <Exercise>Front Squat 70% x 3 x 5</Exercise>
        <Exercise>Good Morning 3×5</Exercise>
      </div>
      <div>
        <DaysStyle>Sunday</DaysStyle>
        <Exercise>
        Snatch 60% x 2, 70% x 2, 80% x 2, heavy single
        </Exercise>
        <Exercise>Clean & Jerk 60% x 2+1, 70% x 2+1, 80% x 2+1, heavy single</Exercise>
        <Exercise>Back Squat 75% x 3 x 5</Exercise>
        <Exercise>Stiff-legged Deadlift 3 x 5</Exercise>
      </div>
      
    </div>
  );
};

export default Week1;
