import React from 'react';

const Modal = ({ isOpen, onClose, onSave, airport, handleInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4">{airport._id ? 'Edit Airport' : 'Add New Airport'}</h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={airport.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={airport.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Code</label>
            <input
              type="text"
              name="code"
              value={airport.code}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Terminals</label>
            <input
              type="number"
              name="terminals"
              value={airport.terminals}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-800 text-white px-4 py-2 rounded">Cancel</button> 
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">Save</button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
