import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
                <a class="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/aboutus">
                                About us <span class="sr-only"></span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contactus">
                                Contact us
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link " to="/blog">
                                blog
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/contactdetail/121">
                                detail
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/products">
                                products
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};