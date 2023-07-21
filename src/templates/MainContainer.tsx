import { FC, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <main className="container">{children}</main>;
};
