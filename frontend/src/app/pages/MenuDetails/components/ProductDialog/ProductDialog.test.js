import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDialog from './ProductDialog';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<ProductDialog isOpen />, {});
    const testId = screen.getByTestId('ProductDialogContainer');
    expect(testId).toBeInTheDocument();
  });
});
