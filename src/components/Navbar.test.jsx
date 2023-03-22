import Navbar from "./Navbar"; 
import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom'
 
 
test('should contain a link element', () => { 
     render(<Navbar />); 
     const LinkElement = screen.getByText(/Contact/i); 
     expect(LinkElement).toBeInTheDocument(); 
});