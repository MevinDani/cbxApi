import Login from "./components/Login";
import { Route, Routes, useNavigate } from 'react-router-dom';
import TodaySales from "./components/Sales";
import Panel from "./components/Panel";
import TotalIssuedPdc from "./components/TotalIssuedPdc";
import TotalPendingPdc from "./components/TotalPendindPdc";


function App() {
  return (


    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/sales" element={<TodaySales />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="/totalPdcIssued" element={<TotalIssuedPdc />} />
      <Route path="/totalPdcPending" element={<TotalPendingPdc />} />
    </Routes>

  );
}

export default App;
