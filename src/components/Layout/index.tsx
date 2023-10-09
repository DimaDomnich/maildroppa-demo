import React from 'react';

type Props = {
  children: React.ReactNode
};

const Layout = ({children}: Props) => {
  return (
    <div className="h-screen w-full gap-4 flex-col bg-[#E7E7E7] flex justify-center items-center">
      {children}
    </div>
  )
}

export default Layout