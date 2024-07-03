import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { FiEdit2, FiTrash2, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import axios from 'axios';

const Table = () => {
  const [airports, setAirports] = useState([]);
  const [newAirport, setNewAirport] = useState({ name: '', country: '', code: '', terminals: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get('https://backend-assign-x1t0.onrender.com/airports');
        setAirports(response.data);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };
    fetchAirports();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAirport({ ...newAirport, [name]: value });
  };

  const openModal = (index = null) => {
    setIsModalOpen(true);
    setEditingIndex(index);
    if (index !== null) {
      setNewAirport(airports[index]);
    } else {
      setNewAirport({ name: '', country: '', code: '', terminals: '' });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveAirport = async () => {
    if (editingIndex !== null) {
      try {
        const response = await axios.put(`https://backend-assign-x1t0.onrender.com/airports/${airports[editingIndex]._id}`, newAirport);
        const updatedAirports = airports.map((airport, i) =>
          i === editingIndex ? response.data : airport
        );
        setAirports(updatedAirports);
      } catch (error) {
        console.error('Error updating airport:', error);
      }
    } else {
      try {
        const response = await axios.post('https://backend-assign-x1t0.onrender.com/airports', newAirport);
        setAirports([...airports, response.data]);
      } catch (error) {
        console.error('Error saving airport:', error);
      }
    }
    setNewAirport({ name: '', country: '', code: '', terminals: '' });
    setEditingIndex(null);
    closeModal();
  };

  const deleteAirport = async (index) => {
    try {
      await axios.delete(`https://backend-assign-x1t0.onrender.com/airports/${airports[index]._id}`);
      const updatedAirports = airports.filter((_, i) => i !== index);
      setAirports(updatedAirports);
    } catch (error) {
      console.error('Error deleting airport:', error);
    }
  };

  const toggleRowSelection = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const toggleSelectAllRows = () => {
    if (selectedRows.length === airports.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...Array(airports.length).keys()]);
    }
  };

  const sortBy = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedAirports = useMemo(() => {
    let sortableAirports = [...airports];
    if (sortConfig.key !== null) {
      sortableAirports.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableAirports;
  }, [airports, sortConfig]);

  return (
    <div className="p-4 ml-80 mt-24 mr-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Airports</h1>
        <button
          className="bg-black text-white border border-black rounded-3xl p-2 w-28"
          onClick={() => openModal()}
        >
          + Add New
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border w-1/12 text-left">
              <input
                type="checkbox"
                checked={selectedRows.length === airports.length && airports.length > 0}
                onChange={toggleSelectAllRows}
                disabled={airports.length === 0}
              />
            </th>
            <SortableHeader
              title="All Airports"
              onClick={() => sortBy('name')}
              sortConfig={sortConfig}
              field="name"
            />
            <SortableHeader
              title="Country"
              onClick={() => sortBy('country')}
              sortConfig={sortConfig}
              field="country"
            />
            <SortableHeader
              title="Code"
              onClick={() => sortBy('code')}
              sortConfig={sortConfig}
              field="code"
            />
            <SortableHeader
              title="Terminals"
              onClick={() => sortBy('terminals')}
              sortConfig={sortConfig}
              field="terminals"
            />
          </tr>
        </thead>
        <tbody>
          {sortedAirports.map((airport, index) => (
            <tr key={index} className={selectedRows.includes(index) ? 'bg-gray-200' : ''}>
              <td className="py-2 px-4 border w-1/12">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => toggleRowSelection(index)}
                />
              </td>
              <td className="py-2 px-4 border w-2/5">
                <Link to={`/airport/${airport.name}`}>{airport.name}</Link>
              </td>
              <td className="py-2 px-4 border w-1/5">{airport.country}</td>
              <td className="py-2 px-4 border w-1/5">{airport.code}</td>
              <td className="py-2 px-4 border w-1/5">{airport.terminals}</td>
              <td className="py-2 px-4 w-1/5">
                <div className="flex justify-end space-x-2">
                  <button className="text-black" onClick={() => openModal(index)}>
                    <FiEdit2 />
                  </button>
                  <button className="text-black" onClick={() => deleteAirport(index)}>
                    <FiTrash2 />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveAirport}
        airport={newAirport}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

const SortableHeader = ({ title, onClick, sortConfig, field }) => {
  const isSorted = sortConfig.key === field;
  const sortIcon = isSorted ? (
    sortConfig.direction === 'ascending' ? <FiArrowUp /> : <FiArrowDown />
  ) : null;
  return (
    <th className="py-2 px-4 border w-1/5 text-left cursor-pointer">
      <div className="flex items-center justify-between" onClick={onClick}>
        <span>{title}</span>
        {sortIcon && (
          <span className="ml-1">
            {sortIcon}
          </span>
        )}
      </div>
    </th>
  );
};

export default Table;
