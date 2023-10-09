import React from 'react'
import cx from 'classnames';

type Props = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({className, ...rest}: Props) => {
  return (
    <input className={cx('px-3 py-1 outline rounded-md outline-transparent focus:outline-primary transition-opacity duration-300 ease-out', className)} {...rest} />
  )
}

export default InputField;