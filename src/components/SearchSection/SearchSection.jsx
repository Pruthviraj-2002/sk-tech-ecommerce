import "./SearchSection.css";

function SearchSection() {
  return (
    <section className="search-banner">
      <div className="search-content">
        <h2>Find the exact part you need.</h2>
        <p>Search millions of components, data sheets, and manufacturer specs instantly.</p>
        
        <div className="search-bar-wrapper">
          <input 
            type="text" 
            placeholder="Search by part number, keyword, or brand..." 
            className="premium-input"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;