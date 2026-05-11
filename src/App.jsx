import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-section container-fluid px-0">
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            {/* LEFT SIDE TEXT */}
            <div className="col-md-6">
              <p className="welcome-text">WELCOME TO SHOPERY</p>
              <h1 className="main-heading">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p className="sale-text">
                Sale up to <span>30% OFF</span>
              </p>
              <p className="sub-text">
                Free shipping on all your order. we deliver, you enjoy
              </p>
              <button className="shop-btn">
                Shop now →
              </button>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="col-md-6 text-center">
              <img src="\images\Image (6).png" alt="Hero" className='hero-img' />
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION START */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Popular Products</h2>
          {/* <a href="#" className="text-success text-decoration-none fw-bold">View All →</a> */}
        </div>

        {/* FIRST ROW (4 Products) */}
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              {/* <span className="badge bg-danger sale-badge">Sale 50%</span> */}
              <img src="\images\apple.png" className="card-img-top p-3" alt="Apple" />
              <div className="card-body">
                <p className="product-name mb-0">Green Apple</p>
                <div className="price-tag fw-bold">$14.99</div>
                <div className="stars text-warning small">★★★★★</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              <img src="\images\cabage.png" className="card-img-top p-3" alt="Malta" />
              <div className="card-body">
                <p className="product-name mb-0">Chinese Cabage</p>
                <div className="price-tag fw-bold">$20.00</div>
                <div className="stars text-warning small">★★★★☆</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card active-card">
              <img src="\images\chili.png" className="card-img-top p-3" alt="Cabbage" />
              <div className="card-body">
                <p className="product-name mb-0 text-success">Green Chili</p>
                <div className="price-tag fw-bold">$12.00</div>
                <div className="stars text-warning small">★★★★☆</div>
                <button className="btn btn-success rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              <img src="\images\Image (3).png" className="card-img-top p-3" alt="Lettuce" />
              <div className="card-body">
                <p className="product-name mb-0">Green Lettuce</p>
                <div className="price-tag fw-bold">$9.00</div>
                <div className="stars text-warning small">★★★★☆</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW (4 Products) */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              <img src="\images\Image (4).png" className="card-img-top p-3" alt="Red Tomatoes" />
              <div className="card-body">
                <p className="product-name mb-0">Capsicum</p>
                <div className="price-tag fw-bold">$34.00</div>
                <div className="stars text-warning small">★★★★★</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              <img src="\images\Image (5).png" className="card-img-top p-3" />
              <div className="card-body">
                <p className="product-name mb-0">Corn</p>
                <div className="price-tag fw-bold">$20.00</div>
                <div className="stars text-warning small">★★★★★</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              <img src="\images\Image (6).png" className="card-img-top p-3" />
              <div className="card-body">
                <p className="product-name mb-0">Mix Vegetable</p>
                <div className="price-tag fw-bold">$20.00</div>
                <div className="stars text-warning small">★★★★☆</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 product-card">
              <img src="\images\Product Image.png" className="card-img-top p-3" />
              <div className="card-body">
                <p className="product-name mb-0">Cabage</p>
                <div className="price-tag fw-bold">$12.00</div>
                <div className="stars text-warning small">★★★★☆</div>
                <button className="btn btn-light rounded-circle cart-btn">🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT SECTION END */}


      {/* POPULAR CATEGORIES START */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Popular Categories</h2>
        </div>
        {/* first row (six peoducts) */}
        <div className="row g-4">

          {/* Category 1 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1630700490485-66c5a6f879bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlc2glMjBhcHBsZXxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid mb-2" alt="Fresh Fruit" />
              <p className="mb-0 fw-semibold">Fresh Fruit</p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlc2glMjB2ZWdldGFibGVzfGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Vegetables" />
              <p className="mb-0 fw-semibold">Vegetables</p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://plus.unsplash.com/premium_photo-1669130744503-4939a5bcef43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BpY2VzfGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Spices" />
              <p className="mb-0 fw-semibold">Spices</p>
            </div>
          </div>

          {/* Category 4 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1613454320437-0c228c8b1723?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBtZWF0fGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Meat" />
              <p className="mb-0 fw-semibold">Meat</p>
            </div>
          </div>

          {/* Category 5 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1688217170693-e821c6e18d72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25hY2tzfGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Snacks" />
              <p className="mb-0 fw-semibold">Snacks</p>
            </div>
          </div>

          {/* Category 6 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1625865019554-220ea80ea813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmV2ZXJhZ2VzfGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Beverages" />
              <p className="mb-0 fw-semibold">Beverages</p>
            </div>
          </div>


          {/* second row (six products) */}

          {/* Category 7 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1702742803242-2ffd88953909?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFrZXJ5JTIwYW5kJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D" className="img-fluid mb-2" alt="Bread and bakery" />
              <p className="mb-0 fw-semibold">Bread And Bakery</p>
            </div>
          </div>

          {/* Category 8 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1712949048867-e2a8de1128c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFraW5nJTIwbmVlZHN8ZW58MHx8MHx8fDA%3D" className="img-fluid mb-2" alt="Baking Needs" />
              <p className="mb-0 fw-semibold">Baking Needs</p>
            </div>
          </div>

          {/* Category 9 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D" className="img-fluid mb-2" alt="Cooking" />
              <p className="mb-0 fw-semibold">Cooking</p>
            </div>
          </div>

          {/* Category 10 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1563866715647-f42420ed5ccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlhYmV0aWMlMjBmb29kfGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Diabetic food" />
              <p className="mb-0 fw-semibold">Diabetic food</p>
            </div>
          </div>

          {/* Category 11 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://plus.unsplash.com/premium_photo-1664372899205-7cccbe1ad0b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaCUyMGRldGVyZ2VudHxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid mb-2" alt="Dish detergents" />
              <p className="mb-0 fw-semibold">Dish detergents</p>
            </div>
          </div>

          {/* Category 12 */}
          <div className="col-6 col-md-4 col-lg-2">
            <div className="text-center category-card p-3">
              <img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2lsfGVufDB8fDB8fHww" className="img-fluid mb-2" alt="Oil" />
              <p className="mb-0 fw-semibold">Oil</p>
            </div>
          </div>

        </div>
      </div>
      {/* POPULAR CATEGORIES END */}

      {/* BANNER SECTION START */}
      <div className="container py-5">
        <div className="row g-4">
          <h2 className='fw-bold'>Banner Sections</h2>

          {/* Banner 1 */}
          <div className='col-md-4'>
            <div className='banner-card banner-1'>
              <h3>Sale of the Month</h3>
              <p>00 Days : 02 Hours : 18 Min : 46 Sec</p>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
          </div>

          {/* Banner 2 */}
          <div className='col-md-4'>
            <div className='banner-card banner-2'>
              <h3>Low of Meat</h3>
              <p>Starting at $79.99</p>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
          </div>

          {/* Banner 3 */}
          <div className='col-md-4'>
            <div className='banner-card banner-3'>
              <h3>100% Fresh Fruit</h3>
              <p>Up to 45% OFF</p>
              <button className='btn btn-danger'>Shop Now</button>
            </div>
          </div>

          {/* HOT DEALS */}

          <div className="container my-5">
            <h2 className="mb-4">Hot Deals</h2>

            <div className="row g-4">

              {/* LEFT BIG CARD */}
              <div className="col-md-6">
                <div className="hot-card p-4">
                  <span className="badge bg-danger m-2">Sale 50%</span>
                  <span className="badge bg-primary m-2">Best Sale</span>

                  <img
                    src="/images/apple.png"
                    alt="product"
                    className="img-fluid my-3"
                  />

                  <button className="btn btn-success w-100 mb-3">
                    Add to Cart
                  </button>

                  <h5>Chinese cabbage</h5>
                  <h4>$12.00 <span className="text-muted fs-6 text-decoration-line-through">$24.00</span></h4>

                  <p className="text-warning">⭐⭐⭐⭐☆ (524 Feedback)</p>

                  <p className="text-muted">Hurry up! Offer ends in:</p>

                  <div className="d-flex gap-3">
                    <div><strong>01</strong><br />Days</div>
                    <div><strong>23</strong><br />Hours</div>
                    <div><strong>34</strong><br />Min</div>
                    <div><strong>57</strong><br />Sec</div>
                  </div>
                </div>
              </div>

              {/* RIGHT PRODUCTS */}
              <div className="col-md-6">
                <div className="row g-3">

                  {/* Product Card */}
                  {[
                    { name: "Chinese cabbage", price: "$12.00", img: "cabage.png" },
                    { name: "Green Lettuce", price: "$9.00", img: "Image (3).png" },
                    { name: "Eggplant", price: "$34.00", img: "Eggplant.png" },
                    { name: "Fresh Cauliflower", price: "$12.00", img: "Cauliflower.png" },
                    { name: "Green Capsicum", price: "$9.00", img: "Image (4).png" },
                    { name: "Green Chili", price: "$34.00", img: "chili.png" },
                  ].map((item, index) => (
                    <div className="col-6" key={index}>
                      <div className="product-card p-3 text-center">
                        <img
                          src={`/images/${item.img}`}
                          alt={item.name}
                          className="img-fluid mb-2"
                        />
                        <h6>{item.name}</h6>
                        <p className="text-success">{item.price}</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>


          <div className="banner container-fluid d-flex align-items-center">
            <div className="row w-100">
              <div className="col-md-6">
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c"
                  alt="vegetables"
                  className="img-fluid"
                />
              </div>

              <div className="col-md-6 text-white d-flex flex-column justify-content-center">
                <h5>SUMMER SALE</h5>
                <h1><span className='orange'>37%</span> OFF</h1>
                <p>Free shipping and money-back guarantee</p>
                <button className="btn btn-success">Shop Now →</button>
              </div>
            </div>
          </div>


          {/* Featured Products */}
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Popular Products</h2>
            </div>

            {/* ONE ROW WITH 5 PRODUCTS */}
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">

              {/* Product 1 */}
              <div className="col">
                <div className="card h-100 product-card">
                  <img src="/images/apple.png" className="card-img-top p-3" alt="Apple" />
                  <div className="card-body">
                    <p className="product-name mb-0">Green Apple</p>
                    <div className="price-tag fw-bold">$14.99</div>
                    <div className="stars text-warning small">★★★★☆</div>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col">
                <div className="card h-100 product-card">
                  <img src="https://images.unsplash.com/photo-1598002041532-459c3549b714?w=600" className="card-img-top p-3" alt="Malta" />
                  <div className="card-body">
                    <p className="product-name mb-0">Fresh Indian Malta</p>
                    <div className="price-tag fw-bold">$20.00</div>
                    <div className="stars text-warning small">★★★★☆</div>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col">
                <div className="card h-100 product-card">
                  <img src="/images/cabage.png" className="card-img-top p-3" alt="Cabbage" />
                  <div className="card-body">
                    <p className="product-name mb-0">Chinese Cabbage</p>
                    <div className="price-tag fw-bold">$19.00</div>
                    <div className="stars text-warning small">★★★★☆</div>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="col">
                <div className="card h-100 product-card">
                  <img src="/images/Image (3).png" className="card-img-top p-3" alt="Lettuce" />
                  <div className="card-body">
                    <p className="product-name mb-0">Green Lettuce</p>
                    <div className="price-tag fw-bold">$9.00</div>
                    <div className="stars text-warning small">★★★★☆</div>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="col">
                <div className="card h-100 product-card">
                  <img src="/images/Eggplant.png" className="card-img-top p-3" alt="Eggplant" />
                  <div className="card-body">
                    <p className="product-name mb-0">Eggplant</p>
                    <div className="price-tag fw-bold">$34.00</div>
                    <div className="stars text-warning small">★★★★☆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5 latest-news-section">
            <h2 className="text-center mb-4 fw-bold">Latest News</h2>

            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-md-4">
                <div className="card shadow-sm border-0">
                  <div className="position-relative">
                    <img src="\images\cardimage7.png" className="card-img-top" />

                    <div className="date-box">
                      <div>18</div>
                      <small>NOV</small>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="small text-muted">Food • By Admin • 65 Comments</p>
                    <p className="card-text">
                      Curabitur porttitor orci eget neque accumsan venenatis.
                    </p>
                    <a href="#" className="text-success fw-bold">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card shadow-sm border-0">
                  <div className="position-relative">
                    <img src="\images\cardimage8.png" className="card-img-top" />

                    <div className="date-box">
                      <div>29</div>
                      <small>JAN</small>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="small text-muted">Food • By Admin • 65 Comments</p>
                    <p className="card-text">
                      Eget lobortis lorem lacinia. Vivamus pharetra semper.
                    </p>
                    <a href="#" className="text-success fw-bold">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card shadow-sm border-0">
                  <div className="position-relative">
                    <img src="\images\cardimage9.png" className="card-img-top" />

                    <div className="date-box">
                      <div>21</div>
                      <small>FEB</small>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="small text-muted">Food • By Admin • 65 Comments</p>
                    <p className="card-text">
                      Maecenas blandit risus elementum mauris malesuada.
                    </p>
                    <a href="#" className="text-success fw-bold">Read More →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container my-5 testimonial-section">
            <h2 className="fw-bold mb-5">Client Testimonials</h2>

            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-md-4">
                <div className="p-4 shadow-sm bg-white rounded testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p>
                    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                    Phasellus imperdiet elit eu magna dictum.
                  </p>

                  <div className="d-flex align-items-center mt-3">
                    <img src="\images\user1.png" className="user-img" />
                    <div className="ms-3">
                      <h6 className="mb-0">Robert Fox</h6>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="p-4 shadow-sm bg-white rounded testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p>
                    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                    Phasellus imperdiet elit eu magna dictum.
                  </p>

                  <div className="d-flex align-items-center mt-3">
                    <img src="\images\user2.png" className="user-img" />
                    <div className="ms-3">
                      <h6 className="mb-0">Dianne Russell</h6>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="p-4 shadow-sm bg-white rounded testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p>
                    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                    Phasellus imperdiet elit eu magna dictum.
                  </p>

                  <div className="d-flex align-items-center mt-3">
                    <img src="\images\user3.png" className="user-img" />
                    <div className="ms-3">
                      <h6 className="mb-0">Eleanor Pena</h6>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* NEWSLETTER */}
          <div className="newsletter-section py-5">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
              <h5 className="mb-3">Subscribe our Newsletter</h5>

              <div className="d-flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control me-2"
                />
                <button className="btn btn-success">Subscribe</button>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="footer-section text-light pt-5 pb-3">
            <div className="container">
              <div className="row">

                {/* LEFT SIDE */}
                <div className="col-md-3 mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src="\images\logo (2).png" alt="logo" className='footer-logo me-2' />
                    <h4 className="logo">Ecobazar</h4>
                  </div>

                  <p>
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui.
                  </p>
                  <p>0312-888-9768</p>
                  <p>flaraib691@gmail.com</p>
                </div>
                {/* First row (4 column) */}

                {/* COLUMN 1 */}
                <div className="col-md-2 mb-4">
                  <h6>My Account</h6>
                  <ul>
                    <li>My Account</li>
                    <li>Order History</li>
                    <li>Shopping Cart</li>
                    <li>Wishlist</li>
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div className="col-md-2 mb-4">
                  <h6>Helps</h6>
                  <ul>
                    <li>Contact</li>
                    <li>Faqs</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div className="col-md-2 mb-4">
                  <h6>Proxy</h6>
                  <ul>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Track Order</li>
                  </ul>
                </div>

                {/* COLUMN 4 */}
                <div className="col-md-3 mb-4">
                  <h6>Categories</h6>
                  <ul>
                    <li>Fruit & Vegetables</li>
                    <li>Meat & Fish</li>
                    <li>Bread & Bakery</li>
                    <li>Beauty & Health</li>
                  </ul>
                </div>

              </div>

              {/* BOTTOM */}
              <div className="text-center pt-3 border-top">
                <p className="mb-0">
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </p>
              </div>
            </div>
          </footer>


        </div>
      </div>
    </>
  );
}
export default App



