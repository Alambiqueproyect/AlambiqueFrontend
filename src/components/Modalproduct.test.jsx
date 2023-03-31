import React from 'react';
import { render, screen } from '@testing-library/react';
import Modalproduct from './Modalproduct';
import '@testing-library/jest-dom';



test('There is a button', () => {
    vi.mock('react-router-dom', () => ({
        useLoaderData: vi.Modalproduct()
    }))
    render(<Modalproduct show={true} />)
    screen.debug()
    const button = screen.getByText(/close/i);
    expect(button).toBeInTheDocument();
});