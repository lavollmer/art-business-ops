import React from "react";

//useState is to create a state variable
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  //useState initial is false (sidebar is closed)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //function to toggle sidebar when icon clicked
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* onClick prop added to icon to call handleToggleSidebar when icon is clicked */}
      <FaBars onClick={handleToggleSidebar} />
      {sidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
