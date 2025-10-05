import { useState } from "react";
import { Send } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Cycling moon images */}
        <div className="flex justify-center gap-4 mb-12 animate-pulse">
          <div className="text-6xl">🌙</div>
          <div className="text-6xl">🌛</div>
          <div className="text-6xl">🌜</div>
        </div>

        <h2 className="text-5xl font-black mb-12 text-center text-secondary">Get In Touch</h2>
        
        <div className="bg-card border-4 border-foreground rounded-lg p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-4 border-foreground rounded-lg focus:outline-none focus:ring-4 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-4 border-foreground rounded-lg focus:outline-none focus:ring-4 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-4 border-foreground rounded-lg focus:outline-none focus:ring-4 focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground px-6 py-4 rounded-lg font-black text-lg border-4 border-foreground hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
