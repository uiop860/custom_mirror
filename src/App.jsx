import Weather from './comps/Weather';
import FlexBox from './styles/FlexBox';
import FlexItem from './styles/FlexItem';
import WeatherGraph from './comps/WeatherGraph';
import { useCallback, useState } from 'react';


function App() {
  
  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70, 80]);
  const updateData = useCallback(() => {
    const count = 5 + Math.round(Math.random() * 15);
    const values = [];
    for (let i = 0; i < count; i++) {
      values[i] = 10 + Math.round(Math.random() * 70);
    }
    setData(values);
  }, []);
  
  return (
    <FlexBox>
      <FlexItem>
        {/* <Weather/> */}
        <WeatherGraph/>
      </FlexItem>
    </FlexBox>
  );
}

export default App;
