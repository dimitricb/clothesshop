import React from "react";

function Header() {
  return (
    <header class="py-sm-3 pt-3 pb-2" id="home">
      <div class="container">
        <div class="top-w3pvt d-flex">
          <div id="logo">
            <h1>
              {" "}
              <a href="index.html">
                <span class="log-w3pvt">B</span>aggage
              </a>{" "}
              <label class="sub-des">Online Store</label>
            </h1>
          </div>

          <div class="forms ml-auto">
            <a href="login.html" class="btn">
              <span class="fa fa-user-circle-o"></span> Sign In
            </a>
            <a href="register.html" class="btn">
              <span class="fa fa-pencil-square-o"></span> Sign Up
            </a>
          </div>
        </div>
        <div class="nav-top-wthree">
          <nav>
            <label for="drop" class="toggle">
              <span class="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="drop" />
            <ul class="menu">
              <li class="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <label for="drop-2" class="toggle">
                  Dropdown{" "}
                  <span class="fa fa-angle-down" aria-hidden="true"></span>
                </label>
                <a href="#">
                  Dropdown{" "}
                  <span class="fa fa-angle-down" aria-hidden="true"></span>
                </a>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li>
                    <a href="coming.html" class="drop-text">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="about.html" class="drop-text">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="single.html" class="drop-text">
                      Single Page
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="shop.html">Collections</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>

          <div class="search-form ml-auto">
            <div class="form-w3layouts-grid">
              <form action="#" method="post" class="newsletter">
                <input
                  class="search"
                  type="search"
                  placeholder="Search here..."
                  required=""
                />
                <button class="form-control btn" value="">
                  <span class="fa fa-search"></span>
                </button>
              </form>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
