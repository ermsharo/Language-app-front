import styled from "styled-components";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const DisplayInfo = styled.div`
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
`;

const Info = styled.div`
  padding: 16px;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
`;

const MeaningTitle = styled.div`
  font-size: 24px;
  padding: 8px;
`;

export default function ShortInfoDisplay({ shortInfo, title }) {
  //console.log("Short info", shortInfo);

  if (!shortInfo || shortInfo.length === 0) return <></>;
  return (
    <div>
      {" "}
      <MeaningTitle>{title}</MeaningTitle>{" "}
      <DisplayInfo>
        {shortInfo.map((item, index) => (
          <Info>{item}</Info>
        ))}
      </DisplayInfo>
    </div>
  );
}
