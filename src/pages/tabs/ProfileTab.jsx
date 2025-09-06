// ProfileTab.js
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileTab() {
  const { currentUser } = useContext(AuthContext);
  const [editSection, setEditSection] = useState(null);
  const [formData, setFormData] = useState(currentUser || {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobile: '',
  });

  const handleSave = (section) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => 
      u.email === currentUser.email ? { ...u, ...formData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(formData));
    setEditSection(null);
  };

  const handleCancel = () => {
    setFormData(currentUser);
    setEditSection(null);
  };

  if (!currentUser) return <div className="p-4">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-indigo-700 border-b pb-2">Personal Information</h2>

      <SectionHeader
        title="Your Details"
        isEditing={editSection === 'personal'}
        onEdit={() => setEditSection('personal')}
        onSave={() => handleSave('personal')}
        onCancel={handleCancel}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EditableInput
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          readOnly={editSection !== 'personal'}
          label="First Name"
        />
        <EditableInput
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          readOnly={editSection !== 'personal'}
          label="Last Name"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="flex items-center gap-4 mt-1">
          {['Male', 'Female'].map((g) => (
            <label key={g} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                value={g}
                checked={formData.gender === g}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                disabled={editSection !== 'personal'}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <SectionHeader
        title="Email Address"
        isEditing={editSection === 'email'}
        onEdit={() => setEditSection('email')}
        onSave={() => handleSave('email')}
        onCancel={handleCancel}
      />
      <EditableInput
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        readOnly={editSection !== 'email'}
        type="email"
        className="w-full"
      />

      <SectionHeader
        title="Mobile Number"
        isEditing={editSection === 'mobile'}
        onEdit={() => setEditSection('mobile')}
        onSave={() => handleSave('mobile')}
        onCancel={handleCancel}
      />
      <EditableInput
        value={formData.mobile}
        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
        readOnly={editSection !== 'mobile'}
        type="tel"
        className="w-full"
      />

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">FAQs</h2>
        <Faq
          question="What happens when I update my email address or mobile number?"
          answer="Your login ID changes accordingly. You will receive all account-related communication on your new email or mobile."
        />
        <Faq
          question="When will my account be updated?"
          answer="As soon as you confirm the OTP sent to your new email or mobile and save the changes."
        />
      </div>
    </motion.div>
  );
}

function EditableInput({ value, onChange, readOnly, label, type = 'text', className = '' }) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full p-3 text-sm rounded-md border focus:outline-none transition duration-300 ${
          readOnly
            ? 'bg-gray-100 border-gray-300 text-gray-500'
            : 'border-blue-400 bg-white shadow-sm focus:ring-2 focus:ring-blue-300'
        }`}
      />
    </div>
  );
}

function SectionHeader({ title, isEditing, onEdit, onSave, onCancel }) {
  return (
    <div className="flex justify-between items-center mb-2 mt-6">
      <span className="font-medium text-gray-800">{title}</span>
      <div className="flex gap-2">
        {!isEditing ? (
          <button onClick={onEdit} className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm">
            <PencilSquareIcon className="w-4 h-4" />
            Edit
          </button>
        ) : (
          <>
            <button onClick={onSave} className="text-green-600 hover:text-green-800 flex items-center gap-1 text-sm">
              <CheckIcon className="w-4 h-4" />
              Save
            </button>
            <button onClick={onCancel} className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm">
              <XMarkIcon className="w-4 h-4" />
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Faq({ question, answer }) {
  return (
    <div className="mb-4">
      <h3 className="text-md font-medium text-gray-800">{question}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}