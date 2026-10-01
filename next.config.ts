import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // SMVC logo (Header, Footer)
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
