import React from "react";
import img1 from '../../../images/profile.png'

const Header = () => {
  return (
    <div className="border-solid border-b-4 border-clifford pb-2">
      <div className="navbar bg-base-100 p-0">
        <div className="flex-1 justify-items-end ">
          <a className="text-3xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={img1} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
