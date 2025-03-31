import { RouteObject } from "react-router-dom";
import { IconType } from "@/shared/types";

export type AppRouteObject = RouteObject & {
  meta?: {
    key: string;
    title: string;
    icon: IconType;
    roles?: string[];
    navigation?: boolean;
  };
  children?: AppRouteObject[];
};

export type MenuData = {
  key: string;
  title: string;
  icon: IconType;
  path: string;
  roles?: string[];
};
