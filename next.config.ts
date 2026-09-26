import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Hero slide photos (app/data/ventures.ts)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "?w=1400&q=80",
      },
      // SMVC logo (Navbar, Footer)
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/ddr9t2l0o/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
