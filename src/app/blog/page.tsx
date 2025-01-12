import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../../tina/__generated__/client'

export default async function BlogIndex() {
  const postsResponse = await client.queries.postConnection()
  const posts = postsResponse.data.postConnection.edges?.map((edge) => edge?.node) || []

  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Learn about our latest projects, technologies, and company updates.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => post! && (
            <article key={post._sys.filename} className="flex flex-col items-start">
              {post.heroImage && (
                <div className="relative w-full">
                  <Image
                    src={post.heroImage}
                    alt={post.title || ''}
                    width={800}
                    height={400}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
              )}
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-300">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <Link href={`/blog/${post._sys.filename.replace('.mdx', '')}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
