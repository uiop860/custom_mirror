import Svg from "../styles/Svg";
import { getWeatherIcon } from "../utils/utils";
import { useEffect, useState } from "react";
import DynText from "../styles/DynText";

// visx
import { curveCatmullRom } from "@visx/curve";
import { HtmlLabel } from "@visx/annotation";
import { scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { Group } from "@visx/group";

const WeatherGraph = ({ weather }) => {
  const [weatherIcon, setWeatherIcon] = useState({});

  // get every thrid element in array
  let data = weather.hourly.filter((_, i) => i % 3 === 2);
  data.forEach((d) => (d.hours = new Date(d.dt * 1000).getHours()));

  useEffect(() => {
    data.forEach((d, i) => {
      getWeatherIcon(d.weather).then((icon) => {
        setWeatherIcon((prevState) => ({
          ...prevState,
          [i]: icon,
        }));
      });
    });
  }, []);

  const margin = { top: 40, right: 20, bottom: 60, left: 20 };
  const width = 900;
  const height = 200;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const timeScale = scaleLinear({
    domain: [
      Math.min(...weather.hourly.map((d) => d.dt)),
      Math.max(...weather.hourly.map((d) => d.dt)),
    ],
    range: [0, xMax],
    round: true,
  });

  const tempScale = scaleLinear({
    domain: [
      // Math.min(...weather.hourly.map((d) => d.temp)),
      0,
      Math.max(...weather.hourly.map((d) => d.temp)),
    ],
    range: [yMax, 0],
    round: true,
  });

  return (
    <Svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <LinePath
          data={weather.hourly}
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
              <DynText fontSize="20px">{Math.round(d.temp) + "°"}</DynText>
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
              <img style={{ height: "60px" }} alt="" src={weatherIcon[i]}></img>
              <DynText fontSize="15px">
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
