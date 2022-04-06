import ReactDOM from "react-dom/client";

import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// Após a atualização React 18 ficou deste jeito:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
