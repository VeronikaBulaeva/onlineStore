import "./App.css";
import AppRouterProvider from "./router-provider";
import { BrowserRouter } from "react-router-dom";
import Header from "../shared/ui/header";
import Footer from "../shared/ui/footer";

function App() {
  return (
    <BrowserRouter basename={"/onlineStore"}>
      {" "}
      {/*Необходимо для отображения на GitHub Pages*/}
      <div className={"appContainer"}>
        <Header />
        <AppRouterProvider />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
