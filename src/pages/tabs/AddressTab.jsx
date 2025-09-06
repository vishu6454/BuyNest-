import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function AddressTab() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem(
        `user-addresses_${currentUser?.uid}`
      );
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Failed to parse addresses from localStorage:", err);
      return [];
    }
  });

  const [formVisible, setFormVisible] = useState(false);
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState(getEmptyAddress());

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        `user-addresses_${currentUser.uid}`,
        JSON.stringify(addresses)
      );
    }
  }, [addresses, currentUser]);

  function getEmptyAddress() {
    return {
      country: "",
      firstName: "",
      lastName: "",
      mobile: "",
      pincode: "",
      flat: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
    };
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const updated = [...addresses];
    if (editIndex !== null) {
      updated[editIndex] = formData;
    } else {
      updated.push(formData);
    }
    setAddresses(updated);
    resetForm();
  };

  const handleEdit = (index) => {
    setFormData(addresses[index]);
    setFormVisible(true);
    setEditIndex(index);
    setMenuOpenIndex(null);
  };

  const handleDelete = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    setMenuOpenIndex(null);
  };

  const resetForm = () => {
    setFormData(getEmptyAddress());
    setFormVisible(false);
    setEditIndex(null);
  };

  const handleAutofillLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const a = data.address;

          setFormData((prev) => ({
            ...prev,
            country: a.country || "",
            state: a.state || "",
            city: a.city || a.town || a.village || "",
            pincode: a.postcode || "",
            area: a.suburb || a.residential || "",
            landmark: a.neighbourhood || a.road || "",
          }));
        } catch (error) {
          alert("Failed to fetch location details.");
          console.error(error);
        }
      },
      (err) => {
        alert("Permission denied or error getting location.");
        console.error(err);
      }
    );
  };

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "South Africa",
  ];

  return (
    <div
      className={`p-4 max-w-3xl mx-auto space-y-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Your Addresses
        </h2>
        {!formVisible && (
          <button
            onClick={() => {
              setFormVisible(true);
              setFormData(getEmptyAddress());
              setEditIndex(null);
            }}
            className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            <PlusIcon className="h-5 w-5" />
            Add New Address
          </button>
        )}
      </div>

      {addresses.length === 0 && !formVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-500 border border-dashed border-gray-300 p-6 rounded-lg bg-gradient-to-r from-blue-50 via-white to-pink-50 shadow-sm"
        >
          <p className="text-lg">No addresses added yet.</p>
          <p className="text-sm mt-1">
            Click on "Add New Address" to get started.
          </p>
        </motion.div>
      )}

      <AnimatePresence>
        {addresses.map((address, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative bg-white rounded-xl shadow-md p-5 border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <HomeIcon className="h-5 w-5 text-blue-500" />
                  {address.firstName} {address.lastName}
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    Default
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {address.flat}, {address.area}, {address.landmark},{" "}
                  {address.city} - {address.pincode}
                </p>
                <p className="text-sm text-gray-600">
                  {address.state}, {address.country}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  📞 {address.mobile}
                </p>
              </div>
              <div className="relative">
                <button
                  className="p-1 hover:bg-gray-100 rounded-full"
                  onClick={() =>
                    setMenuOpenIndex(menuOpenIndex === index ? null : index)
                  }
                >
                  <EllipsisHorizontalIcon className="h-5 w-5 text-gray-600" />
                </button>
                <AnimatePresence>
                  {menuOpenIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow z-10"
                    >
                      <button
                        onClick={() => handleEdit(index)}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      >
                        <PencilIcon className="h-4 w-4 inline mr-2" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                      >
                        <TrashIcon className="h-4 w-4 inline mr-2" /> Delete
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {formVisible && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="space-y-4 bg-white border border-gray-200 p-6 rounded-xl shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-blue-700 uppercase tracking-wide mb-1">
                  Country/Region
                </label>
                <div className="flex gap-2 items-center">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={handleAutofillLocation}
                    className="text-blue-600 text-sm underline hover:text-blue-800"
                  >
                    Autofill
                  </button>
                </div>
              </div>

              {[
                ["mobile", "Mobile Number"],
                ["firstName", "First Name"],
                ["lastName", "Last Name"],
                ["flat", "Flat, House no., Building"],
                ["area", "Area, Street, Sector, Village"],
                ["landmark", "Landmark"],
                ["city", "Town/City"],
                ["state", "State"],
                ["pincode", "Pincode"],
              ].map(([key, label], i) => (
                <div
                  key={key}
                  className={i < 3 || i > 5 ? "" : "md:col-span-2"}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="pt-4 flex gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {editIndex !== null ? "Update Address" : "Save Address"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
