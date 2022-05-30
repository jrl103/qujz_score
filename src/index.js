import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // 연결
import store from "./redux/configStore"; //주입

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
