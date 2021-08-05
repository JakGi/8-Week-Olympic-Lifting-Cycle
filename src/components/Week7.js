import React from "react";
import Exercise from "../styles.css/TreningStyles";
import DaysStyle from "../styles.css/DaysStyle";

const Week7 = () => {
  return (
    <div>
      <div>
        <DaysStyle>Monday</DaysStyle>
        <Exercise>
        Snatch 60% x 3, 65% x 3, 70% x 2, 75% x 2, 80% x 2, 2RM
        </Exercise>
        <Exercise>Snatch Pull 100% (of sn) x 3, 105% x 3, 110% 3 x 2</Exercise>
        <Exercise>Back Squat 70% x 3, 75% x 3, 80% x 3, 3RM</Exercise>
        <Exercise>Push Press 70% x 3, 75% x 3, 80% x 2, 85% x 1, 1RM</Exercise>
      </div>
      <div>
        <DaysStyle>Tuesday</DaysStyle>
        <Exercise>Power Snatch 70% x 3, 75% x 2, 80% x 1, 85% x 1, 1RM</Exercise>
        <Exercise>Power Clean + Push Jerk 75% 1+1 x 2, 80% 1+1 x 3</Exercise>
        <Exercise>Overhead Squat 70% x 2, 75% x 2, 80% x 1, 85% x 1, 1RM</Exercise>
      </div>
      <div>
        <DaysStyle>Thursday</DaysStyle>
        <Exercise>Power Snatch 70% x 2, 75% x 2, 80% x 1, 85% x 1 x 3</Exercise>
        <Exercise>Power Clean + Push Jerk 75% x 1+1, 80% x 1+1, 85% x 1+1, 1+1RM</Exercise>
        <Exercise>
        Snatch Balance 70% 3 x 2, 75% 3 x 3
        </Exercise>
      </div>
      <div>
        <DaysStyle>Friday</DaysStyle>
        <Exercise>
        Clean & Jerk 60% x 2+1, 65% x 2+1, 70% x 2+1, 75% x 2+1, 80% x 2+1, 2+1RM
        </Exercise>
        <Exercise>Clean Pull 100% (of cln) x 3, 105% x 3, 110% 3 x 2</Exercise>
        <Exercise>Front Squat 70% x 2, 75% x 2, 80% x 2, 85% x 2, 2RM</Exercise>
        <Exercise>Stiff-legged Deadlift 3×5</Exercise>
      </div>
      <div>
        <DaysStyle>Sunday</DaysStyle>
        <Exercise>Snatch 60% x 2, 70% x 2, 75% x 2, 80% x 1, 85% x 1, 90% x 1, heavy single</Exercise>
        <Exercise>
        Clean & Jerk 60% x 2+1, 70% x 2+1, 80% x 1+1, 85% x 1+1, 90% x 1+1, heavy single
        </Exercise>
        <Exercise>Back Squat 75% x 2, 80% x 2, 85% x 2, 2RM</Exercise>
        <Exercise>Good Morning 3×5</Exercise>
      </div>
    </div>
  );
};

export default Week7;
