import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import RootRouter from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
