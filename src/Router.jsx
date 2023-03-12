/* eslint-disable*/
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { Table } from "./Table";
import Test from "./Test";
import User from "./User";
import Excise from "./Excise";
import ExciseList from "./ExciseList";
import Login from "./Login";
import Header from "./Header";

const AppRouter = () => {
  console.log(sessionStorage.getItem("OK"));
  return (
    <>
      {sessionStorage.getItem("OK") && <Header />}

      <Routes>
        <>
          <Route path="/" element={<Login />} />

          <Route exact path="/Main" element={<App />} />
          <Route exact path="/table" element={<Table />} />
          <Route exact path="/Excise" element={<Excise />} />

          <Route exact path="/user/:id" element={<User />} />

          <Route exact path="/fingerTest" element={<Test />} />
          <Route exact path="/screenGazeTest" element={<Test />} />
          <Route exact path="/quickBlinkTest" element={<Test />} />
          <Route exact path="/gaitTest" element={<Test />} />
          <Route exact path="/aSoundTest" element={<Test />} />
          <Route exact path="/eSoundTest" element={<Test />} />
          <Route exact path="/dadadaTest" element={<Test />} />
          <Route exact path="/patakaTest" element={<Test />} />

          <Route exact path="/fingerTest_Records" element={<ExciseList />} />
          <Route exact path="/screenGazeTest_Records" element={<ExciseList />} />
          <Route exact path="/quickBlinkTest_Records" element={<ExciseList />} />
          <Route exact path="/gaitTest_Records" element={<ExciseList />} />
          <Route exact path="/aSoundTest_Records" element={<ExciseList />} />
          <Route exact path="/eSoundTest_Records" element={<ExciseList />} />
          <Route exact path="/dadadaTest_Records" element={<ExciseList />} />
          <Route exact path="/patakaTest_Records" element={<ExciseList />} />
        </>
      </Routes>
    </>
  );
};

export default AppRouter;
