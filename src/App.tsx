
import "./App.scss";
import Layout from "./layout/layout";
import Targets from "./components/targets/targets";
import Gain from "./components/gain/gain";
import Maintenance from "./components/maintenance/maintenance";
import Reduction from "./components/reduction/reduction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
    <Router>
      <Targets />
      <Routes>
        <Route path="/gain" element={<Gain />}></Route>
        <Route path="/maintenance" element={<Maintenance />}></Route>
        <Route path="/reduction" element={<Reduction />}></Route>
      </Routes>
    </Router>
  </Layout>
  );
}

export default App;
