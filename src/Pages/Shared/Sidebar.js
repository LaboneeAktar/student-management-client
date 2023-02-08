import React from "react";
import { FaUserFriends, FaList } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col h-full p-3 w-60">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="/addStudent"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaUserFriends className="text-lg" />
                  <span>Add Student</span>
                </a>
              </li>

              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="..."
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaList className="text-lg" />
                  <span>Manage Students</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="..."
                  className="flex items-center p-2 space-x-2 rounded-md"
                >
                  <HiOutlineLogout className="text-2xl" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
