import styled from "styled-components";

const LogoBox = styled.div`
  font-family: "Sedgwick Ave", sans-serif;
`;

export default function Logo({ color, size }) {
  return <LogoBox style={{ color: color, fontSize: size }}>Dict App</LogoBox>;
}
