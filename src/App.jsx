import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import IsiUndangan from "./components/isiundangan";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <IsiUndangan />
      <EventDetails />
    </div>
  );
}

export default App;
