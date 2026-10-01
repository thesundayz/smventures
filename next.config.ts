import createMDX from "@next/mdx";
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

// Insights posts (content/insights/*.mdx). Plugins are named as strings for Turbopack;
// remark-frontmatter keeps the frontmatter block out of the rendered post.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);
