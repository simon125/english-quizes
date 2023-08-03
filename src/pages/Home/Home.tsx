import styled from "@emotion/styled";
import { FC } from "react";
import IMG from "./pngegg.png";
import { Link } from "react-router-dom";

const StyledContainer = styled("section")`
  display: flex;
  position: relative;
`;

const StyledHeading = styled("h1")`
  font-size: 2rem;
  font-weight: 400;
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-underline-offset: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 760px) {
    font-size: 3rem;
    text-underline-offset: 15px;
    margin-bottom: 50px;
  }
`;

const Showcase = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  min-height: 80vh;
  gap: 10px;
  position: relative;
  z-index: 2;
  text-align: center;

  .col1 {
    width: 80%;
  }

  .col2 {
    width: 30%;
  }

  @media screen and (min-width: 760px) {
    gap: 50px;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    gap: 100px;
    text-align: left;

    .col1 {
      width: 50%;
    }

    .col2 {
      width: 50%;
    }
  }
`;

export const Home: FC = () => {
  return (
    <>
      <StyledContainer>
        <Showcase className="container">
          <div className="col1">
            <StyledHeading>
              I want <b>you</b> to learn English
            </StyledHeading>
            <p>
              Welcome to our <b>innovative</b> English learning <b>platform</b>.
              Whether you're a beginner or advanced learner, our immersive
              experience <b>enhances your skills</b>. With interactive lessons
              and personalized feedback, we <b>empower your language</b>{" "}
              journey.
            </p>
            <Link to="/exercises" role="button">
              Try it out now
            </Link>
          </div>
          <div className="col2">
            <img src={IMG} alt="I want you to learn English" />
          </div>
        </Showcase>
      </StyledContainer>
    </>
  );
};
