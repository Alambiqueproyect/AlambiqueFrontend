import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

test('There is a image in the Navbar', () => {
     const resultScreen = render(<Navbar />);
     // const image = screen.getByAltText('Alambique');
     const image = resultScreen.container.querySelector('#img-logo');
     console.log(image);
     expect(image).toBeInTheDocument();
   });



/*import Navbar from "./Navbar"; 
import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom'
 
 
test('should contain a png element', () => { 
     render(<Navbar />); 
     const PNGElement = screen.get(/icons/i); 
     expect(PNGElement).toBeInTheDocument(); 
});*/