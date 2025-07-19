import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What are the prerequisites for joining the programs?",
      answer:
        "Most of our programs are designed for beginners and don't require prior experience. However, basic computer literacy and enthusiasm to learn are essential. For advanced programs like AI & Machine Learning, some programming knowledge is recommended.",
    },
    {
      question: "How long are the internship programs?",
      answer:
        "Our programs range from 3 to 6 months depending on the specialization. Each program includes theoretical learning, hands-on projects, and real-world internship experience with our partner companies.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes! We offer 100% placement assistance to all our students. Our dedicated placement team works with over 200+ partner companies to help you find the right job opportunity that matches your skills and interests.",
    },
    {
      question: "What is the fee structure for the programs?",
      answer:
        "Our fee structure varies by program and includes flexible payment options. We also offer scholarships for deserving candidates and EMI options to make quality education accessible to everyone.",
    },
    {
      question: "Can I attend classes while working?",
      answer:
        "We offer flexible timing options including evening and weekend batches specifically designed for working professionals. You can choose the schedule that best fits your current commitments.",
    },
    {
      question: "What kind of projects will I work on during the internship?",
      answer:
        "You'll work on real-world projects from our industry partners. These include web applications, mobile apps, data analysis projects, marketing campaigns, and more, depending on your chosen specialization.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes, you'll receive an industry-recognized certificate upon successful completion of your program. Additionally, you'll get internship completion certificates from the companies you work with during the program.",
    },
    {
      question: "What support do you provide after course completion?",
      answer:
        "We provide lifetime career support including resume updates, interview preparation, job referrals, and access to our alumni network. You'll also have access to updated course materials and new technology workshops.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to the most common questions about our programs</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
