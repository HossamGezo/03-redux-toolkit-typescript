// - - - - - - - - - - Import Libraries
// *** React Library
import {createRoot} from "react-dom/client";

// - - - - - - - - - - Import React Components
// *** App Component
import App from "./App.tsx";

// - - - - - - - - - - Import Styles
// *** Index Style
import "./index.css";

// - - - - - - - - - - Main Component
createRoot(document.getElementById("root")!).render(<App />);
