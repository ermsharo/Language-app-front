import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TabBox = styled.div`
  text-align: center;

  padding: 16px;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  -webkit-box-shadow: 15px -21px 23px -8px rgba(0, 0, 0, 0.12);
  box-shadow: 15px -21px 23px -8px rgba(0, 0, 0, 0.12);
  color: black;
  font-weight: bolder;
  text-transform: capitalize;
  cursor: pointer;
  margin-left: -8px;
`;

export default function Tab({ isSelected, content }) {
  const navigate = useNavigate();

  let styleTab = {
    opacity: isSelected ? 1 : 0.4,
  };

  return (
    <TabBox
      onClick={() => {
        navigate(`/${content}`);
      }}
      style={styleTab}
    >
      {content}
    </TabBox>
  );
}
