
export const Footer = () => {
  return (
    <>
      <div className="Footer px-5 py-4">

        <div className="row d-flex align-items-center">
          <div className="col-md-3 align-items-center">
            <img className="FooterLogo" src="/images/logo.png" alt="Footer Logo" />
            <p className="pb-3">Your ultimate destination for fast, reliable online shopping. Quality products, competitive prices, lightning-fast delivery.</p>
            <div className="d-flex gap-3">
              <div className="Footer-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </div>
              <div className="Footer-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </div>
              <div className="Footer-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-2">
            <h5>Quicklinks</h5>
            <div className="FooterLinks">
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Categories</a>
              <a href="#">Deals</a>
              <a href="#">About Us</a>

            </div>

          </div>
          <div className="col-md-3">
            <h5>Customer Services</h5>
            <div className="FooterLinks">
              <a href="#">Contact Us</a>
              <a href="#">Shipping Info</a>
              <a href="#">Return & Exchanges</a>
              <a href="#">FAQ</a>
              <a href="#">Support</a>

            </div>
          </div>
          <div className="col-md-3">
            <h5>Stay Updated</h5>
            <p>Subscribe to get special offers, free giveaways, and deals.</p>
            <div className="d-flex gap-2">
              <input className="EmailInput" type="text" placeholder="Enter Your Email" />
              <button
                className="SubscribeBtn">
                Subscribe Now
              </button>

            </div>
          </div>
        </div>


      </div>
      <div className="py-3 text-center">
        <p>© 2024 QuickCart. All rights reserved.</p>

      </div>
    </>
  )
}
