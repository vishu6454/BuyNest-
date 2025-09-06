// PaymentsTab.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out opacity-100">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-100">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

function PaymentsTab() {
  const { currentUser } = useContext(AuthContext);
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem(`cards_${currentUser?.email}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [upis, setUpi] = useState(() => {
    const saved = localStorage.getItem(`upis_${currentUser?.email}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [coupons, setCoupons] = useState(() => {
    const saved = localStorage.getItem(`coupons_${currentUser?.email}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showAddUpiModal, setShowAddUpiModal] = useState(false);
  const [showAddCouponModal, setShowAddCouponModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState('');

  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newCardExpiry, setNewCardExpiry] = useState('');
  const [newCardCvv, setNewCardCvv] = useState('');

  const [newUpiVpa, setNewUpiVpa] = useState('');
  const [newUpiName, setNewUpiName] = useState('');

  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponDesc, setNewCouponDesc] = useState('');
  const [newCouponExpiry, setNewCouponExpiry] = useState('');

  const saveCards = (updatedCards) => {
    setCards(updatedCards);
    localStorage.setItem(`cards_${currentUser.email}`, JSON.stringify(updatedCards));
  };

  const saveUpi = (updatedUpi) => {
    setUpi(updatedUpi);
    localStorage.setItem(`upis_${currentUser.email}`, JSON.stringify(updatedUpi));
  };

  const saveCoupons = (updatedCoupons) => {
    setCoupons(updatedCoupons);
    localStorage.setItem(`coupons_${currentUser.email}`, JSON.stringify(updatedCoupons));
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (!newCardNumber || !newCardName || !newCardExpiry || !newCardCvv) {
      alert('Please fill all card details.');
      return;
    }
    const lastFour = newCardNumber.slice(-4);
    const cardType = newCardNumber.startsWith('4') ? 'Visa' : newCardNumber.startsWith('5') ? 'Mastercard' : 'Other';
    const newCard = {
      id: `c${Date.now()}`,
      type: cardType,
      lastFour,
      expiry: newCardExpiry,
      name: newCardName,
      issuer: 'Generic Bank',
    };
    const updatedCards = [...cards, newCard];
    saveCards(updatedCards);
    setShowAddCardModal(false);
    setNewCardNumber('');
    setNewCardName('');
    setNewCardExpiry('');
    setNewCardCvv('');
  };

  const handleAddUpi = (e) => {
    e.preventDefault();
    if (!newUpiVpa || !newUpiName) {
      alert('Please fill all UPI details.');
      return;
    }
    const newUpi = {
      id: `u${Date.now()}`,
      vpa: newUpiVpa,
      name: newUpiName,
    };
    const updatedUpi = [...upis, newUpi];
    saveUpi(updatedUpi);
    setShowAddUpiModal(false);
    setNewUpiVpa('');
    setNewUpiName('');
  };

  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (!newCouponCode || !newCouponDesc) {
      alert('Please fill coupon code and description.');
      return;
    }
    const newCoupon = {
      id: `co${Date.now()}`,
      code: newCouponCode.toUpperCase(),
      description: newCouponDesc,
      expiry: newCouponExpiry || 'N/A',
    };
    const updatedCoupons = [...coupons, newCoupon];
    saveCoupons(updatedCoupons);
    setShowAddCouponModal(false);
    setNewCouponCode('');
    setNewCouponDesc('');
    setNewCouponExpiry('');
  };

  const confirmRemoval = (item, type) => {
    setItemToDelete(item);
    setDeleteType(type);
    setShowConfirmationModal(true);
  };

  const handleRemoveItem = () => {
    if (!itemToDelete || !deleteType) return;

    if (deleteType === 'card') {
      const updatedCards = cards.filter(card => card.id !== itemToDelete.id);
      saveCards(updatedCards);
    } else if (deleteType === 'upi') {
      const updatedUpi = upis.filter(upi => upi.id !== itemToDelete.id);
      saveUpi(updatedUpi);
    } else if (deleteType === 'coupon') {
      const updatedCoupons = coupons.filter(coupon => coupon.id !== itemToDelete.id);
      saveCoupons(updatedCoupons);
    }
    setShowConfirmationModal(false);
    setItemToDelete(null);
    setDeleteType('');
  };

  const getCardIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'visa':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 w-auto" />;
      case 'mastercard':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 w-auto" />;
      default:
        return <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-1 3a1 1 0 100 2h12a1 1 0 100-2H5z" clipRule="evenodd"></path></svg>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8 transition-all duration-500 ease-in-out transform hover:scale-[1.005]">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">
          Your Payment Options
        </h1>

        <section className="mb-10 p-6 bg-blue-50 rounded-lg shadow-inner border border-blue-100 transition-all duration-300 ease-in-out hover:shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-800">Credit & Debit Cards</h2>
            <button
              onClick={() => setShowAddCardModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
              Add New Card
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.length === 0 ? (
              <p className="text-gray-600 italic col-span-full text-center">No cards added yet.</p>
            ) : (
              cards.map((card) => (
                <div key={card.id} className="relative bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    {getCardIcon(card.type)}
                    <span className="text-sm font-mono tracking-widest">{card.issuer}</span>
                  </div>
                  <div className="font-mono text-xl tracking-wider mb-4">
                    **** **** **** {card.lastFour}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-gray-300">Card Holder</div>
                      <div className="font-medium">{card.name}</div>
                    </div>
                    <div>
                      <div className="text-gray-300">Expires</div>
                      <div className="font-medium">{card.expiry}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => confirmRemoval(card, 'card')}
                    className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
                    title="Remove Card"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mb-10 p-6 bg-green-50 rounded-lg shadow-inner border border-green-100 transition-all duration-300 ease-in-out hover:shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">UPI Payments</h2>
            <button
              onClick={() => setShowAddUpiModal(true)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
              Add New UPI
            </button>
          </div>

          <div className="space-y-4">
            {upis.length === 0 ? (
              <p className="text-gray-600 italic text-center">No UPI IDs added yet.</p>
            ) : (
              upis.map((upi) => (
                <div key={upi.id} className="relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center justify-between transition-all duration-200 ease-in-out hover:shadow-md">
                  <div>
                    <p className="font-medium text-lg text-gray-900">{upi.vpa}</p>
                    <p className="text-sm text-gray-600">Linked to: {upi.name}</p>
                  </div>
                  <button
                    onClick={() => confirmRemoval(upi, 'upi')}
                    className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
                    title="Remove UPI"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="p-6 bg-purple-50 rounded-lg shadow-inner border border-purple-100 transition-all duration-300 ease-in-out hover:shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-purple-800">Your Coupons</h2>
            <button
              onClick={() => setShowAddCouponModal(true)}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
              Add New Coupon
            </button>
          </div>

          <div className="space-y-4">
            {coupons.length === 0 ? (
              <p className="text-gray-600 italic text-center">No coupons added yet.</p>
            ) : (
              coupons.map((coupon) => (
                <div key={coupon.id} className="relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center justify-between transition-all duration-200 ease-in-out hover:shadow-md">
                  <div>
                    <p className="font-bold text-xl text-purple-700">{coupon.code}</p>
                    <p className="text-sm text-gray-600">{coupon.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Expires: {coupon.expiry}</p>
                  </div>
                  <button
                    onClick={() => confirmRemoval(coupon, 'coupon')}
                    className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
                    title="Remove Coupon"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <Modal isOpen={showAddCardModal} onClose={() => setShowAddCardModal(false)} title="Add New Credit/Debit Card">
          <form onSubmit={handleAddCard} className="space-y-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              placeholder="Card Number"
              value={newCardNumber}
              onChange={(e) => setNewCardNumber(e.target.value)}
              maxLength="16"
              required
            />
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              placeholder="Card Holder Name"
              value={newCardName}
              onChange={(e) => setNewCardName(e.target.value)}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                placeholder="MM/YY"
                value={newCardExpiry}
                onChange={(e) => setNewCardExpiry(e.target.value)}
                maxLength="5"
                required
              />
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                placeholder="CVV"
                value={newCardCvv}
                onChange={(e) => setNewCardCvv(e.target.value)}
                maxLength="3"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
            >
              Add Card
            </button>
          </form>
        </Modal>

        <Modal isOpen={showAddUpiModal} onClose={() => setShowAddUpiModal(false)} title="Add New UPI ID">
          <form onSubmit={handleAddUpi} className="space-y-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-200"
              placeholder="UPI ID (e.g., yourname@bankname)"
              value={newUpiVpa}
              onChange={(e) => setNewUpiVpa(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-200"
              placeholder="Account Name"
              value={newUpiName}
              onChange={(e) => setNewUpiName(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200"
            >
              Add UPI
            </button>
          </form>
        </Modal>

        <Modal isOpen={showAddCouponModal} onClose={() => setShowAddCouponModal(false)} title="Add New Coupon">
          <form onSubmit={handleAddCoupon} className="space-y-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200"
              placeholder="Coupon Code"
              value={newCouponCode}
              onChange={(e) => setNewCouponCode(e.target.value)}
              required
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200"
              placeholder="Coupon Description (e.g., 10% off your next order)"
              rows="3"
              value={newCouponDesc}
              onChange={(e) => setNewCouponDesc(e.target.value)}
              required
            ></textarea>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200"
              placeholder="Expiry Date (MM/DD/YYYY - Optional)"
              value={newCouponExpiry}
              onChange={(e) => setNewCouponExpiry(e.target.value)}
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-200"
            >
              Add Coupon
            </button>
          </form>
        </Modal>

        <Modal isOpen={showConfirmationModal} onClose={() => setShowConfirmationModal(false)} title="Confirm Removal">
          <p className="text-gray-700 mb-6">
            Are you sure you want to remove this {deleteType}? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowConfirmationModal(false)}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleRemoveItem}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-200"
            >
              Remove
            </button>
          </div>
        </Modal>

      </div>
    </div>
  );
}

export default PaymentsTab;