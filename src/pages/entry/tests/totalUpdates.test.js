import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Options from '../Options';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('update topping subtotal when scoops change', async () => {
  render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

  const scoopsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });
  userEvent.click(cherriesCheckbox);
  expect(scoopsSubtotal).toHaveTextContent('1.50');

  const hotFudgeCheckbox = await screen.findByRole('checkbox', {
    name: 'Hot fudge',
  });
  userEvent.click(hotFudgeCheckbox);
  expect(scoopsSubtotal).toHaveTextContent('3.00');

  userEvent.click(hotFudgeCheckbox);
  expect(scoopsSubtotal).toHaveTextContent('1.50');
});
