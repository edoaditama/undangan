import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Pembukaan from "./components/Pembukaan";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <Pembukaan />
      <EventDetails />
      <Maps />
    </div>
  );
}

export default App;
