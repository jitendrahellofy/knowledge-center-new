import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Card from './components/Card';
import { NewIcon } from './constant/icons/icons';
import { customMdxComponents } from './custom-mdx-components';
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...customMdxComponents,
    Card,
    NewIcon,             
    ...components,
  }
}