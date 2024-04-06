import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../../src/components/Hero/Hero';

describe('Hero', () => {
  test('renders Hero component', () => {
    render(<Hero />);
    const heroElement = screen.getByText('MK Portfolio');
    expect(heroElement).toBeInTheDocument();
  });
});
