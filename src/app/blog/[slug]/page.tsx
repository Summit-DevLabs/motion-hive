import Image from 'next/image'
import { client } from '../../../../tina/__generated__/client'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

const components = {
	h2: (props: any) => (
		<h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-light-gold" {...props} />
	),
	p: (props: any) => {
		if (typeof props.children === 'object' && props.children.props?.src) {
			return (
				<figure className="my-8">
					<Image
						src={props.children.props.src}
						width={1200}
						height={600}
						alt={props.children.props.alt || ""}
						className="aspect-video rounded-xl bg-gray-50 object-cover"
					/>
					{props.children.props.alt && (
						<figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
							<InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
							{props.children.props.alt}
						</figcaption>
					)}
				</figure>
			);
		}
		return <p className="mt-6 text-white" {...props} />;
	},
	blockquote: (props: any) => (
		<figure className="mt-10 border-l border-indigo-600 pl-9">
			<blockquote className="font-semibold text-white" {...props} />
		</figure>
	),
	ul: (props: any) => (
		<ul role="list" className="mt-8 max-w-xl space-y-8 text-white" {...props} />
	),
	li: (props: any) => (
		<li className="flex gap-x-3">
			<CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-light-gold" />
			<span>{props.children}</span>
		</li>
	),
	hr: () => null,
	img: (props: any) => (
		<Image
			{...props}
			width={1200}
			height={600}
			className="aspect-video rounded-xl bg-gray-50 object-cover"
			alt={props.alt || ""}
			src={props.src || props.url || null}
		/>
	)
};

interface BlogPostParams {
	params: {
		slug: string;
	};
}

export default async function BlogPost({ params }: BlogPostParams) {
	try {
		const { slug } = await params;
		const response = await client.queries.post({ relativePath: `${slug}.mdx` })
		const post = response.data.post

		if (!post) {
			return <div>Post not found</div>
		}

		return (
			<div className="bg-primary px-6 py-32 lg:px-8">
				<div className="mx-auto max-w-3xl text-base/7 text-white">
					<p className="text-base/7 font-semibold text-indigo-600">Blog Post</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight light-gold sm:text-5xl">
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
					<div className="mt-10 max-w-2xl">
						<TinaMarkdown content={post.body} components={components} />
					</div>
				</div>
			</div>
		)
	} catch (error) {
		console.error('Error fetching post:', error)
		return <div>Error loading post</div>
	}
}