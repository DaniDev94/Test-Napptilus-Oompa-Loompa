import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const idElement = screen.getByTestId('App');
  expect(idElement).toBeInTheDocument();
});
