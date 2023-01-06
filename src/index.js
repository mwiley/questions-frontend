import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import QuestionsRoute from './routes/QuestionsRoute';
import NewQuestionRoute from './routes/NewQuestionRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <p>Sorry, the page you requested wasn't found!</p>,
    children: [
      {
        path: "/",
        element: <QuestionsRoute/>
      },
      {
        path: "/ask-question",
        element: <NewQuestionRoute/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
