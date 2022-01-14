import React from 'react'


const MobileMenuIcon = ({showMobileMenu,setShowMobileMenu}) => {
    return (
      <div
        className="lg:hidden cursor-pointer flex flex-col items-end relative"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <div
          className={`h-1 bg-primary rounded-sm transform mb-2 ${
            showMobileMenu
              ? "rotate-45 w-7 translate-y-3"
              : "rotate-0 w-7 translate-y-0"
          } transition duration-500`}
        ></div>
        <div
          className={`h-1 bg-primary rounded-sm w-5 mb-2 transform ${
            showMobileMenu ? "opacity-0" : "opacity-1"
          } transition duration-500`}
        ></div>
        <div
          className={`h-1 bg-primary rounded-sm transform ${
            showMobileMenu
              ? "-rotate-45 w-7 -translate-y-3"
              : "rotate-0 w-7 translate-y-0"
          } transition duration-500`}
        ></div>

      
      </div>
    );
}

export default MobileMenuIcon
