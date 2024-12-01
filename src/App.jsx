import Banner from "./components/Banner";
import LandingPage from "./pages/LandingPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Banner />
      <LandingPage />
      <Analytics />
    </div>
  );
}

export default App;
