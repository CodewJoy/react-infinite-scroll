import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BackendPagination from './BackendPagination';
import FrontEndPagination from './FrontEndPagination';

function Main() {
    const [key, setKey] = useState('BackendPagination');
    return (
        <main>
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
        </main>

    );
}

export default Main;