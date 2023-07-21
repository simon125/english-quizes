import { FC, ReactNode, CSSProperties } from "react";

interface BoxProps {
  children: ReactNode;
  backgroundColor?: string;
  style?: CSSProperties;
}

export const Box: FC<BoxProps> = ({
  children,
  backgroundColor = "#f6f6f6",
  style,
}) => {
  return (
    <div
      style={{
        backgroundColor,
        border: "1px solid #c9c8c8",
        borderRadius: 5,
        padding: 25,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
