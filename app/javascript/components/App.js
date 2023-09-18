import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Greeting from "../routes/Greeting";
import store from "../redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Greeting/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;