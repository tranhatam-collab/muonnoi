import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from '../../src/components/RegisterForm';

describe('RegisterForm', () => {
  it('renders step 1 fields', () => {
    render(<RegisterForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Nickname')).toBeInTheDocument();
    expect(screen.getByLabelText('Tuổi')).toBeInTheDocument();
  });

  it('blocks under-18 age', () => {
    render(<RegisterForm />);
    const ageInput = screen.getByLabelText('Tuổi');
    fireEvent.change(ageInput, { target: { value: '16' } });
    fireEvent.click(screen.getByText('Tiếp theo'));
    expect(screen.getByText('Bạn phải từ 18 tuổi trở lên')).toBeInTheDocument();
  });

  it('advances to step 2 on valid input', () => {
    render(<RegisterForm />);
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Nickname'), { target: { value: 'TestUser' } });
    fireEvent.change(screen.getByLabelText('Tuổi'), { target: { value: '25' } });
    fireEvent.click(screen.getByText('Tiếp theo'));
    expect(screen.getByText('Giới tính')).toBeInTheDocument();
  });
});
