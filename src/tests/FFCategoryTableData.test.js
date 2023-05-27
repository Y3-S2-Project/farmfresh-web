import { render, screen, cleanup } from '@testing-library/react'
import FFCategoryTableData from '../components/atoms/FFCategoryTableData/FFCategoryTableData.jsx'
import { useDispatch } from 'react-redux'

jest.mock('react-redux', function () {
  return {
    useDispatch: jest.fn(),
  }
})

describe('FFCategoryTableData', function () {
  beforeEach(function () {
    // Reset the mock implementation before each test
    useDispatch.mockReset()
  })

  it('renders category name', function () {
    var row = {
      category_name: 'Test Category',
      category_id: '1234567890abcdef',
      category_description: 'Lorem ipsum dolor sit amet',
    }
    render(<FFCategoryTableData row={row} />)
    const actualValue = screen.getByTestId('category-name').textContent
    expect(actualValue).toEqual('Test Category')
  })

  it('renders category ID', function () {
    var row = {
      category_name: 'Test Category',
      category_id: '1234567890abcdef',
      category_description: 'Lorem ipsum dolor sit amet',
      category_image: ['image.jpg'],
    }
    render(<FFCategoryTableData row={row} />)
    const actualValue = screen.getByTestId('category-id').textContent
    expect(actualValue).toEqual('1234567...')
  })

  it('renders category image', function () {
    var row = {
      category_name: 'Test Category',
      category_id: '1234567890abcdef',
      category_description: 'Lorem ipsum dolor sit amet',
      category_image: ['image.jpg'],
    }
    render(<FFCategoryTableData row={row} />)
    const imageElement = screen.getByTestId('category-img-url')
    const actualValue = imageElement.getAttribute('src')

    expect(actualValue).toEqual('image.jpg')
  })

  it('renders category description', function () {
    var row = {
      category_name: 'Test Category',
      category_id: '1234567890abcdef',
      category_description: 'Lorem ipsum dolor sit amet',
      category_image: ['image.jpg'],
      updatedAt: '2023-05-26',
    }
    render(<FFCategoryTableData row={row} />)
    const actualValue = screen.getByTestId('category-description').textContent
    expect(actualValue).toEqual('Lorem...')
  })

  it('renders updated date', function () {
    var row = {
      category_name: 'Test Category',
      category_id: '1234567890abcdef',
      category_description: 'Lorem ipsum dolor sit amet',
      category_image: ['image.jpg'],
      updatedAt: '2023-05-26',
    }
    render(<FFCategoryTableData row={row} />)
    const actualValue = screen.getByTestId('category-updated-at').textContent
    expect(actualValue).toEqual('2023-05-26')
  })
  test('test', () => {
    expect(true).toBe(true)
  })
})
