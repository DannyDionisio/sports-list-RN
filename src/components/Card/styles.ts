import styled from "styled-components/native";

export const ContainerWrapper = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px;
  padding: 10px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const FooterWrapper = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
`;

export const IconWrapper = styled.View`
  display: flex;
  align-items: center;
  height: 190px;
`;

export const FavoriteButton = styled.Button`
  border: none;
  background: none;
`;
