import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header';

describe('Header', () => {
  it('renders brand name', () => {
    render(<Header />);
    expect(screen.getByText('Kết Nối Muôn Nơi')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Trang chủ')).toBeInTheDocument();
    expect(screen.getByText('Về chúng tôi')).toBeInTheDocument();
    expect(screen.getByText('An toàn')).toBeInTheDocument();
    expect(screen.getByText('Hướng dẫn')).toBeInTheDocument();
  });

  it('renders login button', () => {
    render(<Header />);
    expect(screen.getByText('Đăng nhập')).toBeInTheDocument();
  });
});
