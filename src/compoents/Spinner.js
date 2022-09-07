import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
    <div className="container">
          <div className="row ">
            <div className="col d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    </div>
);

export default Loading;