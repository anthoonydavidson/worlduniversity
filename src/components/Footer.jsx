import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    <div className="mr-10">
                        <h2 className="text-2xl font-bold">WorldUniversity</h2>
                        <p className="mt-2 text-gray-400">
                            Explore, learn, and connect with countries around the world.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-orange-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-orange-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/search" className="text-gray-400 hover:text-orange-300">
                                    Countries
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex justify-center md:justify-start gap-4 mt-3">
                            <a href="#" className="text-gray-400 hover:text-orange-300 text-xl">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-300 text-xl">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-300 text-xl">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-300 text-xl">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} WorldUniversity. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
