import { weatherApiResponse } from "../utils/apiTestResponse";
import Svg from "../styles/WeatherGraphStyle";

// visx
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { curveCatmullRom } from "@visx/curve";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { HtmlLabel } from "@visx/annotation";
import { getWeatherIcon } from "../utils/utils";
import { useEffect, useState } from "react";

const WeatherGraph = () => {
  const [weatherIcon, setWeatherIcon] = useState([]);

  // get every thrid element in array
  let data = weatherApiResponse.hourly.filter((d, i) => i % 3 === 2);
  data.time = data.forEach((d) => (d.hours = new Date(d.dt * 1000).getHours()));

  useEffect(() => {
    
    
    
    getWeatherIcon(weatherApiResponse.hourly[20].weather).then((icon) => {
      setWeatherIcon(icon);
    });
  }, []);

  const margin = { top: 20, right: 20, bottom: 50, left: 50 };
  const width = 700;
  const height = 250;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const timeScale = scaleLinear({
    domain: [
      Math.min(...weatherApiResponse.hourly.map((d) => d.dt)),
      Math.max(...weatherApiResponse.hourly.map((d) => d.dt)),
    ],
    range: [0, xMax],
    round: true,
  });

  const tempScale = scaleLinear({
    domain: [
      Math.min(...weatherApiResponse.hourly.map((d) => d.temp)),
      Math.max(...weatherApiResponse.hourly.map((d) => d.temp)),
    ],
    range: [yMax, 0],
    round: true,
  });

  return (
    <Svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <AxisLeft scale={tempScale} left={-10} />
        <AxisBottom
          tickFormat={(d) =>
            ("0" + String(new Date(d * 1000).getHours())).slice(-2) + ":00"
          }
          top={yMax + 10}
          scale={timeScale}
          numTicks={12}
        />
        <LinePath
          data={weatherApiResponse.hourly}
          x={(d) => timeScale(d.dt)}
          y={(d) => tempScale(d.temp)}
          strokeWidth={2}
          stroke={"#000"}
          curve={curveCatmullRom}
        />
        {data.map((d, i) => (
          <HtmlLabel
            key={i}
            showAnchorLine={false}
            verticalAnchor={"middle"}
            x={timeScale(d.dt) + 20}
            y={tempScale(d.temp)}
            containerStyle={{ width: 40 }}
          >
            <img alt="" src={weatherIcon}></img>
          </HtmlLabel>
        ))}
      </Group>
    </Svg>
  );
};

export default WeatherGraph;
