import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import Landing from "./components/landing/Landing";
import Organization from "./components/organization/Organization";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="employees" element={<Landing />} />
        <Route path="organization" element={<Organization />} />
      </Route>
    </Routes>
  );
}

export default App;