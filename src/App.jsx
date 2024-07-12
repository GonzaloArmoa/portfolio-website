import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Section } from "./components/Section";

function App() {
  return (
    <>
          <div className="h-svh bg-lime-200">
         <Header />
         <div className="mt-16 flex flex-wrap  justify-evenly">
          <Aside />
          <Section/>
          </div>
      </div>
    </>
  );
}

export default App;
