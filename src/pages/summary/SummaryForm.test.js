import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from './SummaryForm';
import userEvent from '@testing-library/user-event';

test('Initial conditions', () => {
  render(<SummaryForm />);
  const button = screen.getByRole('button', /order/i);
  const checkbox = screen.getByLabelText(/terms and conditions/i);

  expect(button).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test('button gets enabled after checkbox click and gets disabled after another click', () => {
  render(<SummaryForm />);
  const button = screen.getByRole('button', /order/i);
  const checkbox = screen.getByLabelText(/terms and conditions/i);

  userEvent.click(checkbox);

  expect(button).toBeEnabled();
  expect(checkbox).toBeChecked();

  userEvent.click(checkbox);

  expect(button).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);

  //initial
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  expect(nullPopover).not.toBeInTheDocument();

  //test hover
  const label = screen.getByText(/terms and conditions/i);

  userEvent.hover(label);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);

  expect(popover).toBeInTheDocument();

  //test unhover
  userEvent.unhover(label);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
