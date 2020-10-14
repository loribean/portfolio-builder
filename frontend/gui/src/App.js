import React from 'react';


import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import 'antd/dist/antd.css';
import CustomLayout from './Components/containers/Layout'


function App() {
  return (
    <div>
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
