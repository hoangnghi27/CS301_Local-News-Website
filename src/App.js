import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { Navbar } from "./layouts/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<NotFoundPage />}
        ></Route>
        <Route
          path="about"
          element={<About />}
          errorElement={<NotFoundPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
