import styled from "styled-components";

const DynText = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;

export default DynText;