import { Routes, Route } from "react-router-dom";
import SorryPage from "./Page2";
import LoveLetter from "./Page3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SorryPage />} />
      <Route path="/love-letter" element={<LoveLetter />} />
    </Routes>
  );
}

export default App;