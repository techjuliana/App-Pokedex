import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const windowWidth = Dimensions.get("window").width;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
  background: ${theme.colors.boxType.bug};
    flex: 1;

    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    margin-left: -20px;
    height: 220px;
    background: ${theme.colors.boxType.bug};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 22px;
    line-height: 59px;
    font-weight: bold;
    margin-top:50px;
  `}
`;
