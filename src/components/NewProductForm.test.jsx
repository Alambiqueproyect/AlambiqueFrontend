import React from 'react';
import { render, screen } from '@testing-library/react';
import NewProductForm from './NewProductForm';
import '@testing-library/jest-dom';



test('There is a button', () => {
    vi.mock('react-router-dom',() => ({
        useLoaderData:vi.NewProductForm()
    }))
    render (<NewProductForm show={true} />)
    screen.debug()
    const button = screen.getByText(/Enviar/i);
    expect(button).toBeInTheDocument();
  });