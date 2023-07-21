import { FC } from "react";
import { ExercisesList } from "./components/ExercisesList/ExercisesList";

export const Exercises: FC = () => {
  return (
    <>
      <article>
        <b>
          Use the verbs in brackets to complete these sentences with be going to
          affirmative or negative.
        </b>
        <ExercisesList />
      </article>
    </>
  );
};
