import { IconProps } from "@/shared/ui/Icon/index";
import Lock from "@/shared/assets/icons/lock.svg?react";
import Email from "@/shared/assets/icons/email.svg?react";
import EyeClose from "@/shared/assets/icons/eye-close.svg?react";
import EyeOpen from "@/shared/assets/icons/eye-open.svg?react";

export const ICON_ELEMENTS = (
  height: IconProps["height"],
  width: IconProps["width"],
) => ({
  lock: <Lock style={{ height, width }} />,
  email: <Email style={{ height, width }} />,
  "eye-close": <EyeClose style={{ height, width }} />,
  "eye-open": <EyeOpen style={{ height, width }} />,
});
