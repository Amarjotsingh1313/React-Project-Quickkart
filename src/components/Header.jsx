import { useState } from "react";
export const Header = () => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount + 1);
    };
    return (
        <div className="navbar d-flex justify-content-between align-items-center px-3 py-2">
            <div className="logoImg ">
                <img className="qucklogo" src="/images/logo.png" alt="logo" />
            </div>
            <div className="">
                <input type="text" className="searchbar" placeholder="search products" />
            </div>
            <div className="d-flex gap-2 align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <div style={{ padding: "20px" }}>
                    {/* Cart Icon with number */}
                    <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 10a4 4 0 0 1-8 0" />
                            <path d="M3.103 6.034h17.794" />
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                        </svg>

                        {/* Badge */}
                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-5px",
                                    right: "-5px",
                                    background: "#F48421",
                                    color: "white",
                                    borderRadius: "50%",
                                    padding: "2px 6px",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
                

            </div>
        </div>
    )
}