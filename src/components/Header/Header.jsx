import React, { useState } from "react";
import { Link } from "react-router-dom";
//
import "./Header.scss";
import { useDispatch } from "react-redux";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    event.preventDefault();
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movix</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Movies & Shows"
            onChange={(event) => setTerm(event.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Header;
