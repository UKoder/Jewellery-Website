import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, X, ShoppingBag } from 'lucide-react';
import './Company.css';
import './OnlineShopping.css';

const OnlineShopping = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    { id: 1, title: "22K Gold Antique Necklace", category: "Necklace", price: 145000, image: "./product_necklace.png" },
    { id: 2, title: "Diamond Solitaire Ring", category: "Ring", price: 85000, image: "./product_ring.png" },
    { id: 3, title: "Kundan Bridal Set", category: "Bridal", price: 320000, image: "./product_bridal.png" },
    { id: 4, title: "Gold Temple Bangles", category: "Bangles", price: 115000, image: "./product_bangles.png" },
    { id: 5, title: "Platinum Couple Bands", category: "Rings", price: 65000, image: "./product_bands.png" },
    { id: 6, title: "Ruby Emerald Drop Earrings", category: "Earrings", price: 45000, image: "./product_earrings.png" },
  ];

  const formatPrice = (price) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

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
          <button
            className="cart-toggle-btn"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={20} />
            <span>View Cart</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="product-image-placeholder">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="product-img-fallback" style={{ display: 'none' }}>
                  <ShoppingBag className="placeholder-icon" size={48} />
                </div>
              </div>
              <div className="product-info">
                <span className="product-category text-muted">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price gold-gradient-text">{formatPrice(product.price)}</p>
                <button
                  className="btn-outline w-100 mt-3 flex-center add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <Plus size={16} style={{ marginRight: '6px' }} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar Overlay */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="cart-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              className="cart-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="cart-header">
                <h2 className="heading-font">
                  <ShoppingCart size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  Your Cart
                </h2>
                <button className="cart-close-btn" onClick={() => setCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="cart-body">
                {cart.length === 0 ? (
                  <div className="cart-empty">
                    <ShoppingBag size={64} style={{ color: 'var(--color-gold-dark)', opacity: 0.3 }} />
                    <p>Your cart is empty</p>
                    <span className="text-muted">Browse our collection and add items you love.</span>
                  </div>
                ) : (
                  <div className="cart-items">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        className="cart-item"
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                      >
                        <img src={item.image} alt={item.title} className="cart-item-img" />
                        <div className="cart-item-details">
                          <h4>{item.title}</h4>
                          <p className="gold-gradient-text cart-item-price">{formatPrice(item.price)}</p>
                          <div className="cart-qty-controls">
                            <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>
                              <Minus size={14} />
                            </button>
                            <span className="qty-value">{item.qty}</span>
                            <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>
                              <Plus size={14} />
                            </button>
                            <button className="qty-btn remove-btn" onClick={() => removeFromCart(item.id)}>
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total ({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
                    <span className="gold-gradient-text cart-total-price">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnlineShopping;
