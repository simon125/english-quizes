import { FC, useState } from "react";
import { ExercisesListItem } from "../ExercisesListItem/ExercisesListItem";
import styled from "@emotion/styled";
import { Option, Select } from "~/components/Select/Select";

const StyledList = styled("ol")`
  list-style: none;

  li + li {
    border-top: 2px solid gray;
  }
`;

interface Result {
  totalExercises: number;
  correctAnswers: number;
}

export interface Answer {
  id: string;
  value: string[];
}

export interface ExerciseConfig {
  id: string;
  sentence: string;
  correctAnswers: string[][];
  explanations: string[];
  answers: string[];
  result?: null | { status: string; message?: string }[];
}

const EXERCISES: ExerciseConfig[] = [
  {
    id: "1",
    sentence: "I **input** (borrow) some books from the library today.",
    correctAnswers: [["am going to borrow", "'m going to borrow"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am going + to borrow*.",
    ],
    answers: [],
  },
  {
    id: "2",
    sentence: "He **input** (not pay) your money back.",
    answers: [],
    correctAnswers: [
      ["is not going to pay", "isn't going to pay", "'s not going to pay"],
    ],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *He is not going + to pay*.",
    ],
  },
  {
    id: "3",
    sentence: "The dron is out of control. It **input** (crash)!",
    answers: [],
    correctAnswers: [["is going to crash", "'s going to crash"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *It is going + to crash*.",
    ],
  },
  {
    id: "4",
    sentence: "They aren't playing well. They **input** (not win) the match.",
    answers: [],
    correctAnswers: [
      ["are not going to win", "aren't going to win", "'re not going to win"],
    ],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *They are not going + to win.*",
    ],
  },
  {
    id: "5",
    sentence: "We **input** (have) a picnic tomorrow.",
    answers: [],
    correctAnswers: [["are not going to have", "'re going to have"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *They are not going + to win.*",
    ],
  },
  {
    id: "6",
    sentence: "She **input** (fly) to New York next week.",
    answers: [],
    correctAnswers: [["is going to fly", "'s going to fly"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *She is going + to fly*.",
    ],
  },
  {
    id: "7",
    sentence: "You can take the newspaper. I **input** (not read) it.",
    answers: [],
    correctAnswers: [["am not going to read", "'m not going to read"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am not going + to read*.",
    ],
  },
  {
    id: "8",
    sentence:
      "I need to tell you something, but you **input** (not believe) me.",
    answers: [],
    correctAnswers: [
      [
        "are not going to believe",
        "aren't going to believe",
        "'re not going to believe",
      ],
    ],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *You are not going + to believe*.",
    ],
  },
  {
    id: "9",
    sentence: "Look at the sun! It **input** (be) a beautiful day.",
    answers: [],
    correctAnswers: [["is going to be", "'s going to be"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: * It is going + to be*.",
    ],
  },
  {
    id: "10",
    sentence: "I **input** (not argue) with you.",
    answers: [],
    correctAnswers: [["am not going to argue", "'m not going to argue"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am not going + to argue*.",
    ],
  },
  {
    id: "11",
    sentence: "Which dress **input** (she/wear) for the party?",
    answers: [],
    correctAnswers: [["is she going to wear"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *is + she + going to wear*.",
    ],
  },
  {
    id: "12",
    sentence: "What **input** (you/do) after you graduate from university?",
    answers: [],
    correctAnswers: [["are you going to do"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *is + she + going to wear*.",
    ],
  },
  {
    id: "13",
    sentence: "What time **input** (they/pick) you up at the airport?",
    answers: [],
    correctAnswers: [["are they going to pick"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + they + going to pick*.",
    ],
  },
  {
    id: "14",
    sentence: "How **input** (we/survive) here? There's no food.",
    answers: [],
    correctAnswers: [["are we going to survive"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + we + going to survive*.",
    ],
  },
  {
    id: "15",
    sentence: "Where **input** (he/stay) tonight",
    answers: [],
    correctAnswers: [["is he going to stay", "'s he going to stay"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *is + he + going to stay*.",
    ],
  },
  {
    id: "16",
    sentence: "I'm hungry. **input** (you/eat) that pie?",
    answers: [],
    correctAnswers: [["Are you going to eat"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + you + going to eat*.",
    ],
  },
  {
    id: "17",
    sentence: "Doctor, **input** (it/hurt)?",
    answers: [],
    correctAnswers: [["is it going to hurt"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + you + going to eat*.",
    ],
  },
  {
    id: "18",
    sentence: "What **input** (you/watch) on Netflix today?",
    answers: [],
    correctAnswers: [["are you going to watch"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + you + going to eat*.",
    ],
  },
  {
    id: "19",
    sentence: "What **input** (he/say) at the press conference today?",
    answers: [],
    correctAnswers: [["is he going to say", "'s he going to say"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + you + going to eat*.",
    ],
  },
  {
    id: "20",
    sentence: "What **input** (he/say) at the press conference today?",
    answers: [],
    correctAnswers: [["is he going to say", "'s he going to say"]],
    explanations: [
      "In questions, we use the verb *be* + subject + *going to* infinitive: *are + you + going to eat*.",
    ],
  },
  {
    id: "21",
    sentence: "I have some free time. I **input** (read) a book.",
    answers: [],
    correctAnswers: [["am going to read", "'m going to read"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am going + to read*.",
    ],
  },
  {
    id: "22",
    sentence:
      "They just bought concert tickets. They **input** (attend) the concert tomorrow.",
    answers: [],
    correctAnswers: [["are going to attend"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *They are going + to attend*.",
    ],
  },
  {
    id: "23",
    sentence:
      "The weather forecast says it will rain. I think I **input** (stay) at home.",
    answers: [],
    correctAnswers: [["am going to stay", "'m going to stay"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am going + to stay*.",
    ],
  },
  {
    id: "24",
    sentence: "My friend is throwing a party. I **input** (bring) some snacks.",
    answers: [],
    correctAnswers: [["am going to bring", "'m going to bring"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am going + to bring*.",
    ],
  },
  {
    id: "25",
    sentence:
      "The train leaves in 10 minutes. We **input** (miss) it if we don't hurry.",
    answers: [],
    correctAnswers: [["are going to miss"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *We are going + to miss*.",
    ],
  },
  {
    id: "26",
    sentence:
      "He has an important meeting tomorrow. He **input** (prepare) for it today.",
    answers: [],
    correctAnswers: [["is going to prepare", "'s going to prepare"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *He is going + to prepare*.",
    ],
  },
  {
    id: "27",
    sentence:
      "The restaurant is fully booked. We **input** (not get) a table if we don't make a reservation.",
    answers: [],
    correctAnswers: [
      ["are not going to get", "aren't going to get", "'re not going to get"],
    ],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *We are not going + to get*.",
    ],
  },
  {
    id: "28",
    sentence:
      "She's starting a new job next week. She **input** (meet) her new colleagues on the first day.",
    answers: [],
    correctAnswers: [["is going to meet", "'s going to meet"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *She is going + to meet*.",
    ],
  },
  {
    id: "29",
    sentence: "I'm feeling tired. I **input** (go) to bed early tonight.",
    answers: [],
    correctAnswers: [["am going to go", "'m going to go"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *I am going + to go*.",
    ],
  },
  {
    id: "30",
    sentence:
      "The school holidays start next month. We **input** (plan) a family trip.",
    answers: [],
    correctAnswers: [["are going to plan"]],
    explanations: [
      "We need the present continuous of the verb *go* + *to* + infinitive of the main verb: *We are going + to plan*.",
    ],
  },
];

export const ExercisesList: FC = () => {
  const [exercises, setExericses] = useState(() =>
    EXERCISES.map((exercise) => ({
      ...exercise,
      answers: exercise.correctAnswers.map(() => ""),
    }))
  );

  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  const [result, setResult] = useState<Result | null>(null);

  const setAnswer = ({
    exerciseIndex,
    inputIdentifier,
    value,
  }: {
    exerciseIndex: number;
    inputIdentifier: number;
    value: string;
  }) => {
    setExericses((prevState) => {
      const copy = [...prevState];
      copy[exerciseIndex].answers[inputIdentifier] = value;
      return copy;
    });
  };

  return (
    <>
      {result && (
        <article>
          Results: correct answers: {result.correctAnswers} | total:{" "}
          {result.totalExercises}
        </article>
      )}

      <Select
        onChange={setSelectedValues}
        options={[
          { label: "Past continous", value: "past-continous" },
          { label: "Present continous", value: "present-continous" },
        ]}
        values={selectedValues}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const exercisesWithResult: ExerciseConfig[] = exercises.map(
            (exercise) => {
              const result = exercise.answers.map((answer, index) => ({
                status: exercise.correctAnswers[index].includes(answer)
                  ? "positive"
                  : "negative",
              }));

              return { ...exercise, result };
            }
          );

          const newOverallResult: Result = {
            correctAnswers: exercisesWithResult.filter((exe) =>
              exe?.result?.some(({ status }) => status === "positive")
            ).length,
            totalExercises: exercisesWithResult.length,
          };

          setResult(newOverallResult);
          setExericses(exercisesWithResult);
        }}
      >
        <StyledList>
          {exercises.map((exercise, index) => (
            <ExercisesListItem
              key={exercise.id}
              exerciseIndex={index}
              exercise={exercise}
              setAnswer={setAnswer}
            />
          ))}
        </StyledList>
        <button>Check answers</button>
      </form>
    </>
  );
};
