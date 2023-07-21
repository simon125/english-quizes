import styled from "@emotion/styled";
import { FC } from "react";
import IMG from "./pngegg.png";

const StyledContainer = styled("section")`
  display: flex;
  position: relative;
`;

const StyledHeading = styled("h1")`
  font-size: 3rem;
  font-weight: 400;

  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-underline-offset: 15px;
`;

const Showcase = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  gap: 100px;

  .col1 {
    width: 50%;
  }

  .col2 {
    width: 50%;
  }
`;

export const Home: FC = () => {
  return (
    <>
      <StyledContainer>
        <Showcase
          className="container"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="col1">
            <StyledHeading>Test English clone</StyledHeading>
            <p>
              Welcome to our innovative English learning platform. Whether
              you're a beginner or advanced learner, our immersive experience
              enhances your skills. With interactive lessons and personalized
              feedback, we empower your language journey.
            </p>
          </div>
          <div className="col2">
            <img src={IMG} alt="" />
          </div>
        </Showcase>
      </StyledContainer>
    </>
  );
};
