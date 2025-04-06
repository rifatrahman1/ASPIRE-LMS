import React from 'react';
import footer from '../assets/footer.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Footer = () => {
      return (
            <div className="bg-[#05235a] relative">
                  {/* Footer Section with Background Image */}
                  <div className="opacity-10 relative bg-cover bg-center h-[800px] mt-59" style={{ backgroundImage: `url(${footer})` }}>
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Footer Content */}
                        <div className="relative z-10 translate-y-46 flex flex-wrap justify-center items-center text-white  py-20 w-8/12 mx-auto">
                              <div className="w-full md:w-1/4 ">
                                    <h4 className="text-xl font-bold">Company</h4>
                                    <div className='text-lg space-y-3 mt-6'>
                                          <p>About Us</p>
                                          <p>Contact us</p>
                                          <p>Blog</p>
                                          <p>Author</p>
                                          <p>Books</p>
                                    </div>
                              </div>
                              <div className="w-full md:w-1/4">
                                    <h4 className="text-xl font-bold">Services</h4>
                                    <div className='text-lg space-y-3 mt-6'>
                                          <p>Shop</p>
                                          <p>Order</p>
                                          <p>Cart</p>
                                          <p>Checkout</p>
                                          <p>Wishlist</p>
                                    </div>
                              </div>
                              <div className="w-full md:w-1/4">
                                    <h4 className="text-xl font-bold">Company</h4>
                                    <div className='text-lg space-y-3 mt-6'>
                                          <p>Login</p>
                                          <p>Register</p>
                                          <p>Typography</p>
                                          <p>404 Page</p>
                                          <p>Ebook Library</p>
                                    </div>
                              </div>
                              <div className="w-full md:w-1/4">
                                    <h4 className="text-xl font-bold">Newsletter</h4>
                                    <div className='text-lg space-y-3 mt-6'>
                                          <p>Aenean amet netus aliquam elit eu, sagittis id natoque id.</p>
                                          <input className='' type="email" name="" placeholder='Your email address' id="" />
                                          <button><FaLongArrowAltRight /></button>
                                    </div>
                              </div>
                        </div>
                        <div className="divider"></div>
                  </div>

                  {/* White Box on Top of Background Image */}
                  <div className="absolute -top-30 left-0 right-0 z-20 flex justify-center">
                        <div className="bg-white rounded-2xl flex flex-col justify-center items-center py-20 w-7/12 mx-auto shadow-xl mt-[-100px]">
                              <h1 className="text-[#001f58] text-6xl">Online Book Fairs 2024</h1>
                              <p className="text-[#545759] text-xl mt-7 text-center">
                                    Our authors are devoted to their writing and are eager to share more
                                    information about their books <br /> with you. After that, you can
                                    Explore anywhere.
                              </p>
                              <button className="bg-[#4285f5] text-white px-8 py-3 rounded-lg text-lg font-semibold mt-12">
                                    REGISTRATION NOW
                              </button>
                        </div>
                  </div>
            </div>

      );
};

export default Footer;