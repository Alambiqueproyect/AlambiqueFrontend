import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

test('There is a image in the Navbar', () => {
     const resultScreen = render(<Navbar />);
     const image = resultScreen.container.querySelector('#img-logo');
     console.log(image);
     expect(image).toBeInTheDocument();
   });
