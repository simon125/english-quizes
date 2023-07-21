import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Exercises } from "./pages/Exercises/Exercises";
import { Home } from "./pages/Home/Home";
import { MainContainer } from "./templates/MainContainer";
import { ExercisesManager } from "./pages/ExercisesManager/ExercisesManager";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/exercises"
          element={
            <MainContainer>
              <Exercises />
            </MainContainer>
          }
        />

        <Route
          path="/exercises-manager"
          element={
            <MainContainer>
              <ExercisesManager />
            </MainContainer>
          }
        />
      </Routes>
    </>
  );
};

export default App;
