import Router from "./Routes";

import { GlobalStyle } from "./Styles/reset";
import "./App.css";
import { Toast } from "./Styles/toast/styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
      <Toast />
    </div>
  );
}

export default App;
