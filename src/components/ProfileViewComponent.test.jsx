import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileViewComponent from './ProfileViewComponent';
import '@testing-library/jest-dom';

test('should contain a image element', () => {
    render(<ProfileViewComponent />);
    const ImageElement = screen.getByAltText(/Ororo/i);
    expect(ImageElement).toBeInTheDocument();
});