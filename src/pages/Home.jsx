// src/pages/Home.jsx

import Hero from '../components/Hero'; // Correct import path
import FeatureCard from '../components/FeatureCard'; // Example of another component
import NoticeBoard from '../components/NoticeBoard'; // Example of another component

export default function Home() {
  return (
    <main>
      <Hero /> {/* This will now display your carousel */}

      <div className="mt-8 px-4">
        <h2 className="text-2xl font-bold">Welcome to A. P. Shah Institute of Technology</h2>
        <p className="mt-2 text-gray-600">This is the homepage with latest updates.</p>
        
        {/* You can render your other components below */}
        {/* <NoticeBoard /> */}
        {/* <FeatureCard /> */}
      </div>
    </main>
  );
}
