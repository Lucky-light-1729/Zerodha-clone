import React from 'react';
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="mb-4 font-semibold">{title}</h3>
    <ul className="space-y-3 text-sm">
      {links.map(([label, to]) => (
        <li key={label}>
          <Link to={to} className="transition-colors hover:text-gray-900 hover:underline">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;