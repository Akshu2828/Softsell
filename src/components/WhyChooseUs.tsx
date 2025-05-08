import features from "../data/features";

function WhyChooseUs() {
  return (
    <section className="py-16 px-6 text-center dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-8">Why Choose SoftSell?</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded shadow dark:bg-gray-800 dark:shadow-lg"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
