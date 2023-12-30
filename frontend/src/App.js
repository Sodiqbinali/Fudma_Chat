import { BrowserRouter, Routes, Route  } from "react-router-dom"
import './App.css'
import {MantineProvider} from "@mantine/core"

//Pages & component
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MantineProvider>
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
      </MantineProvider>
    </div>
  );
}

export default App;
