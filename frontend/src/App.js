import { BrowserRouter, Routes, Route  } from "react-router-dom"

//Pages & component
import home from "../pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={< home />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
