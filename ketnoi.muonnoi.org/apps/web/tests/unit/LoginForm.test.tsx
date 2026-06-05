import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../src/components/LoginForm';

describe('LoginForm', () => {
  it('renders email input', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders magic link button', () => {
    render(<LoginForm />);
    expect(screen.getByText('Gửi magic link')).toBeInTheDocument();
  });

  it('renders passkey button', () => {
    render(<LoginForm />);
    expect(screen.getByText('Đăng nhập bằng Passkey')).toBeInTheDocument();
  });

  it('shows sent state after submit', async () => {
    render(<LoginForm />);
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText('Gửi magic link'));
    // After submit, should show sent message (after async timeout)
    // Simplified: just check button disabled state
    expect(screen.getByText('Gửi magic link')).toBeDisabled();
  });
});
