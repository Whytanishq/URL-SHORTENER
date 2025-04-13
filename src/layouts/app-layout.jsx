import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Github, Instagram, Linkedin } from "lucide-react";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container">
        <Header />
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Tanishq Saraf</h3>
              <p className="mt-2 text-gray-300">
                Full Stack Developer | Open Source Contributor | Building digital experiences
              </p>
            </div>
            
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Whytanishq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tanishq-saraf-04b0a8288" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/whytanishqq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;