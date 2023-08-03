import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const StyledButton = styled("button")<{ showCursorPointer: boolean }>`
  display: inline-block;
  width: fit-content;
  padding: 3px 7px;
  margin: 0;
  line-height: 1;

  cursor: ${({ showCursorPointer }) =>
    showCursorPointer ? "pointer" : "default"};
`;

interface TagProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Tag: FC<TagProps> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} showCursorPointer={!!onClick}>
      {children} {!!onClick && <>&times;</>}
    </StyledButton>
  );
};
