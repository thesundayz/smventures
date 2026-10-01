// Styles for Insights posts (content/insights/*.mdx), on the design tokens. Required by @next/mdx.
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => <h2 className="mt-10 text-2xl leading-tight font-extrabold tracking-[-0.02em] text-ink" {...props} />,
  h3: (props) => <h3 className="mt-8 text-lg font-bold text-ink" {...props} />,
  p: (props) => <p className="mt-4 text-[17px] leading-[1.7] text-muted" {...props} />,
  a: (props) => <a className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] text-muted marker:text-brand-600" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.7] text-muted marker:text-brand-700" {...props} />,
  strong: (props) => <strong className="font-bold text-ink" {...props} />,
  blockquote: (props) => <blockquote className="mt-6 border-l-4 border-brand-200 pl-5 italic [&>p]:mt-0" {...props} />,
  code: (props) => <code className="rounded bg-surface-sunken px-1.5 py-0.5 font-mono text-[0.9em] text-ink" {...props} />,
  hr: () => <hr className="my-10 border-line-strong" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
