import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import App from './App';

describe('App integration', () => {
  it('should add and display an ad', () => {
    const { getByText, getByRole, getByLabelText } = render(<App />);

    fireEvent.change(getByRole('textbox'), { target: { value: 'New ad' } });
    fireEvent.click(getByText('Добавить объявление'));

    const list = getByRole('list');
    const { getByText: getByTextWithinList } = within(list);
    expect(getByTextWithinList('New ad')).toBeInTheDocument();
  });
});
