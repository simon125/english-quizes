import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { Box } from "~/components/Box/Box";
import { Circle } from "~/components/Circle/Circle";
import { TextWithBold } from "~/components/TextWithBold/TextWithBold";
import { ExerciseConfig } from "../ExercisesList/ExercisesList";

const StyledListItem = styled("li")`
  list-style: none;
  padding-bottom: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
`;

const StyledExerciseSentenceContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin: 20px 0;
`;

const StyledExerciseGapInput = styled("input")`
  && {
    padding: 4px;
    margin: 0;
    width: 140px;
    height: auto;
  }
`;

const StyledCorrectAnswer = styled("div")`
  margin-bottom: 25px;

  &&,
  li {
    color: green;
  }
`;

const StyledExplenationsContainer = styled("ul")`
  li {
    list-style: none;
    display: flex;
    gap: 5px;
  }
`;

interface ExercisesListItemProps {
  exerciseIndex: number;
  exercise: ExerciseConfig;
  setAnswer: (data: {
    exerciseIndex: number;
    inputIdentifier: number;
    value: string;
  }) => void;
}

export const ExercisesListItem: FC<ExercisesListItemProps> = ({
  exerciseIndex,
  exercise: { sentence, correctAnswers, explanations, answers, result },
  setAnswer,
}) => {
  const getIdentifier = (nodes: ReactNode[]) => {
    return nodes.filter((node) => typeof node !== "string").length;
  };
  const getInputStatus = (
    result: ExerciseConfig["result"],
    inputIdentifier: number
  ) => {
    if (!result) return undefined;

    return {
      "aria-invalid": result[inputIdentifier].status === "negative",
    };
  };

  const sentenceWithInput = sentence
    .split("**input**")
    .reduce<ReactNode[]>((acc, part, index) => {
      if (acc.length === 0) {
        return [part];
      }
      const inputIdentifier = getIdentifier(acc);

      return [
        ...acc,
        <StyledExerciseGapInput
          onChange={({ target }) =>
            setAnswer({
              exerciseIndex,
              inputIdentifier,
              value: target.value,
            })
          }
          readOnly={!!result}
          value={answers[inputIdentifier]}
          type="text"
          key={index}
          {...getInputStatus(result, inputIdentifier)}
        />,
        part,
      ];
    }, []);

  return (
    <StyledListItem>
      <StyledExerciseSentenceContainer>
        <Circle>{exerciseIndex + 1}</Circle>
        <div>{sentenceWithInput}</div>
      </StyledExerciseSentenceContainer>
      {result && (
        <Box>
          <StyledCorrectAnswer>
            Correct answer/s:{" "}
            {correctAnswers.length > 1 ? (
              <ul>
                {correctAnswers.map((correctAnswersForGap, index) => (
                  <li
                    style={{ border: "none" }}
                    key={correctAnswersForGap.join("")}
                  >
                    Gap {index + 1}: <b>{correctAnswersForGap.join(", ")}</b>
                  </li>
                ))}
              </ul>
            ) : (
              <b>{correctAnswers[0].join(", ")}</b>
            )}
          </StyledCorrectAnswer>
          <StyledExplenationsContainer>
            {explanations.map((explanation) => (
              <li key={explanation}>
                👉 <TextWithBold text={explanation} />
              </li>
            ))}
          </StyledExplenationsContainer>
        </Box>
      )}
    </StyledListItem>
  );
};
