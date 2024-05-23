import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { Navbar } from "./layouts/Navbar";
import About from "./pages/About";
import Weather from "./components/Weather";
import Discover from "./components/Discover";
import Header from "./components/Header";
import News from "./components/News";
import Sport from "./components/Sport";
import Finance from "./components/Finance";
import Games from "./components/Games";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from"./pages/SignIn";

function App() {
  return (
    <>
      <Navbar />
      <Header />
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
        <Route
          exact
          path="/discover"
          element={<Discover />}
          errorElement={<NotFoundPage />}
        />
        <Route
          exact
          path="/news"
          element={<News />}
          errorElement={<NotFoundPage />}
        />
        <Route
          exact
          path="/sports"
          element={<Sport />}
          errorElement={<NotFoundPage />}
        />
        <Route
          exact
          path="/finance"
          element={<Finance />}
          errorElement={<NotFoundPage />}
        />
        <Route
          exact
          path="/games"
          element={<Games />}
          errorElement={<NotFoundPage />}
        />
        <Route
          exact
          path="/weather"
          element={<Weather />}
          errorElement={<NotFoundPage />}
        />
        <Route
        exact path="/sign up"
        element={<SignUp/>}
        errorElement={<NotFoundPage/>}
        />
         <Route
        exact path="/sign in"
        element={<SignIn/>}
        errorElement={<NotFoundPage/>}
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
