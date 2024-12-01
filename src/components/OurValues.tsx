import { CogIcon } from "@/images/icons/CogIcon"

export default function OurValues() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-secondary sm:text-5xl">
            All-in-one platform
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <div className="flex flex-row">
                <div className="w-24 p-2">
                  <feature.icon />
                </div>
                <dd className="mt-1 text-gray-600">
                  <span className="font-semibold text-gray-900">{feature.name}</span> {feature.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}


const features = [
  {
    name: 'Be world-class.',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
    icon: CogIcon,
  },
  {
    name: 'Take responsibility.',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
    icon: CogIcon,
  },
  {
    name: 'Be supportive.',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
    icon: CogIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    icon: CogIcon,
  },
  {
    name: 'Share everything you know.',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    icon: CogIcon,
  },
  {
    name: 'Enjoy downtime.',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    icon: CogIcon,
  },
]