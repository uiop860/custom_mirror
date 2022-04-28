import { weatherApiResponse } from "../utils/apiTestResponse";

import { Group } from "@visx/group";
import { Line } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
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
  
  const width = 500;
  const height = 500;
  
  const [minX, maxX] = [Math.min(...weatherApiResponse.hourly.map(d => d.dt)), Math.max(...weatherApiResponse.hourly.map(d => d.dt))]
  const [minY, maxY] = [Math.min(...weatherApiResponse.hourly.map(d => d.temp)), Math.max(...weatherApiResponse.hourly.map(d => d.temp))]
  
  const xScale = scaleLinear({
    domain: [minX, maxX],
    range: [0, width],
    round: true
  });
  
  const yScale = scaleLinear({
    domain: [minY, maxY],
    range: [height, 0],
    round: true
  });
  
  return (
    <Svg width={"100%"} height={"100%"} viewBox={`0 0 ${500} ${500}`}>
      <Group top={0} left={0} >
        {weatherApiResponse.hourly.map((d, i) => {
          return (
            <Line
              key={i}
              from={{ x: xScale(d.dt), y: yScale(d.temp) }}
              to={{ x: xScale(d.dt+1), y: yScale(d.temp+1) }}
            />
          );
        })}
      </Group>
    </Svg>
  );
};

export default WeatherGraph;
