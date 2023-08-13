import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Compatibility from "./pages/Compatibility"
import Dashboard from "./pages/Dashboard"
import Insights from "./pages/Insights"
import Donate from "./pages/Donate"
import Nav from "./components/Nav"
import Layout from "./components/Layout"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Layout />}>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Compatibility" element={<Compatibility />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Donate" element={<Donate />}></Route>
            <Route path="/Insights" element={<Insights />}></Route>
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
