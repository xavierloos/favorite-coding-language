import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcoming message', () => {
  render(<App />);
  expect(screen.getByText('Search for a Github username')).toBeInTheDocument();
});
