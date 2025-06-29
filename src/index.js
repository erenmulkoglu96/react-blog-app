import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { BrowserRouter } from "react-router-dom";

import "./index.css";
// import App from './App';
// import ClassCompontentsTutorials from './compontents/ClassCompontentsTutorials';
import reportWebVitals from "./reportWebVitals";
//import FunctionCompontentsTutorials from './compontents/FunctionCompontentsTutorials';
import RouterBlog from "./RouterBlog";
import { ThemeProvider } from "./ThemeContext";


// Redux
import { Provider } from 'react-redux'
import { store } from './store'

const root =
  ReactDOM.createRoot(
    document.getElementById(
      "root"
    )
  );
root.render(
  <React.StrictMode>
     <BrowserRouter>
    {/* Redux Login */}
      <Provider store={store}>
        {/* Context Api import: Dark mode */}
        <ThemeProvider>
          <RouterBlog />
        </ThemeProvider>
      </Provider>
      </BrowserRouter>
    

    {/* <FunctionCompontentsTutorials/> */}
    {/* <ClassCompontentsTutorials /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
