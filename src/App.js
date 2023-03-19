import { Route, Routes } from "react-router-dom";

import NavBar from "./components/components/common/NavBar";
import Footer from "./components/components/common/Footer";
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
