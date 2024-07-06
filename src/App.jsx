import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";

function App() {
  return (
    <>
          <Header />
          <Aside/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
