import Card from 'react-bootstrap/Card';

function userProfile({ picture, name, phone, cell }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem', padding: '0', }}>
      <Card.Img variant="top" src={`${picture}`} />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
            Phone: {phone} <br/>
            Cell: {cell}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default userProfile;