import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { Flip, Slide, Zoom, Bounce } from "react-toastify";

export default function home() {
    const words = ["Smart", "Easy", "Quick", "Safe"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        toast.info("Welcome to QuickCart!", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
        });
    }, []);
    const cards = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
            ),
            title: "Lightning Fast",
            description: "One-click checkout and instant order processing",
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            title: "Secure Payment",
            description: "Bank-level security for all your transactions",
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="17" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                </svg>
            ),
            title: "Fast Delivery",
            description: "Same-day delivery available in most areas",
        },
    ];

    const [products, setProducts] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Laptops",
            Price: "75,000",
            description: "Slim & lightweight design, perfect for travel"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/29020349/pexels-photo-29020349/free-photo-of-modern-smartphone-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "iPhone 15 Pro Max",
            Price: "90,950",
            description: "A17 Pro chip, 48MP camera, Titanium build."
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Samsung Galaxy Watch",
            Price: "4,500",
            description: "Built-in GPS, 24/7 heart rate & 40+ workouts."
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Casual Shirt Dress",
            Price: "1200",
            description: "Stylish yet comfortable for daily wear."
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Laptops",
            Price: "75,000",
            description: "Slim & lightweight design, perfect for travel"
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/29020349/pexels-photo-29020349/free-photo-of-modern-smartphone-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "iPhone 15 Pro Max",
            Price: "90,950",
            description: "A17 Pro chip, 48MP camera, Titanium build."
        },
        {
            id: 7,
            image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Samsung Galaxy Watch",
            Price: "4,500",
            description: "Built-in GPS, 24/7 heart rate & 40+ workouts."
        },
        {
            id: 8,
            image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Casual Shirt Dress",
            Price: "1200",
            description: "Stylish yet comfortable for daily wear."
        },
    ]);
    const handleAddToCart = (product) => {
        toast.success(`${product.title} added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom,
        });
    };


    return (
        <>
            <div>
      {/* Pass cart count to header */}
      {/* <Header cartCount={cartCount} /> */}
            <motion.div
                className="bannerImg p-5"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <h2 className="herotext text-white pt-4">
                            Shop Fast, Shop{" "}
                            <span className="herotext-span fade-text">{words[index]}</span>
                        </h2>
                        <p className="fs-2 text-white">
                            Experience lightning-fast shopping with QuickCart. Find what you
                            love, buy what you need, delivered in record time.
                        </p>

                        {/* Buttons with Hover Animation */}
                        <motion.div
                            className="d-flex gap-2 justify-content-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <button className="primaryBtn">Start Shopping</button>
                            <button className="SecondaryBtn">Learn More</button>
                        </motion.div>
                    </motion.div>

                    {/* Cards Animation */}
                    <motion.div
                        className="d-flex pt-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        {cards.map((card) => (
                            <motion.div
                                key={card.id}
                                className="card"
                                style={{ marginRight: "10px" }}
                                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <div className="card-body">
                                    <div className="Icon">{card.icon}</div>
                                    <p className="text-white fw-bold pt-2 m-0">{card.title}</p>
                                    <p className="text-white pt-2">{card.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <motion.section
                className="px-4 py-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-center fs-1 fw-bold">Featured Products</h2>
                <p className="text-center fs-5 subHeading">
                    Discover our most popular items, handpicked just for you
                </p>

                <motion.div
                    className="py-4"
                    style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                width: "300px",
                                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <div className="p-2">
                                <h5 className="m-0 pb-2">{product.title}</h5>
                                <p className="m-0 pb-2">{product.description}</p>
                                <div className="d-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="skyblue"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 3h12" />
                                        <path d="M6 8h12" />
                                        <path d="m6 13 8.5 8" />
                                        <path d="M6 13h3" />
                                        <path d="M9 13c6.667 0 6.667-10 0-10" />
                                    </svg>
                                    <p className="m-0 pb-2 fw-bold Price">{product.Price}</p>
                                </div>
                                <button
                                    className="cartBtn"
                                    onClick={() => {
                                        handleAddToCart(product);
                                        addToCart();
                                    }}
                                >
                                    Add to Cart
                                </button>
                                <ToastContainer draggable newestOnTop />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button Animation */}
                <motion.div
                    className="d-flex justify-content-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <button className="primaryBtn">
                        View More{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                        </svg>
                    </button>
                </motion.div>
            </motion.section>

      {/* Pass addToCart function to product */}
      {/* <Product addToCart={addToCart} /> */}
    </div>
        </>
    )
}


