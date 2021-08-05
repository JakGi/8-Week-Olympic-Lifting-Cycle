import React from "react";
import Exercise from "../styles.css/TreningStyles";
import DaysStyle from "../styles.css/DaysStyle";

const Week8 = () => {
  return (
    <div>
      <div>
        <DaysStyle>Monday</DaysStyle>
        <Exercise>
        Snatch 75% x 2, 80% x 1, 85% 1 x 3
        </Exercise>
        <Exercise>Clean & Jerk 75% x 1+1, 80% x 1+1, 85% x 1+1</Exercise>
        <Exercise>Clean Pull 90% (of cln) x 2, 95% 2 x 2</Exercise>
        <Exercise>Back Squat 75% x 3, 80% x 2, 85% 2 x 2</Exercise>
      </div>
      <div>
        <DaysStyle>Tuesday</DaysStyle>
        <Exercise>Snatch 75% x 1 x 6</Exercise>
        <Exercise>Power Clean & Jerk 75% x 1+1, 80% x 1+1, 85% 1+1 x 3</Exercise>
      </div>
      <div>
        <DaysStyle>Thursday</DaysStyle>
        <Exercise>Power Snatch 75% x 2, 80% x 2, 85% 2 x 3</Exercise>
        <Exercise>Clean & Jerk 70% x 1+1, 75% x 1+1 x 2</Exercise>
      </div>
      <div>
        <DaysStyle>Friday</DaysStyle>
        <Exercise>
        Snatch 75% x 2, 80% 1 x 3
        </Exercise>
        <Exercise>Snatch Pull 90% (of sn) 2 x 3</Exercise>
        <Exercise>Front Squat 75% x 2, 80% x 1, 85% x 1</Exercise>
      </div>
      <div>
      <DaysStyle>Sunday</DaysStyle>
        <Exercise>Snatch max</Exercise>
        <Exercise>
        Clean & Jerk max
        </Exercise>
        <Exercise>Back Squat max</Exercise>
        <Exercise>Front Squat max</Exercise>
        <Exercise>Overhead Squat Max</Exercise>
        <Exercise>Push Press Max</Exercise>
      </div>
    </div>
  );
};

export default Week8;
