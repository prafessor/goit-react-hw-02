import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Option from "../Option/Option";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const result = localStorage.getItem("feedback");

    if (result !== null) {
      return JSON.parse(result);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const handleClick = (btn) => {
    if (btn === "reset") {
      setClicks({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }

    setClicks({
      ...clicks,
      [btn]: clicks[btn] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <>
      <Description />

      <Option onClick={handleClick} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback data={clicks} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
