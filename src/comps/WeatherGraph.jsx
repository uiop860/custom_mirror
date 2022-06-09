import { weatherApi29_05 } from "../utils/apiTestResponse";
import Svg from "../styles/WeatherGraphStyle";
import utils from "../utils/utils";

// visx
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { curveCatmullRom } from "@visx/curve";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { HtmlLabel } from "@visx/annotation";
import { getWeatherIcon } from "../utils/utils";
import { useEffect, useState } from "react";
import DynText from "../styles/DynText";

const WeatherGraph = () => {
  const api = weatherApi29_05;

  const [weatherIcon, setWeatherIcon] = useState([]);

  // get every thrid element in array
  let data = api.hourly.filter((d, i) => i % 3 === 2);
  data.forEach((d) => (d.hours = new Date(d.dt * 1000).getHours()));

  useEffect(() => {
    api.hourly.forEach((d, i) => {
      getWeatherIcon(d.weather).then((icon) => {
        setWeatherIcon((weatherIcon) => [...weatherIcon, icon]);
      });
    });
  }, []);

  const margin = { top: 40, right: 20, bottom: 50, left: 50 };
  const width = 700;
  const height = 200;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const timeScale = scaleLinear({
    domain: [
      Math.min(...api.hourly.map((d) => d.dt)),
      Math.max(...api.hourly.map((d) => d.dt)),
    ],
    range: [0, xMax],
    round: true,
  });

  const tempScale = scaleLinear({
    domain: [
      // Math.min(...api.hourly.map((d) => d.temp)),
      0,
      Math.max(...api.hourly.map((d) => d.temp)),
    ],
    range: [yMax, 0],
    round: true,
  });

  return (
    <Svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        {/* <Group top={0} left={0}> */}
        {/* <AxisLeft scale={tempScale} left={-10} /> */}
        {/* <AxisBottom
          tickFormat={(d) =>
            ("0" + String(new Date(d * 1000).getHours())).slice(-2) + ":00"
          }
          top={yMax + 10}
          scale={timeScale}
          numTicks={12}
        /> */}
        <LinePath
          data={api.hourly}
          x={(d) => timeScale(d.dt)}
          y={(d) => tempScale(d.temp)}
          strokeWidth={2}
          stroke={"#000"}
          curve={curveCatmullRom}
        />
        {data.map((d, i) => (
          <>
            <HtmlLabel
              key={Math.random()}
              showAnchorLine={false}
              verticalAnchor={"middle"}
              x={timeScale(d.dt)}
              y={tempScale(d.temp) - 15}
              containerStyle={{ display: "flex", justifyContent: "center" }}
            >
              <DynText fontSize="15px">{Math.round(d.temp)}</DynText>
            </HtmlLabel>
            <HtmlLabel
              key={Math.random()}
              showAnchorLine={false}
              verticalAnchor={"middle"}
              x={timeScale(d.dt)}
              y={yMax + 20}
              containerStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{ height: "50px" }} alt="" src={weatherIcon[i]}></img>
              <DynText fontSize="13px">
                {("0" + String(new Date(d.dt * 1000).getHours())).slice(-2) +
                  ":00"}
              </DynText>
            </HtmlLabel>
          </>
        ))}
      </Group>
    </Svg>
  );
};

export default WeatherGraph;
