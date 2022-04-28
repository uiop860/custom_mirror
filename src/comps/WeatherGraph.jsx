import { weatherApiResponse } from "../utils/apiTestResponse";
import Svg from "../styles/WeatherGraphStyle";

// visx
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { curveCatmullRom } from "@visx/curve";
import { AxisBottom } from "@visx/axis";

const WeatherGraph = () => {
  
  const margin = { top: 20, right: 20, bottom: 50, left: 20 };
  const width = 500;
  const height = 200;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  
  const timeScale = scaleLinear({
    domain: [Math.min(...weatherApiResponse.hourly.map(d => d.dt)), Math.max(...weatherApiResponse.hourly.map(d => d.dt))],
    range: [0, xMax],
    round: true
  });
  
  const tempScale = scaleLinear({
    domain: [Math.min(...weatherApiResponse.hourly.map(d => d.temp)), Math.max(...weatherApiResponse.hourly.map(d => d.temp))],
    range: [yMax, 0],
    round: true
  });
  
  return (
    <Svg width={width} height={height} >
      <Group top={margin.top} left={margin.left} >
        <AxisBottom tickFormat={(d) => new Date(d * 1000).getHours()} top={yMax} scale={timeScale} numTicks={20}/>
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