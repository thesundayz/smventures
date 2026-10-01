import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // English lives at / with no prefix and Indonesian at /id (app/[lang]). Unprefixed paths are
  // served by the /en pages; /en/... itself redirects to the unprefixed address. There is no
  // redirect based on the browser's language.
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      // Generated Open Graph images keep their /en/... address (Next builds it from the route).
      { source: "/en/:path((?!(?:.*/)?opengraph-image(?:/|$)).+)", destination: "/:path", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      // After files: /api, /_next, icons and public files are matched first.
      afterFiles: [
        { source: "/", destination: "/en" },
        { source: "/:path((?!id(?:/|$)|en(?:/|$)).+)", destination: "/en/:path" },
      ],
      fallback: [],
    };
  },
  // 404 pages for unknown addresses render on request; the header reads content/insights for
  // its Insights item.
  outputFileTracingIncludes: {
    "/[lang]/[...missing]": ["./content/insights/*.mdx"],
  },
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
