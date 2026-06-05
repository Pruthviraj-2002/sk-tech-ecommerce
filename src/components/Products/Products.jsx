import { Link } from 'react-router-dom';

const newArrivals = [
  { id: 1, name: 'Precision Passive Parts', price: '$12.99', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { id: 2, name: 'Ceramic Resistor Packs', price: '$14.99', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { id: 3, name: 'OLED Display Arrays', price: '$24.99', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { id: 4, name: 'Quantum LED Matrix', price: '$18.99', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
];

const collections = [
  { id: 1, name: 'Microcontrollers', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { id: 2, name: 'Sensors & Optics', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { id: 3, name: 'Power Modules', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
  { id: 4, name: 'Connectivity', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
];

const Products = () => {
  return (
    <div className="w-full bg-[#f8f6f3] pb-24">
      {/* Matching the exact warm beige background to flow directly from the Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Curated Arrivals Section --- */}
        <div className="mb-24 pt-12 border-t border-gray-300/50">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">Curated Arrivals</h2>
              <p className="text-sm text-gray-500 font-light">The latest architectural components.</p>
            </div>
            <Link to="/shop" className="text-xs font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest flex items-center border-b border-gray-900 pb-1">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group block">
                <div className="bg-white aspect-square mb-6 overflow-hidden flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-medium text-gray-900 tracking-wide">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Explore by Category Section --- */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Explore by Category</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {collections.map((item) => (
              <Link to="/shop" key={item.id} className="group flex flex-col items-center cursor-pointer">
                <div className="w-full aspect-square mb-6 overflow-hidden bg-white flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-lg rounded-full lg:rounded-none lg:rounded-tl-3xl lg:rounded-br-3xl">
                   <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
                </div>
                <h3 className="text-xs font-medium text-gray-900 uppercase tracking-widest text-center">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;