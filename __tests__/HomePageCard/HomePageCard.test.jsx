import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePageCard from '../../src/components/HomePageCard/HomePageCard.jsx';

describe('homepage', () => {
  test('renders a homepage', () => {
    const dummyTitle = 'Test Title';
    const dummyContent = 'Test Content';

    render(<HomePageCard title={dummyTitle} content={dummyContent} />);

    const titleElement = screen.getByText(dummyTitle);
    const contentElement = screen.getByText(dummyContent);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
