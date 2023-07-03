import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders login component', () => {
    render(<App />);
    const loginComponent = screen.getByTestId('login-component');
    expect(loginComponent).toBeInTheDocument();
  });

  test('displays main page after successful login', () => {
    render(<App />);
    // Simulate a successful login
    fireEvent.click(screen.getByText('Login'));
    const mainPage = screen.getByTestId('main-page');
    expect(mainPage).toBeInTheDocument();
  });

  test('logs out and shows login component', () => {
    render(<App />);
    // Simulate a successful login
    fireEvent.click(screen.getByText('Login'));
    // Simulate clicking on the logout button
    fireEvent.click(screen.getByText('Logout'));
    const loginComponent = screen.getByTestId('login-component');
    expect(loginComponent).toBeInTheDocument();
  });
});

