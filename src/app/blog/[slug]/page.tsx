import Image from 'next/image'
import { getPostBySlug } from '../../../lib/markdown'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	try {
		const { slug } = params;
		const post = getPostBySlug(slug)
		
		return {
			title: post?.title || 'Blog Post',
			description: post?.description || 'Loading blog post...',
		}
	} catch (error) {
		return {
			title: 'Blog Post',
			description: 'Loading blog post...',
		}
	}
}

// This is a Server Component
export default async function BlogPost({ params }: Props) {
	try {
		const { slug } = params;
		const post = getPostBySlug(slug)

		if (!post) {
			return (
				<div className="bg-primary px-6 py-32 lg:px-8">
					<div className="mx-auto max-w-3xl text-base/7 text-white">
						<p>Post not found</p>
					</div>
				</div>
			)
		}

		return (
			<div className="bg-primary px-6 py-32 lg:px-8">
				<div className="mx-auto max-w-3xl text-base/7 text-white">
					<p className="text-base/7 font-semibold text-indigo-600">Blog Post</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-light-gold sm:text-5xl">
						{post.title}
					</h1>
					<div className="mt-6 text-xl/8">
						{post.description}
					</div>
					{post.heroImage && (
						<figure className="mt-16">
							<Image
								src={post.heroImage}
								alt={post.title}
								width={1200}
								height={600}
								className="aspect-video rounded-xl bg-gray-50 object-cover"
							/>
						</figure>
					)}
					<div className="mt-10 max-w-2xl prose prose-invert">
						<ReactMarkdown
							components={{
								h2: ({ children, ...props }) => (
									<h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-light-gold" {...props}>
										{children}
									</h2>
								),
								p: ({ children, ...props }) => {
									// Check if this paragraph contains an image
									if (typeof children === 'object' && children && 'props' in children && children.props?.src) {
										return (
											<figure className="my-8">
												<Image
													src={children.props.src}
													width={1200}
													height={600}
													alt={children.props.alt || ""}
													className="aspect-video rounded-xl bg-gray-50 object-cover"
												/>
												{children.props.alt && (
													<figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
														<InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
														{children.props.alt}
													</figcaption>
												)}
											</figure>
										);
									}
									return <p className="mt-6 text-white" {...props}>{children}</p>;
								},
								blockquote: ({ children, ...props }) => (
									<figure className="mt-10 border-l border-indigo-600 pl-9">
										<blockquote className="font-semibold text-white" {...props}>
											{children}
										</blockquote>
									</figure>
								),
								ul: ({ children, ...props }) => (
									<ul role="list" className="mt-8 max-w-xl space-y-8 text-white" {...props}>
										{children}
									</ul>
								),
								li: ({ children, ...props }) => (
									<li className="flex gap-x-3" {...props}>
										<CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-light-gold" />
										<span>{children}</span>
									</li>
								),
								hr: ({ ...props }) => <hr {...props} className="hidden" />,
								img: ({ src, alt, ...props }) => (
									<Image
										{...props}
										width={1200}
										height={600}
										className="aspect-video rounded-xl bg-gray-50 object-cover"
										alt={alt || ""}
										src={src || ""}
									/>
								)
							}}
						>
							{post.body}
						</ReactMarkdown>
					</div>
				</div>
			</div>
		)
	} catch (error) {
		return (
			<div className="bg-primary px-6 py-32 lg:px-8">
				<div className="mx-auto max-w-3xl text-base/7 text-white">
					<p>Loading blog post...</p>
				</div>
			</div>
		)
	}
}