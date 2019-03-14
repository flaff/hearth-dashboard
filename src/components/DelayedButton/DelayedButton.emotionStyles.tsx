import styled from '@emotion/styled';

export function getBorderStepClassName(step: number) {
    return 'border' + step * 25;
}

const PINK = '#e62553';
const buttonColor = (props: any) => props.color || PINK;

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.05em;
  font-size: 15px;
  color: white;
  background: ${buttonColor};
  border: 3px solid;
  border-color: ${buttonColor};
  height: 40px;
  width: 150px;
  margin: 10px;
  border-radius: 45px;
  cursor: pointer;
  transition: 200ms border-color, 200ms background, 100ms color, 400ms transform;

  &[disabled] {
    background: #cbcbcb;
    border-color: #cbcbcb;
    color: #818181;
    cursor: default;
  }

  &:not([disabled]):hover {
    transform: scale(1.025);
  }

  &.border25, &.border50, &.border75, &.border100 {
    border-left-color: ${buttonColor};
  }

  &.border50, &.border75, &.border100 {
    border-bottom-color: ${buttonColor};
  }

  &.border75, &.border100 {
    border-right-color: ${buttonColor};
  }

  &.border100 {
    border-top-color: ${buttonColor};
  }
`;
