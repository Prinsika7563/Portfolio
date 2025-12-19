import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    console.log("📨 Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("❌ Please fill all fields!");
      setIsLoading(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "prinsikasingh02@gmail.com",
    };

    console.log("📤 Sending with params:", templateParams);

    try {
      // Initialize EmailJS
      emailjs.init("O5_4XOdtzNj7apXAt");
      console.log("✅ EmailJS Initialized");

      const response = await emailjs.send(
        "service_vrpeow4",      // Your Service ID
        "template_1mphun4",     // Your Template ID
        templateParams
      );

      console.log("✅ Response Status:", response.status);
      console.log("✅ Response Text:", response.text);

      if (response.status === 200) {
        console.log("✅ Message Sent Successfully!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error("❌ Full Error:", err);
      console.error("❌ Error Message:", err.message);
      console.error("❌ Error Status:", err.status);
      
      if (err.status === 401) {
        setError("❌ Invalid EmailJS credentials!");
      } else if (err.status === 404) {
        setError("❌ Service or Template ID not found!");
      } else {
        setError(`❌ Error: ${err.text || err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full bg-black overflow-hidden">
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 md:px-12 py-12 relative overflow-hidden">
        
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 w-full max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xs md:text-sm text-gray-500 font-semibold mb-6 tracking-[3px] uppercase">
              Get in Touch
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              Let's
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Name Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="text-sm md:text-base text-gray-300 font-semibold mb-3 block">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <label className="text-sm md:text-base text-gray-300 font-semibold mb-3 block">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="text-sm md:text-base text-gray-300 font-semibold mb-3 block">
                Your Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none h-32 md:h-40"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
              />
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-center font-semibold"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.05, y: isLoading ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold text-lg rounded-xl transition-all duration-300"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 md:p-6 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-center"
              >
                <p className="font-semibold text-lg">✅ Message Sent!</p>
                <p className="text-sm mt-2">I'll get back to you soon!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
