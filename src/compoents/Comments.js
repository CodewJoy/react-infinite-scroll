import Card from 'react-bootstrap/Card';

const Comment = ({item: { name, email, body }}) => (
  <Card style={{ width: '18rem', margin: '1rem', }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
      <Card.Text>
        {body}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Comment;
