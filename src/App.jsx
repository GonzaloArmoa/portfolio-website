import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Section } from "./components/Section";

function App() {
  return (
    <>
          <div className="h-svh bg-lime-200">
         <Header />
         <div className="flex flex-wrap gap-x-6 justify-evenly w-5/6 mx-auto">
          <Aside />
          <Section/>
          </div>
      </div>
    </>
  );
}

export default App;
