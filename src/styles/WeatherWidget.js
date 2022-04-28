import styled from "styled-components";

const WeatherWidget = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 200px);
  align-items: center;
  justify-items: center;
`;

const Temp = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 132px;
`;

const WeatherIcon = styled.img`
  grid-area: 1 / 1 / 1 / 1;
`;
export { Temp, WeatherIcon };
export default WeatherWidget;
