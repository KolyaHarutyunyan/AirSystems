import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/allStyles.scss";
import { BrowserRouter } from "react-router-dom";
import {
   initAxiosInterceptors,
   ScrollToContextProvider,
} from "@eachbase/utils";

initAxiosInterceptors();
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <ScrollToContextProvider>
            <App />
         </ScrollToContextProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
