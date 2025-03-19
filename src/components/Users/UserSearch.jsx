import { useState, useCallback } from 'react';
import { Search } from 'lucide-react';

// Utility function to debounce a function call, preventing excessive executions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout); // Clear the timeout if the function is invoked again within the wait period
      func(...args); // Execute the function after the delay
    };
    clearTimeout(timeout); // Ensure the previous timeout is cleared before setting a new one
    timeout = setTimeout(later, wait);
  };
};

const UserSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced function to optimize search execution and reduce unnecessary API calls
  const debouncedSearch = useCallback(
    debounce((value) => onSearch(value), 300), // Calls onSearch with a 300ms delay after typing stops
    [onSearch]
  );

  // Handles user input and triggers the debounced search function
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update state with current input
    debouncedSearch(value); // Call the debounced search function
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search users..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Search icon inside the input field */}
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
};

export default UserSearch;
