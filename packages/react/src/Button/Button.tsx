import React from 'react';

export interface IButtonProps {
  children: React.ReactNode;
}
export const Button = (props: IButtonProps) => {
  return <button>{props.children}</button>;
};

export default Button;
