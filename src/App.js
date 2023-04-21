
import {
  Routes,
  Route,
 } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path="/frontend_responsive_mockup" element={<Main />} />
    </Routes>
  );
}
export default App;
