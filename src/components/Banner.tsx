import { ButtonProps } from '@/components/Button';
import { variantStyles } from '@/components/Button';
import Link from 'next/link';

interface BannerProps {
  title?: string;
  description?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  descriptionTextColor?: string;
  py?: string;
  my?: string;
  font?: string;
  buttons?: ButtonProps[]; // Use a JSX, with an array of ButtonProp objects: buttons={[{variant: 'solid',color: 'slate',children: 'Learn More',href: '/learn-more',},]}
}


export default function Banner(props: BannerProps) {
  return (
    <div className={`
        bg-${props.backgroundColor} 
        ${props.py ? `py-${props.py}` : 'py-16'}
        px-6 pt-24 pb-0 sm:pt-24 sm:pb-0 lg:px-8`
    }>
      <div className="mx-auto max-w-screen-xl text-center">
        <h2 className={`
            text-${props.headerTextColor}
            ${props.font ? `font-space-${props.font}` : `font-space-grotesk`}
            text-5xl font-semibold tracking-tight text-wrap sm:text-7xl whitespace-nowrap inline-block`}>{props.title}</h2>
        <p className={`
          ${props.font ? `font-space-${props.font}` : `font-space-grotesk`}
          text-${props.descriptionTextColor}
          mt-4 text-wrap text-pretty text-lg font-medium  sm:text-xl/8`}>
          {props.description}
        </p>
        {props.buttons ? (
          <div className="mt-8 flex justify-center space-x-4">
            {props.buttons.map((button, index) => {
              const variant = button.variant || 'solid'
              const color = button.color || 'indigo'
              const className = (variantStyles[variant] as { [key: string]: string })[color]

              if ('href' in button) {
                return (
                  <Link
                    key={index}
                    href={button.href!}
                    className={`inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
                  >
                    {button.children}
                  </Link>
                )
              } else {
                return (
                  <button
                    key={index}
                    type="button"
                    className={`inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
                  >
                    {button.children}
                  </button>
                )
              }
            })}
          </div>
        ) : ''}
      </div>
    </div>
  )
}