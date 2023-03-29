import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

vi.mock('react-router-dom',() => ({
  Link:vi.fn()
}))

test('should contain a image element', () => { 
  render(<Navbar />); 
  screen.debug()
  const ImageElement = screen.getByAltText(/Alambique/i); 
  expect(ImageElement).toBeInTheDocument(); 
});