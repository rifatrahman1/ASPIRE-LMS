import React, { useState } from 'react';
import { Upload, BookOpen, User, BookType, FileText, Star } from 'lucide-react';

// interface BookFormData {
//   coverImage: string;
//   title: string;
//   quantity: number;
//   authorName: string;
//   category: string;
//   description: string;
//   rating: number;
// }

const categories = ['Novel', 'Thriller', 'History', 'Drama', 'Sci-Fi'];

export default function BookForm() {
      const [formData, setFormData] = useState({
            coverImage: '',
            title: '',
            quantity: 1,
            authorName: '',
            category: categories[0],
            description: '',
            rating: 5,
      });

      const handleSubmit = (e) => {
            e.preventDefault();
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);
      };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
      };

      return (
            <div className='translate-y-22'>
                  <form onSubmit={handleSubmit} className="space-y-6 w-8/12 mx-auto bg-white py-12 px-30 rounded-2xl">
                        <div className="space-y-2">
                              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Upload size={20} />
                                    Cover Image URL
                              </label>
                              <input
                                    type="url"
                                    name="coverImage"
                                    value={formData.coverImage}
                                    onChange={handleChange}
                                    placeholder="Enter image URL"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              />
                        </div>

                        <div className="space-y-2">
                              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <BookOpen size={20} />
                                    Book Title
                              </label>
                              <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter book title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                              />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                          Quantity
                                    </label>
                                    <input
                                          type="number"
                                          name="quantity"
                                          value={formData.quantity}
                                          onChange={handleChange}
                                          min="1"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>

                              <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                          <User size={20} />
                                          Author Name
                                    </label>
                                    <input
                                          type="text"
                                          name="authorName"
                                          value={formData.authorName}
                                          onChange={handleChange}
                                          placeholder="Enter author name"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                          <BookType size={20} />
                                          Category
                                    </label>
                                    <select
                                          name="category"
                                          value={formData.category}
                                          onChange={handleChange}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    >
                                          {categories.map(category => (
                                                <option key={category} value={category}>
                                                      {category}
                                                </option>
                                          ))}
                                    </select>
                              </div>

                              <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                          <Star size={20} />
                                          Rating
                                    </label>
                                    <input
                                          type="number"
                                          name="rating"
                                          value={formData.rating}
                                          onChange={handleChange}
                                          min="1"
                                          max="5"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                          required
                                    />
                              </div>
                        </div>

                        <div className="space-y-2">
                              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <FileText size={20} />
                                    Description
                              </label>
                              <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Enter book description"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                              />
                        </div>

                        <div className="pt-4">
                              <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                    Add Book
                              </button>
                        </div>
                  </form>
            </div>
      );
}