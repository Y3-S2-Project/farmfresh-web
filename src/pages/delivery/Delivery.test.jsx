import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Delivery from './Delivery'

describe('Delivery component', () => {
  test('updates name state correctly', () => {
    const { getByLabelText } = render(<Delivery />)
    const nameInput = getByLabelText('Your Name')

    act(() => {
      fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    })

    expect(nameInput.value).toBe('John Doe')
  })

  test('updates houseNo state correctly', () => {
    const { getByLabelText } = render(<Delivery />)
    const houseNoInput = getByLabelText('House no/Lane')

    act(() => {
      fireEvent.change(houseNoInput, { target: { value: '123 Main St' } })
    })

    expect(houseNoInput.value).toBe('123 Main St')
  })

  test('updates street state correctly', () => {
    const { getByLabelText } = render(<Delivery />)
    const streetInput = getByLabelText('Street')

    act(() => {
      fireEvent.change(streetInput, { target: { value: 'Example Street' } })
    })

    expect(streetInput.value).toBe('Example Street')
  })

})