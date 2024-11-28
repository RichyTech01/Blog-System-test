import "./globals.css";

import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <html lang="en">
          <body
            className={` antialiased max-w-2xl`}
          >
             <header className="bg-blue-500 rounded-[10px] fixed top-0 left-0 w-full z-10 shadow-md">
        <h1 className="text-2xl font-bold mt-6 p-4 italic text-center">
          FarmyApp Blog System Test
        </h1>
      </header>

      <main className="mt-[100px] p-4">{children}</main>
        </body>
    </html>
  );
};

export default Layout;
