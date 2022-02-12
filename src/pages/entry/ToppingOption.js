import { Col, Form, Row } from 'react-bootstrap';

export default function ToppingOption({ name, imgPath, updateItemCount }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imgPath}`}
        alt={`${name} topping`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Check
            onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
            type="checkbox"
            defaultChecked={false}
            label={name}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
