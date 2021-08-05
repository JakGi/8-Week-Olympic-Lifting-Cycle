import React from "react";
import Exercise from "../styles.css/TreningStyles";
import DaysStyle from "../styles.css/DaysStyle";

const Week3 = () => {
  return (
    <div>
      <div>
        <DaysStyle>Monday</DaysStyle>
        <Exercise>
        3-Position Snatch (ground, below knee, above knee) 60%, 65%, 70%, 75%, 80%, max
        </Exercise>
        <Exercise>Snatch Pull 100% (of sn) x 3 x 4</Exercise>
        <Exercise>Back Squat 70% x 5, 75% x 5, 80% x 5, 5RM</Exercise>
        <Exercise>Push Press 70% x 5, 75% x 5, 5RM</Exercise>
      </div>
      <div>
        <DaysStyle>Tuesday</DaysStyle>
        <Exercise>Power Clean 70% x 3, 75% x 3, 80% x 3, 3RM</Exercise>
        <Exercise>Push Jerk 60% (of split jerk) x 3, 65% x 3, 70% x 3, 3RM</Exercise>
        <Exercise>Overhead Squat 70% x 3, 75% x 3, 80% x 3, 3RM</Exercise>
      </div>
      <div>
        <DaysStyle>Thursday</DaysStyle>
        <Exercise>Power Snatch 70% x 3, 75% x 3, 80% x 3, 3RM</Exercise>
        <Exercise>Snatch High-Pull 75% (of sn) x 3 x 3, 80% x 3 x 2</Exercise>
        <Exercise>
        Snatch Push Press + Overhead Squat 70% (of sn or ohs) x 5+1, 75% x 5+1, 80% x 5+1, max 5+1
        </Exercise>
      </div>
      <div>
        <DaysStyle>Friday</DaysStyle>
        <Exercise>
        3-Position Clean (ground, below knee, above knee) + Jerk 60%, 65%, 70%, 75%, 80%, max
        </Exercise>
        <Exercise>Clean Pull 100% (of cln) x 3 x 4
</Exercise>
        <Exercise>Front Squat 70% x 3, 75% x 3, 80% x 3, 3RM</Exercise>
        <Exercise>Good Morning 3×5</Exercise>
      </div>
      <div>
        <DaysStyle>Sunday</DaysStyle>
        <Exercise>Snatch 60%x2, 70%x2, 80%x1, heavy single</Exercise>
        <Exercise>
        Clean & Jerk 60%x2+1, 70%x2+1, 80%x1+1, heavy single
        </Exercise>
        <Exercise>Back Squat 70% x 3, 75% x 3, 80% x 3, 85% x 3, 3RM</Exercise>
        <Exercise>Stiff-legged Deadlift 3×5</Exercise>
      </div>
    </div>
  );
};

export default Week3;
