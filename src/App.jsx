import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Pembukaan from "./components/Pembukaan";
import Maps from "./components/Maps";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pembukaan />
      <EventDetails />
      <Maps />
    </div>
  );
}

export default App;
