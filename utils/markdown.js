☝️ uncomment to use markdown content and frontmatter

import matter from 'gray-matter'

export function truncateSummary(content) {
  return content.slice(0, 200).trimEnd()
}

export function reformatDate(fullDate) {
  const date = new Date(fullDate)
  return date.toDateString().slice(4)
}

export function slugify(text) {
  return text
    .replace(/^.*[\\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.')
}

export function getContext(dir, recursive = false, pattern) {
  const ctx = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      const slug = slugify(key)
      const value = values[index]
      // console.log('🚀 ~ file: markdown.js ~ line 34 ~ data ~ value', value)

      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    // console.log('🚀 ~ file: markdown.js ~ line 29 ~ data ~ document', data)
    return data
  })(require.context(dir, recursive, pattern))
  return ctx
}


/**
 * * Usage
 *

 import { getMDContext } from '@/utils';

 export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`);

* * Fix to only retrieve a single page at a time. (current will attempt to get all pages)
  const allPages = getMDContext('../content/pages', false, /\.md$/);
  // console.log(sections)
  const pageSections = allPages[1].frontmatter;
  // const pageSections = allPages.map(page => page.slug === 'home' && page)
  return {
    props: {
      allPages,
      pageSections,
      title: siteConfig.default.title,
      description: siteConfig.default.description
    }
  };
}

 *
 */
