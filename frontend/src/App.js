import { BrowserRouter, Routes, Route  } from "react-router-dom"
import './App.css'

//Pages & component
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={< Home />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
