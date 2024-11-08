import React from 'react';

const Navbar = () => {
  return (
    <div className="h-[60px] gap-2 bg-white my-4 rounded-lg flex items-center justify-center text-xl font-medium">
        <img src="/firebase.svg" alt="firebase.svg" />
        <h1>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar;