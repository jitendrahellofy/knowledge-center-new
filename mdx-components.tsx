import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Card from './components/Card';
import { NewIcon } from './constant/icons/icons';
import NoteInfo from './components/ui/NoteInfo';
import DefaultVector from './components/DefaultVector';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { customMdxComponents } from './custom-mdx-components';
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...customMdxComponents,
    Card,
    NewIcon,   
    NoteInfo,  
    Accordion,
    Accordions,
    DefaultVector,        
    ...components,
  }
}