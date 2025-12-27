import { useEffect } from 'react'

const SITE_URL = 'https://www.gerardo-mena.com'
const SITE_NAME = 'Gerardo Mena'
const DEFAULT_IMAGE = '/social-media.webp'

const ensureAbsoluteUrl = (value) => {
  if (!value) return undefined
  if (/^https?:\/\//i.test(value)) return value
  if (value.startsWith('//')) return `https:${value}`
  const normalizedBase = SITE_URL.replace(/\/$/, '')
  const normalizedPath = value.startsWith('/') ? value : `/${value}`
  return `${normalizedBase}${normalizedPath}`
}

const setMetaTag = (attribute, key, content) => {
  if (!key) return
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content ?? '')
}

const removeMetaTag = (attribute, key) => {
  const tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (tag) {
    document.head.removeChild(tag)
  }
}

const setCanonicalLink = (href) => {
  if (!href) return
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function usePageMetadata(options) {
  const {
    title,
    description,
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime
  } = options || {}

  useEffect(() => {
    if (!options) return

    const pageTitle = title?.trim()
    const pageDescription = description?.trim()
    const absoluteImage = ensureAbsoluteUrl(image || DEFAULT_IMAGE)
    const pageUrl = ensureAbsoluteUrl(
      url || (typeof window !== 'undefined' ? window.location.pathname : '/')
    )

    if (pageTitle) {
      document.title = pageTitle
    }

    if (pageUrl) {
      setCanonicalLink(pageUrl)
    }

    setMetaTag('name', 'description', pageDescription || '')

    setMetaTag('property', 'og:title', pageTitle || SITE_NAME)
    setMetaTag('property', 'og:description', pageDescription || '')
    if (absoluteImage) {
      setMetaTag('property', 'og:image', absoluteImage)
      setMetaTag('property', 'og:image:secure_url', absoluteImage)
      setMetaTag('property', 'og:image:alt', pageTitle || SITE_NAME)
    }
    if (pageUrl) {
      setMetaTag('property', 'og:url', pageUrl)
    }
    setMetaTag('property', 'og:type', type)
    setMetaTag('property', 'og:site_name', SITE_NAME)

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', pageTitle || SITE_NAME)
    setMetaTag('name', 'twitter:description', pageDescription || '')
    if (absoluteImage) {
      setMetaTag('name', 'twitter:image', absoluteImage)
      setMetaTag('name', 'twitter:image:alt', pageTitle || SITE_NAME)
    }
    if (pageUrl) {
      setMetaTag('name', 'twitter:url', pageUrl)
    }

    if (type === 'article') {
      if (publishedTime) {
        setMetaTag('property', 'article:published_time', publishedTime)
      }
      if (modifiedTime) {
        setMetaTag('property', 'article:modified_time', modifiedTime)
      }
    } else {
      removeMetaTag('property', 'article:published_time')
      removeMetaTag('property', 'article:modified_time')
    }
  }, [title, description, image, url, type, publishedTime, modifiedTime])
}
