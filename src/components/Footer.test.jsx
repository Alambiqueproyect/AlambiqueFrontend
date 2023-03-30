import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


test('should contain a link element', () => {
     render(<Footer />);
     const LinkElement = screen.getByText(/Contact/i);
     expect(LinkElement).toBeInTheDocument();
});