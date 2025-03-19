import { useState, useEffect } from "react";
import UserSearch from "./UserSearch";
import { Mail, Phone, Globe } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
  <div className="container mx-auto px-6">
  <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
       Meet Our Team
    </h2>
    <UserSearch onSearch={handleSearch} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
      {filteredUsers.slice(0, 6).map((user) => (
        <div
          key={user.id}
          className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex items-center mb-6">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-gray-700">
              <Mail size={20} className="mr-2 text-blue-500" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone size={20} className="mr-2 text-blue-500" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Globe size={20} className="mr-2 text-blue-500" />
              <span>{user.website}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Users;
