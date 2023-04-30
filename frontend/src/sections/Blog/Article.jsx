import React from 'react'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'

export const Article = ({ blog }) => {
  return (
    <Card as="blog">
      <Card.Title href={`/blog/${blog.attributes.slug}`}>
        {blog.attributes.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.attributes.published} decorate>
        {formatDate(blog.attributes?.published)}
      </Card.Eyebrow>
      <Card.Description>{blog.attributes.description}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  )
}
