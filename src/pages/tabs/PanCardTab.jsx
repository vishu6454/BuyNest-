// PanCardTab.js
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';

export default function PanCardTab() {
  const { currentUser } = useContext(AuthContext);
  const [panNumber, setPanNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [panFile, setPanFile] = useState(null);
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [panDetails, setPanDetails] = useState(() => {
    const saved = localStorage.getItem(`panDetails_${currentUser?.email}`);
    return saved ? JSON.parse(saved) : null;
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/jpeg') {
      setPanFile(file);
    } else {
      setPanFile(null);
      toast.error('Only JPEG files are allowed.');
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!panNumber || !fullName || !panFile || !declarationChecked) {
      toast.error('Please fill all fields, upload a JPEG, and accept the declaration.');
      return;
    }

    const newPanDetails = {
      panNumber,
      fullName,
      panFile: panFile.name,
      date: new Date().toLocaleDateString()
    };

    localStorage.setItem(`panDetails_${currentUser.email}`, JSON.stringify(newPanDetails));
    setPanDetails(newPanDetails);
    
    toast.success('PAN Card uploaded successfully!');
    setPanNumber('');
    setFullName('');
    setPanFile(null);
    setDeclarationChecked(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-blue-50 to-white p-6 sm:p-10">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">PAN Card Information</h1>

        {panDetails ? (
          <div className="border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Your PAN Details</h2>
            <div className="space-y-3">
              <p><span className="font-medium">PAN Number:</span> {panDetails.panNumber}</p>
              <p><span className="font-medium">Full Name:</span> {panDetails.fullName}</p>
              <p><span className="font-medium">Uploaded File:</span> {panDetails.panFile}</p>
              <p><span className="font-medium">Uploaded On:</span> {panDetails.date}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="space-y-6">
            <input
              type="text"
              placeholder="PAN Card Number"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              className="input"
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input"
              required
            />
            <div>
              <label htmlFor="panUpload" className="block text-gray-700 font-medium mb-1">
                Upload PAN Card <span className="text-sm text-gray-500">(JPEG only)</span>
              </label>
              <input
                id="panUpload"
                type="file"
                accept="image/jpeg"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                required
              />
              {panFile && (
                <p className="text-sm mt-2 text-gray-600">Selected: {panFile.name}</p>
              )}
            </div>
            <label className="flex items-start space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={declarationChecked}
                onChange={(e) => setDeclarationChecked(e.target.checked)}
                className="mt-1 text-blue-600"
                required
              />
              <span>
                I declare that the PAN furnished above is correct and belongs to me. I take full responsibility for any consequences in case of false declaration.
              </span>
            </label>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Upload PAN
            </button>
          </form>
        )}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-6 text-center"
        >
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Read Terms & Conditions for PAN submissions
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}