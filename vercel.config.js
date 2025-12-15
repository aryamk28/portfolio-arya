import { vercelPreset } from "@vercel/react-router/vite";

/** @type {import('@vercel/react-router/vite').Config} */
export default {
    ssr: true,
    presets: [vercelPreset()],
};
