const MainSection = () => {
    return (
        // Menggunakan berbagai utility class Tailwind: flex, gap, justify, items.
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Produk 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:w-1/3">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Sepatu Sneakers</h2>
                <p className="text-gray-600 mb-4">Sepatu super nyaman untuk kegiatan sehari-hari.</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold transition-colors">
                    Beli Sekarang
                </button>
            </div>
            
            {/* Produk 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:w-1/3">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Kaos Polos Premium</h2>
                <p className="text-gray-600 mb-4">Bahan katun 100% yang sangat adem dan lembut.</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold transition-colors">
                    Beli Sekarang
                </button>
            </div>
        </div>
    );
};

export default MainSection;