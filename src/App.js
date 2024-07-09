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
import SignIn from "./pages/SignIn";
import Page404 from "./pages/Page404";
import Edit from "./pages/Edit";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path='/about' // Add a leading slash here
          element={<About />}
          errorElement={<NotFoundPage />}
        />
        <Route
          exact
          path='/discover'
          element={<Discover />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/news'
          element={<News />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/sports'
          element={<Sport />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/finance'
          element={<Finance />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/games'
          element={<Games />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/weather'
          element={<Weather />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/sign-up'
          element={<SignUp />}
          errorElement={<Page404 />}
        />
        <Route
          exact
          path='/sign-in'
          element={<SignIn />}
          errorElement={<Page404 />}
        />
        <Route
          path='/profile'
          element={<Edit />}
          errorElement={<Page404 />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
