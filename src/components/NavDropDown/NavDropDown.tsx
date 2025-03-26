import React, { useState } from "react";
import '../NavDropDown/NavDropDown.css'

interface DropdownItem {
  title: string;
  items: string[];
}

const dropdownData: DropdownItem[] = [
  {
    title: "Popular",
    items: ["Bestsellers", "New Releases", "Students & Graduates", "The Outlet", "Value Sets"],
  },
  {
    title: "By Activity",
    items: ["Work", "Travel", "Outdoor", "Campus"],
  },
  {
    title: "By Collection",
    items: ["Tech", "Travel", "Work", "Cinch", "Lite", "Laneway"],
  },
];

const NavDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="nav-title">Featured</span>

      {isOpen && (
        <div className="dropdown-menu">
          {dropdownData.map((section) => (
            <div key={section.title} className="dropdown-section">
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
