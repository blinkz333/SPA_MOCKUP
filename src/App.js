
import {
  Routes,
  Route,
 } from "react-router-dom";
import Desktop from "./pages/Desktop";

function App() {
  return (
    <Routes>
      <Route path="/frontend_responsive_mockup" element={<Desktop />} />
    </Routes>
  );
}
export default App;
