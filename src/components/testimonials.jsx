import React from 'react';
import Testim1 from '../assets/images/avatar-anisha.png';
import Testim2 from '../assets/images/avatar-ali.png';
import Testim3 from '../assets/images/avatar-richard.png';

const TestimonialSection = () => {
  return (  
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className='text-4xl font-bold text-center'>
        What's Different About Manage?
      </h2>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <img src={Testim1} className='w-16 mt-14' alt="" />
          <h5 className='text-lg font-bold'>Anisha Li</h5>
          <p className='text-sm text-darkGrayishBlue'>
            "manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
          </p>
        </div>
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img src={Testim2} className='w-16 mt-14' alt="" />
          <h5 className='text-lg font-bold'>Ali Bravo</h5>
          <p className='text-sm text-darkGrayishBlue'>
            "manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
          </p>
        </div>
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img src={Testim3} className='w-16 mt-14' alt="" />
          <h5 className='text-lg font-bold'>Richard Watts</h5>
          <p className='text-sm text-darkGrayishBlue'>
            "manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
          </p>
        </div>
      </div>
      <div className="my-16">
        <a href="#" className='p-3 px-6 pt-2 text-white rounded-full baseline bg-brightRed hover:bg-brightRedLight'>
            Get Started
          </a>
      </div>
    </div>
  );
}
 
export default TestimonialSection;
