import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.boxType.bug};
  `}
`;

export const Bottom = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 30%;
    background: ${theme.colors.background};
    opacity: 0.9;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
  background: ${theme.colors.boxType.bug};
    height: 70%;
    align-items:center
    justify-content: center;
  `}
`;

export const IconContent = styled.View`
  width: 250px;
  height: 300px;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: 70px;
    background: ${theme.colors.boxType.bug};
    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: 19px;
    font-weight:bold;
    color: ${theme.colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 30px;
    margin-top: 5px;
    font-weight: bold;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 17px;
    font-weight: bold;
  `}
`;
