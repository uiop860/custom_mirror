import { useEffect, useState } from "react";
import Weather from "./comps/Weather";
import FlexBox from "./styles/FlexBox";
import FlexItem from "./styles/FlexItem";

function App() {
  const [updateTimer, setUpdateTimer] = useState(false);

  // updates weather date every hour
  const hour = 60 * 60 * 1000;
  const currentDate = new Date();
  const firstCall =
    hour -
    (currentDate.getMinutes() * 60 + currentDate.getSeconds()) * 1000 -
    currentDate.getMilliseconds();

  useEffect(() => {
    const timer = setInterval(() => {
      setUpdateTimer(!updateTimer);
      setTimeout(setUpdateTimer(!updateTimer), hour);
    }, firstCall);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <FlexBox>
      <FlexItem>
        <Weather updateTimer={updateTimer} />
        <p>{String(updateTimer)}</p>
      </FlexItem>
    </FlexBox>
  );
}

export default App;
