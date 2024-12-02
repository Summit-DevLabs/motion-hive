
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectSections({ projects } : any) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mt-16 space-y-16">
          {projects.map((project: any, i: number) => (
            <div
              key={project.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  i % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4",
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {project.description}
                </p>
              </div>
              <div
                className={classNames(
                  i % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8",
                )}
              >
                <img
                  alt={project.imageAlt}
                  src={project.imageSrc}
                  className="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
