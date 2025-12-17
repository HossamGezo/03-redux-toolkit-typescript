// - - - - - - - - - - Import Libraries
// *** React Library
import {createRoot} from "react-dom/client";
// *** React Redux
import {Provider} from "react-redux";

// - - - - - - - - - - Import Redux Files
// *** Redux Store
import store from "./app/store.ts";

// - - - - - - - - - - Import React Components
// *** App Component
import App from "./App.tsx";

// - - - - - - - - - - Import Styles
// *** Index Style
import "./index.css";

// - - - - - - - - - - Main Component
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
