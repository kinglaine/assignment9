import React, {useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Credit } from "./components/Credit";
import { Debit } from "./components/Debit";

import Home from "./components/Home";
function App() {
  const [balance, setBalance] = useState(0);
  const[creditslist, setCreditsList] = useState([]);
  const[debitslist, setDebitsList] = useState([]);
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav style={{backgroundColor:'yellow', display: 'flex', justifyContent: 'center'}}>
          <ul style={{listStyle:'none', display: 'flex', gap:'100px'}}>
            <li>
              <Link style={{textDecoration:'none', color: 'black', fontWeight: 'bold'}} to="/">Home</Link>
            </li>
            <li>
              <Link  style={{textDecoration:'none', color: 'black', fontWeight: 'bold'}} to="/Credit">Credits</Link>
            </li>
            <li>
              <Link  style={{textDecoration:'none', color: 'black', fontWeight: 'bold'}} to="/Debit">Debits</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home balance={balance}/>} />
          <Route path="/Credit" element={<Credit balance={balance} setBalance={setBalance} creditslist={creditslist} setCreditsList={setCreditsList}/>} />
          <Route path="/Debit" element={<Debit balance={balance} setBalance={setBalance} debitslist={debitslist} setDebitsList={setDebitsList}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;