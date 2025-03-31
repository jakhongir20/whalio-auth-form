import { useState } from "react";

type ReturnValues = {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
};

export const useToggle = (defaultValue?: boolean): ReturnValues => {
  const [isOpen, setOpen] = useState(defaultValue ?? false);

  const onToggle = () => setOpen((prev) => !prev);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return { isOpen, onToggle, onOpen, onClose };
};
