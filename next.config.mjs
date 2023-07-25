/** @type {import("next").NextConfig} */
const nextConfiguration = {
  eslint: {
    dirs: ["pages", "components", "src", "cypress"],
  },
  reactStrictMode: true,
};

export default nextConfiguration;
