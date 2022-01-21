import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';

const Tools = () => {
  return (
    <div className="flex space-x-4 justify-center">
      <div>
        <SiJavascript />
      </div>
      <div>
        <SiReact />
      </div>
      <div>
        <RiVuejsFill />
      </div>      
    </div>
  )
}

export default Tools;