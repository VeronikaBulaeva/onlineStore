import "./App.css";
import AppRouterProvider from "./router-provider";
import { BrowserRouter } from "react-router-dom";
import Header from "../shared/ui/header";
import Footer from "../shared/ui/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouterProvider />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
