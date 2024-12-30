import React from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
