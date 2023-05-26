var React = require('react')
var testingLibraryReact = require('@testing-library/react')
var screen = testingLibraryReact.screen
var fireEvent = testingLibraryReact.fireEvent
var useDispatch = require('react-redux').useDispatch
var FFCategoryTableData = require('../components/atoms/FFCategoryTableData/FFCategoryTableData')

// Destructure the render function and assign it a different variable name
var { render: view } = testingLibraryReact;
// Mock the useDispatch hook
jest.mock('react-redux', function() {
  return {
    useDispatch: jest.fn(),
  };
});

describe('FFCategoryTableData', function() {
  beforeEach(function() {
    // Reset the mock implementation before each test
    useDispatch.mockReset();
  });

  test('renders category name', function() {
    var row = { category_name: 'Test Category' };
    view(React.createElement(FFCategoryTableData, { row: row }));
    expect(screen.getByText('Test Category')).toBeInTheDocument();
  });

  test('renders category ID', function() {
    var row = { category_id: '1234567890abcdef' };
    view(React.createElement(FFCategoryTableData, { row: row }));
    expect(screen.getByText('1234567...')).toBeInTheDocument();
  });

  test('renders category image', function() {
    var row = { category_image: 'image.jpg', category_name: 'Test Category' };
    view(React.createElement(FFCategoryTableData, { row: row }));
    var imageElement = screen.getByAltText('Test Category');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain('image.jpg');
  });

  test('renders category status', function() {
    var row = { category_status: 'active' };
    view(React.createElement(FFCategoryTableData, { row: row }));
    expect(screen.getByText('active')).toBeInTheDocument();
  });

  test('renders category description', function() {
    var row = { category_description: 'Lorem ipsum dolor sit amet' };
    view(React.createElement(FFCategoryTableData, { row: row }));
    expect(screen.getByText('Lorem...')).toBeInTheDocument();
  });

  test('renders updated date', function() {
    var row = { updatedAt: '2023-05-26' };
    view(React.createElement(FFCategoryTableData, { row: row }));
    expect(screen.getByText('2023-05-26')).toBeInTheDocument();
  });

  test('dispatches alertModalOpen action when bin icon is clicked', function() {
    var dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    var row = { _id: 'category-id' };
    view(React.createElement(FFCategoryTableData, { row: row }));

    var binIcon = screen.getByTestId('bin-icon');
    fireEvent.click(binIcon);

    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'alertSlice/alertModalOpen',
        payload: {
          open: true,
          type: 'category-delete',
          title: 'Confirm category Removal',
          body: 'Are you sure you want to delete this category? This action cannot be undone?',
          category_id: 'category-id',
        },
      }),
    );
  });

  test('dispatches editCategoryModalOpen action when edit icon is clicked', function() {
    var dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    var row = { category: {}, _id: 'category-id' };
    view(React.createElement(FFCategoryTableData, { row: row }));

    var editIcon = screen.getByTestId('edit-icon');
    fireEvent.click(editIcon);

    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'categorySlice/editCategoryModalOpen',
        payload: {
          category: expect.any(Object),
          open: true,
        },
      }),
    );
  });

  test('dispatches viewCategoryModalOpen action when vision icon is clicked', function() {
    var dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    var row = { category: {}, _id: 'category-id' };
    view(React.createElement(FFCategoryTableData, { row: row }));

    var visionIcon = screen.getByTestId('vision-icon');
    fireEvent.click(visionIcon);

    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'categorySlice/viewCategoryModalOpen',
        payload: {
          category: expect.any(Object),
          open: true,
        },
      }),
    );
  });
});

module.exports = FFCategoryTableData;