import React from "react";
import cx from 'classnames';

type Props = {
  className?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({className, children, ...rest}: Props) => {
  return (
    <button {...rest} className={cx('relative flex justify-center items-center p-3 min-w-[3.5rem] bg-primary rounded-md text-white transition-colors duration-300 ease-out hover:bg-teal-800 active:bg-teal-900', className)}>
      {children}
    </button>
  )
}

export default Button;