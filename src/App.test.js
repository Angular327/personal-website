import { render, screen } from '@testing-library/react';
import App from './App';

test('renders resume headline', () => {
  render(<App />);
  expect(
    screen.getByText(/Building performant backend systems that scale with confidence/i)
  ).toBeInTheDocument();
});
