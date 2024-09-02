import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-extrabold tracking-wide">Uday</h1>
          <p className="text-lg text-blue-200">Cloud and DevOps Engineer</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
          <p className="text-xl leading-relaxed">
            I am a Cloud & DevOps Engineer with expertise in Cloud Architecture Design, providing scalable and secure solutions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Azure DevOps</li>
            <li>Jenkins</li>
            <li>AWS</li>
            <li>Terraform</li>
            <li>Grafana</li>
            <li>Data Structure and Algorithms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">Project 1</h3>
              <p>A brief description of your first project goes here.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">Project 2</h3>
              <p>A brief description of your second project goes here.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 Uday. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/udaybuilds" className="hover:text-gray-400 transform transition-transform hover:scale-110">
              <GithubIcon size={24} />
            </a>
            <a href="www.linkedin.com/in/uday-u-08956617b" className="hover:text-gray-400 transform transition-transform hover:scale-110">
              <LinkedinIcon size={24} />
            </a>
            <a href="udaysrivastava0@gmail.com" className="hover:text-gray-400 transform transition-transform hover:scale-110">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
