import styled from "styled-components";

export const FlexBox = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 28.7vh;
`;

export const BebeFlex1 = styled.div`
  width: 20vw;
  height: 20vh;
  background-color: ${({ color, ellapsed }) =>
    ellapsed < color ? "#4575a6" : "#2b4866"};
  border: 0.2rem solid;
`;

export const BebeFlex2 = styled.div`
  width: 20vw;
  height: 20vh;
  background-color: ${({ color1, color2, ellapsed }) =>
    (ellapsed < color1 && "#2b4866") ||
    (color1 <= ellapsed && ellapsed <= color2 && "#4575a6") ||
    (ellapsed > color2 && "#2b4866")};
  border: 0.2rem solid;
`;

export const BebeFlex3 = styled.div`
  width: 20vw;
  height: 20vh;
  background-color: ${({ color1, color2, ellapsed }) =>
    (ellapsed < color1 && "#2b4866") ||
    (color1 <= ellapsed && ellapsed <= color2 && "#4575a6") ||
    (ellapsed > color2 && "#2b4866")};
  border: 0.2rem solid;
`;

export const BebeFlex4 = styled.div`
  width: 20vw;
  height: 20vh;
  background-color: ${({ color1, color2, ellapsed }) =>
    (ellapsed < color1 && "#2b4866") ||
    (color1 <= ellapsed && ellapsed <= color2 && "#4575a6") ||
    (ellapsed > color2 && "#2b4866")};
  border: 0.2rem solid;
`;

export const BebeFlex5 = styled.div`
  width: 20vw;
  height: 20vh;
  background-color: ${({ color1, color2, ellapsed }) =>
    (ellapsed < color1 && "#2b4866") ||
    (color1 <= ellapsed && ellapsed <= color2 && "#4575a6") ||
    (ellapsed > color2 && "#2b4866")};
  border: 0.2rem solid;
`;

export const H2Flex = styled.h2`
  font-family: "Capriola";
  color: white;
  text-align: center;
  padding-top: 2vh;
  font-size: 1.5rem;
`;

export const KeyWord = styled.h3`
  font-size: 1.5rem;
`;
