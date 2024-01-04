import * as React from 'react';
import Footer from '../components/Footer';
import PersonalCard from '../components/personal-card/PersonalCard';

const Home = () => {
  return (
    <>
      <script
        async
        src="https://umami.dokutsu.xyz/script.js"
        data-website-id="d52d9af1-0c7d-4531-84c6-0b9c2850011f"
      ></script>
      <div className="bg-gray-50 flex flex-col md:h-screen sm:h-full  justify-between">
        <PersonalCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
