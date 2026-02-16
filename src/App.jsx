import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Greeting from "./components/Greeting";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import Closing from "./components/Closing";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Greeting />
      <EventDetails />
      <Maps />
      <Closing />
    </div>
  );
}

export default App;
