import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="spark-footer">
      <div className="spark-section-4 spark-shortened">
        <div className="spark-container-3 spark-centered-content">
          <Link
            to="#"
            className="spark-brand spark-margin-bottom-32px w-inline-block"
          >
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238b1eb19c1555668cadcc_M.jpeg" // Corrected 'assests' to 'assets'
              alt="Coderz Academy Logo"
            />
          </Link>
          <div className="spark-flexed-row-of-links spark-centered-row">
            <Link to="/" className="spark-button-2 spark-light-button w-button">
              Home
            </Link>
            <Link to="/about" className="spark-button-2 spark-light-button w-button">
              About
            </Link>
            <Link to="/course" className="spark-button-2 spark-light-button w-button">
              Course
            </Link>
            <Link to="/contact" className="spark-button-2 spark-light-button w-button">
              Contact
            </Link>
            <Link to="#" className="spark-button-2 spark-light-button w-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="spark-footer-bottom spark-top-border">
        <div className="spark-container-3 w-container">
          <div className="spark-flex-row-2 spark-24px-row-spacing">
            <p className="spark-footer-text spark-foreground-secondary">
              Copyright © {new Date().getFullYear()} Coderz Academy -- Made with
              ADIZ CODEZ
            </p>
            <div className="spark-social-link-row">
              <Link
                aria-label="Twitter"
                to="#"
                className="spark-social-link w-inline-block"
              >
                <div className="spark-social-icon-svg w-embed">
                  {/* Twitter SVG */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3334 2C14.695 2.45032 13.9882 2.79474 13.2401 3.02C12.8386 2.55834 12.305 2.23113 11.7114 2.08262C11.1179 1.93411 10.4931 1.97146 9.92147 2.18964C9.34986 2.40781 8.85904 2.79627 8.5154 3.30248C8.17176 3.80869 7.99188 4.40822 8.00008 5.02V5.68667C6.8285 5.71704 5.6676 5.45721 4.62075 4.9303C3.57391 4.40339 2.67363 3.62576 2.00008 2.66667C2.00008 2.66667 -0.666585 8.66667 5.33341 11.3333C3.96043 12.2653 2.32485 12.7326 0.666748 12.6667C6.66675 16 14.0001 12.6667 14.0001 5C13.9995 4.8143 13.9816 4.62906 13.9467 4.44667C14.6271 3.77566 15.1073 2.92847 15.3334 2V2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="Instagram"
                to="#"
                className="spark-social-link w-inline-block"
              >
                <div className="spark-social-icon-svg w-embed">
                  {/* Instagram SVG */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_462_11051)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.66675 2C3.19399 2 2.00008 3.19391 2.00008 4.66667V11.3333C2.00008 12.8061 3.19399 14 4.66675 14H11.3334C12.8062 14 14.0001 12.8061 14.0001 11.3333V4.66667C14.0001 3.19391 12.8062 2 11.3334 2H4.66675ZM0.666748 4.66667C0.666748 2.45753 2.45761 0.666666 4.66675 0.666666H11.3334C13.5426 0.666666 15.3334 2.45753 15.3334 4.66667V11.3333C15.3334 13.5425 13.5426 15.3333 11.3334 15.3333H4.66675C2.45761 15.3333 0.666748 13.5425 0.666748 11.3333V4.66667Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00008 4.66667C5.79087 4.66667 4.00008 6.45746 4.00008 8.66667C4.00008 10.8759 5.79087 12.6667 8.00008 12.6667C10.2093 12.6667 12.0001 10.8759 12.0001 8.66667C12.0001 6.45746 10.2093 4.66667 8.00008 4.66667ZM8.00008 11.3333C6.89433 11.3333 6.00008 10.4391 6.00008 9.33333C6.00008 8.22758 6.89433 7.33333 8.00008 7.33333C9.10582 7.33333 10.0001 8.22758 10.0001 9.33333C10.0001 10.4391 9.10582 11.3333 8.00008 11.3333Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.6667 3.33333C11.8356 3.33333 12.0001 3.4978 12.0001 3.66667C12.0001 3.83556 11.8356 4.00001 11.6667 4.00001C11.4978 4.00001 11.3334 3.83556 11.3334 3.66667C11.3334 3.4978 11.4978 3.33333 11.6667 3.33333Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_462_11051">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="LinkedIn"
                to="#"
                className="spark-social-link w-inline-block"
              >
                <div className="spark-social-icon-svg w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 5.33333C11.7276 5.33333 12.745 5.75476 13.4952 6.50491C14.2453 7.25505 14.6667 8.27247 14.6667 9.33333V14H12.0001V9.33333C12.0001 8.97971 11.8596 8.64057 11.6096 8.39052C11.3595 8.14048 11.0204 8 10.6667 8C10.3131 8 9.97399 8.14048 9.72394 8.39052C9.47389 8.64057 9.33341 8.97971 9.33341 9.33333V14H6.66675V9.33333C6.66675 8.27247 7.08818 7.25505 7.83832 6.50491C8.58847 5.75476 9.60588 5.33333 10.6667 5.33333V5.33333Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.99992 6H1.33325V14H3.99992V6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2.66659 4C3.40296 4 3.99992 3.40305 3.99992 2.66667C3.99992 1.93029 3.40296 1.33333 2.66659 1.33333C1.93021 1.33333 1.33325 1.93029 1.33325 2.66667C1.33325 3.40305 1.93021 4 2.66659 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>

              <Link
                aria-label="Facebook"
                to="#"
                className="spark-social-link w-inline-block"
              >
                <div className="spark-social-icon-svg w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0001 1.33333H10.0001C9.11603 1.33333 8.26818 1.68452 7.64306 2.30964C7.01794 2.93477 6.66675 3.78261 6.66675 4.66667V6.66667H4.66675V9.33333H6.66675V14.6667H9.33341V9.33333H11.3334L12.0001 6.66667H9.33341V4.66667C9.33341 4.48986 9.40365 4.32029 9.52868 4.19526C9.6537 4.07024 9.82327 4 10.0001 4H12.0001V1.33333Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
