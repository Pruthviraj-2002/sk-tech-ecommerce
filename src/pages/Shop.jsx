import { products } from '../data/mockProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
      
      {/* Page Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
          High Performance Components
        </h1>
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">
          Filtered for Precision
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* LEFT COLUMN: Filter Sidebar (Static Shell for now) */}
        <aside className="w-full lg:w-1/4 shrink-0">
          <div className="sticky top-24 space-y-8">
            
            {/* Filter Group: Manufacturer */}
            <div>
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Manufacturer</h3>
              <div className="space-y-3">
                {['STMicroelectronics', 'Espressif', 'Microchip', 'Texas Instruments'].map((brand) => (
                  <label key={brand} className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-900 border-gray-300 rounded-none focus:ring-gray-900 transition duration-150 ease-in-out" />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 font-medium">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Component Type */}
            <div>
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Component Type</h3>
              <div className="space-y-3">
                {['Microcontroller', 'Module', 'IC', 'Sensor'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-900 border-gray-300 rounded-none focus:ring-gray-900" />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Stock Status */}
            <div>
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Availability</h3>
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-900 border-gray-300 rounded-none focus:ring-gray-900" />
                <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 font-medium">In Stock Only</span>
              </label>
            </div>

          </div>
        </aside>

        {/* RIGHT COLUMN: Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{products.length} Items Found</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group block border border-gray-100 hover:border-gray-300 transition-colors bg-white p-4">
                
                {/* Product Image */}
                <div className="aspect-square mb-4 overflow-hidden bg-gray-50 flex items-center justify-center p-4 relative">
                  {!product.inStock && (
                     <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1">Out of Stock</span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
                </div>

                {/* Product Info */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-sm font-black text-gray-900 tracking-tight">{product.name}</h3>
                  <p className="text-xs text-gray-500 font-medium line-clamp-1">{product.description}</p>
                </div>

                {/* Price & Action */}
                <div className="flex justify-between items-end mt-4">
                  <span className="text-lg font-black text-gray-900">${product.price.toFixed(2)}</span>
                  <button className="text-[10px] font-bold uppercase tracking-widest bg-gray-900 text-white px-4 py-2 hover:bg-black transition-colors">
                    Add
                  </button>
                </div>

              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;