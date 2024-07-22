import React from "react";

function Nav_Ullist({ req, name }) {
  return (
    <li class="nav-item">
      <a class="nav-link text-white mx-3" aria-current="page" href={req}>{name}</a>
    </li>
  );
}

export default Nav_Ullist;
