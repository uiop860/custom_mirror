import { weatherApiResponse } from "../utils/apiTestResponse";

import { Group } from "@visx/group";
import { Line , LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import Svg from "../styles/WeatherGraphStyle";
import { curveBasis , curveCatmullRom } from "@visx/curve";
import cityTemperature from '@visx/mock-data/lib/mocks/cityTemperature';

// weatherApiResponse.hourly = weatherApiResponse.hourly.map(d => {
//   d.dt = new Date(d.dt * 1000).getHours()
//   return d;
// });

const WeatherGraph = () => {
  
  const width = 500;
  const height = 200;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  
  const timeScale = scaleLinear({
    domain: [Math.min(...weatherApiResponse.hourly.map(d => d.dt)), Math.max(...weatherApiResponse.hourly.map(d => d.dt))],
    range: [0, width - margin.left - margin.right],
    round: true
  });
  
  const tempScale = scaleLinear({
    domain: [Math.min(...weatherApiResponse.hourly.map(d => d.temp)), Math.max(...weatherApiResponse.hourly.map(d => d.temp))],
    range: [height - margin.top - margin.bottom, 0],
    round: true
  });
  
  return (
    <Svg width={width} height={height} >
      <Group top={margin.top} left={margin.left} >
        <LinePath
          data={weatherApiResponse.hourly}
          x={(d) => timeScale(d.dt)}
          y={(d) => tempScale(d.temp)}
          strokeWidth={2}
          stroke={"#000"}
          curve={curveCatmullRom}
        />
      </Group>
    </Svg>
  );
};

export default WeatherGraph;
