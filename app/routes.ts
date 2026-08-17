import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [


    layout("./routes/layout/layout.tsx", [
        index("./routes/home.tsx"),
        route("news", "routes/news.tsx"),
        route("contract", "routes/contract.tsx"),
    ]),

    // ...prefix("concerts", [
    //     index("./concerts/home.tsx"),
    //     route(":city", "./concerts/city.tsx"),
    //     route("trending", "./concerts/trending.tsx"),
    // ]),
] satisfies RouteConfig;
