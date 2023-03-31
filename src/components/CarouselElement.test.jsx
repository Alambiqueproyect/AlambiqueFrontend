import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselElement from './CarouselElement';
import '@testing-library/jest-dom';

test('should contain a image element', () => {
    render(<CarouselElement />);
    const ImageElement = screen.getByAltText(/First slide/i);
    expect(ImageElement).toBeInTheDocument();
});