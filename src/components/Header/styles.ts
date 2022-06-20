import styled from "styled-components/native";

export const Container = styled.View`
  width: "100%";
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 50px 25px 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
