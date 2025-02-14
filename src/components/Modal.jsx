import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import axios from "axios";

const Modal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null; // Prevent rendering when modal is closed

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("http://localhost:5000/api/referrals", data);
      console.log("✅ Referral submitted successfully:", response.data);
      setIsOpen(false);
    } catch (error) {
      console.error("❌ API Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <Dialog.Title className="text-2xl font-bold mb-4 text-center">
          Refer a Friend 🎉
        </Dialog.Title>

        {/* Referral Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="referrerName" type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input name="referrerEmail" type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <input name="refereeName" type="text" placeholder="Friend's Name" className="w-full p-2 border rounded" required />
          <input name="refereeEmail" type="email" placeholder="Friend's Email" className="w-full p-2 border rounded" required />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-indigo-600 text-white w-full p-2 rounded font-semibold shadow-md hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 text-red-500 w-full text-center block"
        >
          Close
        </button>
      </motion.div>
    </Dialog>
  );
};

export default Modal;
