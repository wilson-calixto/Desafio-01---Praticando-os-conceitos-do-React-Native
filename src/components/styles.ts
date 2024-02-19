import styled from "styled-components/native";

export const Main = styled.View`
  width: 100vw;
  height: 100vh;
  flex: 1;
  display: row;
  align-items: center;
  justify-content: center;
`;

export const CustomHeader = styled.View`
  height: 200px;
  flex: 1;
  /* background: var(--Gray-700, #0D0D0D); */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 5px;
    height: 2rem;
    width: 2.25rem;
  }
`;

interface ITypographyProps {
  variant: string;
}

export const CustomBlueTypography = styled.View<ITypographyProps>`
  margin: 0;
  color: var(--Blue, #4ea8de);
  font-family: Inter;
  font-size: ${(props) => (props.variant === "small" ? "16px" : "2.5rem")};
  font-style: normal;
  font-weight: ${(props) => (props.variant === "small" ? 700 : 900)};
  line-height: normal;
`;

export const CustomSimpleTypography = styled.View`
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

export const MainCard = styled.View`
  padding: 0 352px 0 352px;
`;

export const CustomDivider = styled.View`
  display: flex;
  justify-content: space-between;
  border-color: white;
  border-width: 10px;
  border-bottom: 10px;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

export const SimpleDivider = styled(CustomDivider)`
  padding-top: 4rem;
  padding-bottom: 1rem;
  margin-top: 1.5rem;
  border-radius: 8px;
  border-top: 1px solid var(--Grey-400, #333);
  justify-content: center;
`;

export const FormWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  /* transform: translateY(-50%); */
  input {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 8px;
    margin-right: 1rem;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid var(--Gray-700, #0d0d0d);
    /* background: var(--Gray-500, #262626); */
    color: var(--Gray-100, #f2f2f2);
  }

  button {
    color: var(--Gray-100, #f2f2f2);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Blue-Dark, #1e6f9f);
    border: none;
    font-size: 0.875rem;
    font-weight: bold;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
  }
`;

export const CustomCount = styled.View`
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  //background: var(--Gray-400, #333);
  color: var(--Gray-200, #d9d9d9);
`;

export const TasksDiv = styled.View`
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
  /* border: 1px solid var(--Gray-400, #333); */
  /* box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06); */

  label {
    color: ${(props) => (props.checked ? "#808080" : "#F2F2F2")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "unset")};
  }

  svg {
    cursor: pointer;
  }
  /* background: var(--Gray-500, #262626);   */
`;
