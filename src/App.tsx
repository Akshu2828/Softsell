import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";
import ThemeToggle from "./components/ToggleTheme";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white transition-all">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  );
}

export default App;
