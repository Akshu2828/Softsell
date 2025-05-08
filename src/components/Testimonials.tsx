import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center dark:bg-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow dark:bg-gray-900 dark:shadow-lg"
          >
            <p className="italic mb-4">“{testimonial.message}”</p>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
