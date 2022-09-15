import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
const CircularBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;
export default function Loading() {
  return (
    <CircularBox>
      <CircularProgress color="success" />
    </CircularBox>
  );
}
