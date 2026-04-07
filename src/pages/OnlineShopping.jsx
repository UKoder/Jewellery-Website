import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import './Company.css'; // For basic layout
import './OnlineShopping.css';

const OnlineShopping = () => {
  const products = [
    { title: "22K Gold Antique Necklace", category: "Necklace", price: "₹1,45,000" },
    { title: "Diamond Solitaire Ring", category: "Ring", price: "₹85,000" },
    { title: "Kundan Bridal Set", category: "Bridal", price: "₹3,20,000" },
    { title: "Gold Temple Bangles", category: "Bangles", price: "₹1,15,000" },
    { title: "Platinum Couple Bands", category: "Rings", price: "₹65,000" },
    { title: "Ruby Emerald Drop Earrings", category: "Earrings", price: "₹45,000" },
  ];

  return (
    <div className="company-page shop-page">
      <section className="page-header text-center">
        <h1 className="heading-font gold-gradient-text">Premium Collection</h1>
        <p className="page-subtitle max-w-800">
          Discover our exquisitely crafted jewellery, designed to make every moment precious.
        </p>
      </section>

      <section className="shop-grid-section container">
        <div className="shop-controls mb-4">
          <p className="text-muted">Showing {products.length} items</p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="product-image-placeholder">
                <ShoppingBag className="placeholder-icon" size={48} />
              </div>
              <div className="product-info">
                <span className="product-category text-muted">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price gold-gradient-text">{product.price}</p>
                <button className="btn-outline w-100 mt-3 flex-center">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OnlineShopping;
