import { serve } from "bun";

 Bun.serve({
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            return new Response("Hello Arnab cyclone", { status: 200 })
            
        }else if (url.pathname === "/Arnab-Cyclone") {
            return new Response("Thanks for visiting Arnab cyclone,its happy to have you here", { status: 200 })
        }else {
            return new Response("Page not found", { status: 404 })
        }
    },
    port: 3000,
    hostname: "127.0.0.1"

});