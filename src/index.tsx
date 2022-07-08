import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store";

const portalDiv = document.getElementById("root")!;
const root = ReactDOM.createRoot(portalDiv);
root.render(
  <Provider store={store}>
    <App />,
  </Provider>,
);
