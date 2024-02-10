'use client';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import { motion } from 'framer-motion';

const NavItem = [
  { id: 'highlights', title: 'HIGHLIGHTS' },
  { id: 'showrooms', title: 'SHOWROOMS' },
  { id: 'accessories', title: 'ACCESSORIES' },
  { id: 'specs', title: 'SPECS' },
];

function Navbar() {
  const [expand, setExpand] = useState(false);
  const [hovered, setHovered] = useState('highlights');
  return (
    <div className="px-7 pt-4 pb-1 sticky top-0 left-0 w-full bg-opacity-70 bg-white">
      <div className="flex items-center justify-between pb-2 border-b">
        <h1 className="font-extrabold text-xl">SAMSUNG</h1>
        <div className="flex items-center justify-center gap-5 relative">
          <h1 className="font-bold text-xl">Galaxy Z Flip4</h1>
          <button onClick={() => setExpand(!expand)}>
            <IoIosArrowDown
              className={`${expand ? 'rotate-180' : ''} duration-200`}
              size={30}
            />
          </button>
          <div
            className={` ${
              expand ? 'h-[182px] p-5' : 'h-0 p-0'
            } overflow-hidden absolute top-10 duration-200 z-10 bg-white  rounded-lg shadow-lg space-y-2 `}
          >
            <p>Galaxy Z Flip4</p>
            <p>Galaxy Z Fold4</p>
            <p>Galaxy Watch5</p>
            <p>Galaxy Watch5 Pro</p>
            <p>Galaxy Buds2 Pro</p>
          </div>
        </div>
        <RxHamburgerMenu size={25} />
      </div>
      <div className="flex items-center justify-center  font-semibold text-sm ">
        {NavItem.map((val) => (
          <h1 key={val.id} className="cursor-pointer">
            <motion.div
              className={`relative px-4  py-2 `}
              onHoverStart={() => setHovered(val.id)}
              onHoverEnd={() => setHovered('highlights')}
            >
              {hovered === val.id && (
                <motion.span
                  layoutId="nav-item"
                  className={`absolute  inset-0 border-t-4 mx-4 border-t-cyan-400`}
                  transition={{
                    type: 'spring',
                    duration: 0.6,
                  }}
                />
              )}
              <span>{val.title}</span>
            </motion.div>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
