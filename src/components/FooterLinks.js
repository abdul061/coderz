import React from 'react'
import { Link } from 'react-router-dom'

function FooterLinks() {
  return (
    
    <div className="spark-footer-bottom spark-top-border">
    <div className="spark-container-3 w-container">
      <div className="spark-flex-row-2 spark-24px-row-spacing">
        <p className="spark-footer-text spark-foreground-secondary">
          Copyright © {new Date().getFullYear()} Coderz Academy -- Made with
          ADIZ CODEZ
        </p>
        <div className="spark-social-link-row">

          <Link
            aria-label="Instagram"
            to="https://www.instagram.com/coderz_academy/"
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
            aria-label="Facebook"
            to="https://www.facebook.com/coderzacademy"
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
  )
}

export default FooterLinks