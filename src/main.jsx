import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/reducers/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockTablePage from "./pages/stocks/StockTablePage";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<StockTablePage />} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);