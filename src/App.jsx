import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <div className="bg-lime-200 px-6 min-h-svh">
         <Header />
          <div className="flex flex-col gap-x-6 justify-evenly mx-auto md:flex-row items-center md:items-start">
          <Aside />
          <Section/>
          </div>
      </div>
    </>
  );
}

export default App;
