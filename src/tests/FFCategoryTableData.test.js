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
  describe('Positive Test cases', () => {
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
  })
  describe('Negative Test cases', () => {
    // Negative test case: No category name
    it('renders category name - no category name', function () {
      const row = {
        category_id: '1234567890abcdef',
        category_description: 'Lorem ipsum dolor sit amet',
      }
      render(<FFCategoryTableData row={row} />)
      const actualValue = screen.getByTestId('category-name').textContent
      expect(actualValue).toEqual('')
    })

    // Negative test case: No category ID
    it('renders category ID - no category ID', function () {
      const row = {
        category_name: 'Test Category',
        category_description: 'Lorem ipsum dolor sit amet',
      }
      render(<FFCategoryTableData row={row} />)
      const actualValue = screen.getByTestId('category-id').textContent
      expect(actualValue).toEqual('...')
    })

    // Negative test case: No category description
    it('renders category description - no category description', function () {
      const row = {
        category_name: 'Test Category',
        category_id: '1234567890abcdef',
      }
      render(<FFCategoryTableData row={row} />)
      const actualValue = screen.getByTestId('category-description').textContent
      expect(actualValue).toBe('...')
    })

    // Negative test case: No category image
    it('renders category image - no category image', function () {
      const row = {
        category_name: 'Test Category',
        category_id: '1234567890abcdef',
        category_description: 'Lorem ipsum dolor sit amet',
      }
      render(<FFCategoryTableData row={row} />)
      const imageElement = screen.getByTestId('category-img-url')
      const actualValue = imageElement.getAttribute('src')
      expect(actualValue).toBeNull()
    })

    // Negative test case: No updated date
    it('renders updated date - no updated date', function () {
      const row = {
        category_name: 'Test Category',
        category_id: '1234567890abcdef',
        category_description: 'Lorem ipsum dolor sit amet',
        category_image: ['image.jpg'],
      }
      render(<FFCategoryTableData row={row} />)
      const updatedDateElement = screen.getByTestId(
        'category-updated-at',
      ).textContent
      expect(updatedDateElement).toBe('')
    })
  })
})
