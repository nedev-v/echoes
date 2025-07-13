
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';
import { AuthScreen } from "./screens/AuthScreen";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
