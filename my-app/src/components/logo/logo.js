import { Grid } from "../../Styles/GridSystem";
import styled from "styled-components";
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";

const LogoBox = styled.div`
  font-family: "Sedgwick Ave", sans-serif;
`;

export default function Logo({ color, size }) {
  return <LogoBox style={{ color: color, fontSize: size }}>Dict App</LogoBox>;
}
