import { weatherApiResponse } from "../utils/apiTestResponse";

import { Group } from "@visx/group";
import { Line } from "@visx/shape";
import Svg from "../styles/WeatherGraphStyle";

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 600, pv: 2700, amt: 2500},
  {name: 'Page C', uv: 700, pv: 2800, amt: 2600},
  {name: 'Page D', uv: 800, pv: 2900, amt: 2700},
];

weatherApiResponse.hourly = weatherApiResponse.hourly.map(d => {
  d.dt = new Date(d.dt * 1000).getHours()
  return d;
});

const WeatherGraph = () => {
  


    return (
      <Svg width={"100%"} height={"100%"} viewBox={`0 0 ${500} ${500}`}>
        <rect fill={"black"} width={500} height={500}/>
        <Group top={0} left={0} >
          <Line from={{x:0, y:0}} to={{x:500, y:500}} ></Line>
          <Line from={{x:500, y:0}} to={{x:0, y:500}} ></Line>
        </Group>
      </Svg>
    );

};

export default WeatherGraph;
