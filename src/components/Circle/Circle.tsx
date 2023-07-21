import { FC, ReactNode } from "react";

interface CircleProps {
  children: ReactNode;
}

export const Circle: FC<CircleProps> = ({ children }) => {
  return (
    <span
      style={{
        width: 30,
        height: 30,
        textAlign: "center",
        lineHeight: "30px",
        color: "white",
        borderRadius: "50%",
        background: "var(--primary)",
        display: "inline-block",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
};
