import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Main = styled.TouchableOpacity`
  width: 100vw;
  height: 100vh;
  flex: 1;
  display: row;
  align-items: center;
  justify-content: center;
`;

export const CustomHeader = styled.TouchableOpacity`
  /* height: 200px; */
  /* flex: 1; */
  flex-direction: row;
  background: #8257e5;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: getStatusBarHeight(true) + 16;
  padding-bottom: 60;
  background-color: "#8257E5";

  img {
    margin-top: 5px;
    height: 2rem;
    width: 2.25rem;
  }
`;

interface ITypographyProps {
  variant: string;
}

export const CustomBlueTypography = styled.TouchableOpacity<ITypographyProps>`
  margin: 0;
  color: var(--Blue, #4ea8de);
  font-family: Inter;
  font-size: ${(props) => (props.variant === "small" ? "16px" : "2.5rem")};
  font-style: normal;
  font-weight: ${(props) => (props.variant === "small" ? 700 : 900)};
  line-height: normal;
`;

export const CustomSimpleTypography = styled.TouchableOpacity`
  margin: 0;
  color: var(--Gray-300, #808080);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
export const CustomSimpleGrayTypography = styled(CustomSimpleTypography)`
  font-weight: 400;
`;

export const CustomPurpleTypography = styled(
  CustomBlueTypography
)<ITypographyProps>`
  color: var(--PurpleDark, #5e60ce);
`;

export const MainCard = styled.TouchableOpacity`
  /* padding: 0 352px 0 352px; */
  background-color: "#8257E5";
  width: 1250px;
`;

export const CustomDivider = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* border-width: 10px; */
  border-bottom: 10px;
  margin-top: 1rem;
  /* border: #0d0d0d; */
`;

export const SimpleDivider = styled(CustomDivider)`
  padding-top: 4rem;
  padding-bottom: 1rem;
  margin-top: 1.5rem;
  border-radius: 8px;
  border-top: 1px solid var(--Grey-400, #333);
  justify-content: center;
`;

export const CustomButton = styled.TouchableOpacity`
  color: #f2f2f2;
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #1e6f9f;
  border: none;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
`;
export const FormWrapper = styled.TouchableOpacity`
  display: flex;
  gap: 2;
  flex-direction: row;

  /* transform: translateY(-50%); */
  margin-top: -28;
  input {
    display: flex;
    width: 100%;
    padding: 16px;
    gap: 8px;
    margin-right: 1rem;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid var(--Gray-700, #0d0d0d);
    background: #262626;
    color: var(--Gray-100, #f2f2f2);
  }
`;

export const CustomCount = styled.TouchableOpacity`
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  background: #333;
  color: var(--Gray-200, #d9d9d9);
`;

export const TasksDiv = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
interface IImageProps {
  checked: boolean;
}

export const TasksDivItem = styled(CustomDivider)<IImageProps>`
  margin-bottom: 0rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  /* box-shadow: 0px 2px 8px 0px #000000; */

  label {
    color: ${(props) => (props.checked ? "#808080" : "#F2F2F2")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "unset")};
  }

  svg {
    cursor: pointer;
  }
  background: #262626;
`;
