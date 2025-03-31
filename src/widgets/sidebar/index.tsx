import { FC } from "react";
import { NavLink } from "react-router-dom";
import { pagesRoutes } from "@/app/routes";
import { cn } from "@/shared/utils";
import { AppRouteObject, MenuData } from "@/shared/types";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
}

function generateSidebarRoutes(routes: AppRouteObject[]): MenuData[] {
  const sidebarRoutes: MenuData[] = [];

  routes.forEach((route: AppRouteObject) => {
    if (route.meta) {
      sidebarRoutes.push({
        key: route.meta.key,
        title: route.meta.title,
        icon: route.meta.icon,
        path: route.path as string,
      });
    }
  });

  return sidebarRoutes;
}

export const Sidebar: FC<Props> = ({ className }) => {
  const sidebarRoutes = generateSidebarRoutes(pagesRoutes);

  return (
    <div className={cn(className)}>
      <ul className="space-y-0.5 p-2">
        {sidebarRoutes.map((item: MenuData) => {
          return (
            <li key={item.key}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    isActive ? "bg-[#E6DBF6]" : "",
                    "group flex items-center gap-2 rounded-md px-2 py-1.5 text-black-100 transition hover:bg-[#E6DBF6] hover:text-violet",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      name={item.icon}
                      color={cn(
                        isActive ? "text-violet" : "text-gray-500",
                        "group-hover:!text-violet",
                      )}
                    />
                    <span
                      className={cn(
                        isActive ? "text-violet" : "text-black-100",
                        "group-hover:!text-violet",
                      )}
                    >
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
