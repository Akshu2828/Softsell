import steps from "../data/steps";

function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center dark:bg-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded shadow dark:bg-gray-900 dark:shadow-lg"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
