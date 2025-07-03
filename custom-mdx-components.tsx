// custom-mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { cn } from './lib/utils'; // if you're using className merging utility (optional)

export const customMdxComponents: MDXComponents = {
  p: ({ children, className, ...props }) => (
    <p className={cn("text-base text-secondary dark:text-gray-200 leading-relaxed", className)} {...props}>
      {children}
    </p>
  ),
  h1: ({ children, className, ...props }) => (
    <h1 className={cn("text-3xl font-bold mt-6 mb-4 text-primary dark:text-white", className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2 className={cn("text-2xl font-semibold mt-6 mb-4 text-primary dark:text-white", className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3 className={cn("text-xl font-semibold mt-5 mb-3 text-primary dark:text-white", className)} {...props}>
      {children}
    </h3>
  ),
  ul: ({ children, className, ...props }) => (
    <ul className={cn("list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300", className)} {...props}>
      {children}
    </ul>
  ),
  li: ({ children, className, ...props }) => (
    <li className={cn("ml-2", className)} {...props}>
      {children}
    </li>
  ),
  a: ({ children, className, ...props }) => (
    <a className={cn("text-blue-600 hover:underline dark:text-blue-400", className)} {...props}>
      {children}
    </a>
  ),
};
