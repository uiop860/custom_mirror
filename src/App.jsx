import Weather from "./comps/Weather";
import FlexBox from "./styles/FlexBox";
import FlexItem from "./styles/FlexItem";

function App() {
  return (
    <FlexBox>
      <FlexItem>
        <Weather />
      </FlexItem>
    </FlexBox>
  );
}

export default App;
