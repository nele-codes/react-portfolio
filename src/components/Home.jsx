import React from 'react';
import avatar from '../avatar.png';

const Home = () => {
  return (
    <main className="relative">
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="rounded-lg shadow-2xl lg:flex p-20 homeSectionBackground">
          <img
            src={avatar}
            className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="avatar"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl mb-4 defaultFontColor">
              Hey there. I'm Nele
            </h1>
            <p className="defaultFontColor text-lg">I'm a developer</p>
          </div>
        </section>
      </div>
    </main>
  )
};

export default Home;