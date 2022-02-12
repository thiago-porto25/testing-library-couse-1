import { useState } from 'react';
import {
  Form,
  Button,
  Popover,
  PopoverBody,
  OverlayTrigger,
} from 'react-bootstrap';

export default function SummaryForm() {
  const [termsAgreed, setTermsAgreed] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <PopoverBody>No ice cream will actually be delivered</PopoverBody>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree{' '}
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>to terms and conditions.</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAgreed}
          onChange={({ target }) => setTermsAgreed(target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button color="primary" type="submit" disabled={!termsAgreed}>
        Confirm order
      </Button>
    </Form>
  );
}
