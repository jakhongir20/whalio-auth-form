import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr]">
      <Header />
      <div className="relative grid min-h-0 grid-cols-[255px,1fr]">
        <Sidebar />
        <main className="relative min-h-0 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
