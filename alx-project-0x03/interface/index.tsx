export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

import { Children, ReactNode } from "react";
export interface FooterProps {
  children: ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}