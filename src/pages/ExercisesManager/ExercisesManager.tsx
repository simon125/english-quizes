import { FC } from "react";

export const ExercisesManager: FC = () => {
  return (
    <>
      <dialog open>
        <article>
          <div
            style={{ margin: 20, padding: 20, width: 400, minHeight: 300 }}
            contentEditable
          ></div>
        </article>
      </dialog>
    </>
  );
};
