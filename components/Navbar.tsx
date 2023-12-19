 
import React from 'react';

const navPages = [
  { title: 'Home', link: '/' },
  { title: 'Artists', link: '/artists' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
];

const Navbar = () => {
  return (
    <div className="  top-0 bg-white   z-50">
      <div className="mx-auto p-5 pl-5 pt-7 pb-2">
        <div className="flex flex-row justify-between">
          <div>
            <a href="/" className="text-3xl">
              WhiteSpace
            </a>
          </div>
          <ul className="text-xl flex flex-row gap-x-10">
            {navPages.map((page, index) => (
              <li key={index}>
                <a href={page.link}>{page.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;