import { IconButton } from "@material-tailwind/react";

export const Iconbutton = ({ children, className }) => {
  return <IconButton className={className}> {children}</IconButton>;
};
