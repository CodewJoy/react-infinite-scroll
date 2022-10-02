import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BackendPagination from './pages/backendPagination';
import FrontEndPagination from './pages/frontendPagination';
import './App.scss'

function App() {
  const [key, setKey] = useState('BackendPagination');

  return (
    <div className="app">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="BackendPagination" title="Backend Pagination">
          <BackendPagination />
        </Tab>
        <Tab eventKey="FrontEndPagination" title="Front-End Pagination">
          <FrontEndPagination />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
