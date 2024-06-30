import styled from "@emotion/styled";

export const StyleButton = styled.button`
  border: none;
  align-self: center;
  border-radius: 5px;
  background-color: orange;
  padding: 3px;
  cursor: pointer;
  margin: 2px;
  :hover {
    background-color: blanchedalmond;
  }
`;

export default function ButtonStyledComponent() {
  return (
    <StyleButton>button</StyleButton>
  )
}