import TopNavBar from "~/components/common/topnavbar/topNavbar";

import { Outlet } from "react-router";
import Footer from "~/components/common/footer/footer";
import type { Route } from "./+types/layout";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "RiftWire | JAVIR" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function MainLayOut() {
    return (
        <div className="flex flex-col min-h-screen ">

            <TopNavBar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
