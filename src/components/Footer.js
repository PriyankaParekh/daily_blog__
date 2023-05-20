import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="py-3 my-4 border-top">
        <div>
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ><span className="text-muted">© 2023 Blog, Inc</span></Link>
        </div>
      </footer>
    </div>
  );
}
