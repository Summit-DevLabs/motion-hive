import Banner from '@/components/Banner'

export default function FAQPage() {
  const faqs = [
    {
      question: "What is CG Product Rendering?",
      answer: "CG Product Rendering is a process that uses computer-generated imagery (CGI) to create realistic or stylized visual representations of products. It's commonly used in marketing, advertising, and e-commerce to showcase products before physical manufacturing or to create high-quality promotional materials. The process includes 3D modeling, texturing, lighting setup, camera positioning, and post-production to create stunning visual representations."
    },
    {
      question: "What are the benefits of CG Product Rendering?",
      answer: "CG Product Rendering offers several key benefits: cost-effectiveness by reducing the need for physical prototypes, flexibility to make rapid design changes, high-quality visualization capabilities, and time-saving advantages in the production cycle. It's particularly valuable for showcasing products that haven't been physically manufactured yet."
    },
    {
      question: "What is Product Lifestyle Imagery?",
      answer: "Product Lifestyle Imagery shows products in real-world contexts, demonstrating how they can be used in everyday life. It creates emotional connections with audiences by placing products in relatable settings, often featuring real people using the products. This type of imagery is particularly effective for e-commerce, advertising campaigns, and social media marketing."
    },
    {
      question: "What's the difference between Product Photography and CGI Rendering?",
      answer: "Product Photography captures real-world images of physical products using traditional photography techniques, offering true-to-life authenticity. CGI Rendering creates digital representations using 3D models, providing more control, flexibility, and cost-effectiveness for multiple variations. Each method has its strengths: photography is ideal for physical products where authenticity is key, while CGI is perfect for digital products or when you need creative visualizations."
    },
    {
      question: "What is Technical Rendering?",
      answer: "Technical Rendering creates precise visual representations of products or designs, focusing on accuracy and functionality rather than aesthetics. It's commonly used in engineering, architecture, and industrial design to communicate complex technical details, often including exploded views, cross-sections, and detailed specifications. This type of rendering is essential for design validation, documentation, and manufacturing processes."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across multiple industries including engineering, product design, architecture, automotive, aerospace, medical devices, and consumer electronics. Our services are adaptable to various needs, from technical documentation to marketing materials."
    },
    {
      question: "How long does a typical rendering project take?",
      answer: "Project timelines vary depending on the complexity and scope of the work. Simple product renderings might take a few days, while complex technical renderings or large-scale lifestyle imagery projects could take several weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
    },
    {
      question: "What file formats do you work with?",
      answer: "We work with a wide range of file formats including CAD files, 3D modeling software formats, and standard image formats. We can also provide deliverables in various formats suitable for different applications, from web use to high-resolution print materials."
    }
  ]

  return (
    <>
      <Banner
        title="FREQUENTLY ASKED QUESTIONS"
        description="Find answers to common questions about our services"
        backgroundColor="primary"
        headerTextColor="white"
        descriptionTextColor="white"
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 