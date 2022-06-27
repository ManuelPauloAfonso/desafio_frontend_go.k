import { ToastContainer } from "react-toastify";
import Routing from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import Context from "./context/context";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Context>
        <Routing />
      </Context>
    </>
  );
}

export default App;
