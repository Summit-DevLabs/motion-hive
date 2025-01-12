import Image from 'next/image'
import { client } from '../../../../tina/__generated__/client'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default async function BlogPost({ 
	params,
}: { 
	params: { id: string } 
}) {
	const id = await params.id;
	
	try {
		const response = await client.queries.post({ relativePath: `${id}.mdx` })
		const post = response.data.post

		if (!post) {
			return <div>Post not found</div>
		}

		return (
			<div className="bg-primary px-6 py-32 lg:px-8">
				<div className="mx-auto max-w-3xl text-base/7 text-white">
					<p className="text-base/7 font-semibold metallic-rose-gold">Blog Post</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						{post.title}
					</h1>
					<div className="mt-6 text-xl/8">
						{post.description}
					</div>
					{post.heroImage && (
						<div className="mt-10">
							<Image
								src={post.heroImage}
								alt={post.title}
								width={1200}
								height={600}
								className="rounded-xl"
							/>
						</div>
					)}
					<div className="mt-10 prose prose-invert prose-lg">
						<TinaMarkdown content={post.body} />
					</div>
				</div>
			</div>
		)
	} catch (error) {
		console.error('Error fetching post:', error)
		return <div>Error loading post</div>
	}
}