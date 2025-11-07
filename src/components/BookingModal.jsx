import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, prices }) => {
    if (!isOpen) return null;

    // State untuk menyimpan data form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        bookingDate: '',
        hotelName: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika pengiriman form (misalnya kirim ke API atau email service)
        console.log("Data Pemesanan:", formData);

        // NOTE: Pesan sukses ditampilkan di console, menggantikan alert()
        console.log('Pemesanan berhasil dikirim! Kami akan segera menghubungi Anda.');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header Modal */}
                <div className="sticky top-0 bg-teal-600 text-white p-5 rounded-t-xl flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Booking Airport Transfer</h3>
                    <button onClick={onClose} className="text-white hover:text-gray-200 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Nama */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* WhatsApp/Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">WhatsApp / Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Destinasi (Dropdown) */}
                    <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destinasi Tiba</label>
                        <select
                            name="destination"
                            id="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        >
                            <option value="">-- Pilih Destinasi --</option>
                            {prices.map((item, index) => (
                                <option key={index} value={item.destination}>
                                    {item.destination} ({item.price})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Booking Date */}
                    <div>
                        <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">Tanggal Booking</label>
                        <input
                            type="date"
                            name="bookingDate"
                            id="bookingDate"
                            value={formData.bookingDate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Nama Hotel (Jika sudah tahu) */}
                    <div>
                        <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">Nama Hotel / Villa</label>
                        <input
                            type="text"
                            name="hotelName"
                            id="hotelName"
                            value={formData.hotelName}
                            onChange={handleChange}
                            placeholder="Contoh: Hilton Bali Resort"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Pesan Tambahan */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan / Detail Penerbangan</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Contoh: Nomor Penerbangan, Waktu Tiba, Jumlah Penumpang"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150"
                    >
                        Kirim Pemesanan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
