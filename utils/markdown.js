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
