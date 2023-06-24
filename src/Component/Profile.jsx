import React from 'react'
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
export const Profile = () => {
  let history = useHistory();
  if (!Cookies.get("token")) {
    history.push("/login");
  }
  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/login");
  };
  return (
    <>
    <div className="navbar bg-emerald-500">
    <div className="navbar-start">
      <label
        tabIndex={0}
        className="md:hidden btn btn-ghost btn-circle drawer-button "
        htmlFor="sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
    </div>

    <div className="navbar-center">
      <p className="font-bold text-white normal-case text-xl">ReactJob.</p>
    </div>
    <div className="navbar-end">
      <Link to="/" className="btn btn-square btn-ghost text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Link>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-emerald-500 rounded-box w-52"
        >
          <li>
            <Link to="/dashboard/profile"className="justify-between">
              Profile
              
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile ">
    <input id="sidebar" type="checkbox" className="drawer-toggle" />
    <div className="flex flex-col items-center   drawer-content">


    <div className="container min-h-screen bg-gray-50 rounded mx-auto my-5 p-5">
    <div className="md:flex no-wrap md:-mx-2 ">
      

      <div className="w-full md:w-full mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span clas="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="tracking-wide">Profile</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-4 text-sm">

            <div className="w-full md:mx-2">
        <div className="bg-white p-3 border-t-4 border-green-400">
          <div className="image overflow-hidden">
            <img
              className="h-auto w-full mx-auto"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </div>
          
        </div>
      </div>
      <div>
      <div className="grid grid-cols-2 col-span-3">
                <div className="px-4 py-2 font-semibold">Nama </div>
                <div className="px-4 py-2">Affan Abdullah Izzuddin</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">affana959@gmail.com</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Sistem Operasi</div>
                <div className="px-4 py-2">Windows</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gitlab</div>
                <div className="px-4 py-2">Affan-97</div>
              </div>

              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Telegram</div>
                <div className="px-4 py-2">
                Affan
                </div>
              </div>
             
      </div>
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
    
  </div>
        <div className="drawer-side rounded-md">
          <label htmlFor="sidebar" className="drawer-overlay" />
          <ul className="menu  p-3 border  rounded-md overflow-y-auto w-80 bg-base-100 text-base-content">
            <li className="menu-title">
              <span>Menu</span>
            </li>
            <li>
              <Link to="/dashboard/list-job-vacancy" className="focus:bg-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Data Table
              </Link>
            </li>
            <li>
              <Link to="/dashboard/list-job-vacancy/create"  className="focus:bg-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Input Data
              </Link>
            </li>
            <li>
              <Link to="/dashboard/change-password"  className="focus:bg-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Change Password
              </Link>
            </li>
            <li>
              <a onClick={handleLogout}  className="focus:bg-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Me</p>
        </div>
      </footer>
      </>
  )
}
