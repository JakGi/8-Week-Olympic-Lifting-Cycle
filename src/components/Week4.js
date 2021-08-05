import React from "react";
import Exercise from "../styles.css/TreningStyles";
import DaysStyle from "../styles.css/DaysStyle";

const Week4 = () => {
  return (
    <div>
      <div>
        <DaysStyle>Monday</DaysStyle>
        <Exercise>
        Snatch 60%x2, 65%x2x2, 70%x2x3
        </Exercise>
        <Exercise>Snatch Pull 90% (of sn) x 2 x 2, 95% x 2 x 2</Exercise>
        <Exercise>Back Squat 70% x 3 x 5</Exercise>
      </div>
      <div>
        <DaysStyle>Tuesday</DaysStyle>
        <Exercise>Power Clean 70% x 2 x 5</Exercise>
        <Exercise>Push Jerk 60% (of split jerk) x 2 x 5</Exercise>
        <Exercise>Push Press 70% x 3 x 3</Exercise>
      </div>
      <div>
        <DaysStyle>Thursday</DaysStyle>
        <Exercise>Power Snatch 70% x 2 x 5</Exercise>
        <Exercise>Snatch Push Press + Overhead Squat 70% x 3+1 x 4</Exercise>
        <Exercise>
        Push Press 70% x 3 x 5
        </Exercise>
      </div>
      <div>
        <DaysStyle>Friday</DaysStyle>
        <Exercise>
        Clean & Jerk 60% x 2+1, 65% x 2+1 x 2, 70% x 2+1 x 3
        </Exercise>
        <Exercise>Clean Pull 90% (of cln) x 2 x 2, 95% x 2 x 2</Exercise>
        <Exercise>Front Squat 70% x 2 x 5</Exercise>
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

export default Week4;
