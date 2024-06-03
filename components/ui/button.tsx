import {ButtonHTMLAttributes, ReactNode} from "react";

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }:Props) => {
  return <button {...props}>{children}</button>
}