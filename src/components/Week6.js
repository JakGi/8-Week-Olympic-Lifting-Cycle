import React from "react";
import Exercise from "../styles.css/TreningStyles";
import DaysStyle from "../styles.css/DaysStyle";

const Week6 = () => {
  return (
    <div>
      <div>
        <DaysStyle>Monday</DaysStyle>
        <Exercise>
        Snatch 60% x 3, 65% x 3, 70% x 2, 75% x 2, 80% x 2 x 3
        </Exercise>
        <Exercise>Snatch Pull 100% (of sn) x 3 x 2, 105% x 3 x 2</Exercise>
        <Exercise>Back Squat 70% x 3, 75% x 3, 80% x 3 x 3</Exercise>
        <Exercise>Push Press 70% x 5, 75% x 5, 80% x 3, 85% x 3 x 2</Exercise>
      </div>
      <div>
        <DaysStyle>Tuesday</DaysStyle>
        <Exercise>Power Snatch 70% x 3, 75% x 3, 80% x 2 x 2, 85% x 2 x 2</Exercise>
        <Exercise>Power Clean + Push Jerk 75% x 1+1 x 3, 80% x 1+1 x 2</Exercise>
        <Exercise>Overhead Squat 80% x 2 x 2, 85% x  2 x 3</Exercise>
      </div>
      <div>
        <DaysStyle>Thursday</DaysStyle>
        <Exercise>Power Snatch 70% x 2, 75% x 2, 80% x 1 x 2, 85% x 1 x 2</Exercise>
        <Exercise>Power Clean + Push Jerk 75% x 2 (1+1) x 2, 80% x 2 (1+1) x 2</Exercise>
        <Exercise>
        Snatch Push Press + Overhead Squat 70% x 3+1, 75% x 3+1, 80% x 3+1, 85% x 3+1 x 2
        </Exercise>
      </div>
      <div>
        <DaysStyle>Friday</DaysStyle>
        <Exercise>
        Clean & Jerk 60% x 3+1, 65% x 3+1, 70% x 2+1, 75% x 2+1, 80% x 2+1 x 3
        </Exercise>
        <Exercise>Clean Pull 100% (of cln) x 3 x 2, 105% x 2 x 2</Exercise>
        <Exercise>Front Squat 70% x 2, 75% x 2, 80% x 2, 85% x 2 x 3</Exercise>
        <Exercise>Stiff-legged Deadlift 3 x 5</Exercise>
      </div>
      <div>
        <DaysStyle>Sunday</DaysStyle>
        <Exercise>Snatch 60% x 2, 70% x 2, 75% x 2, 80% x 1, 85% x 1, 90% x 1, heavy single</Exercise>
        <Exercise>
        Clean & Jerk 60% x 2+1, 70% x 2+1, 80% x 1+1, 85% x 1+1, 90% x 1+1, heavy single
        </Exercise>
        <Exercise>Back Squat 75% x 3, 80% 3 x 2, 85% 3 x 2</Exercise>
        <Exercise>Good Morning 3 x 5</Exercise>
      </div>
    </div>
  );
};

export default Week6;
