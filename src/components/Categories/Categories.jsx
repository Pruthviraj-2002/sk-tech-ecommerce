import "./Categories.css";

function Categories() {

  const categories = [
    "Semiconductors",
    "Sensors",
    "Microcontrollers",
    "Connectors",
    "Power Modules",
    "IoT Devices"
  ];

  return (
    <section className="categories">

      <h2>Browse Categories</h2>

      <div className="category-grid">

        {categories.map((item,index)=>(
          <div
            className="category-card"
            key={index}
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;