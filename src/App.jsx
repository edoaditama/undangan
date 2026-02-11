import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Greeting from "./components/Greeting";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Greeting />
      <EventDetails />
      <Maps />
    </div>
  );
}

export default App;
