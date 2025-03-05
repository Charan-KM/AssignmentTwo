import TablePage from "./pages/table";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TablePage />} />
    </Routes>
  );
};

export default App;