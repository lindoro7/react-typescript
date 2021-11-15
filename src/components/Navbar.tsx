import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-3">
        <a href="/" className="brand-logo left ml5 ">React+TypeScript</a>
        <ul id="nav-mobile" className="mr5 right hide-on-med-and-down">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        </ul>
      </div>
    </nav>
  )
}

