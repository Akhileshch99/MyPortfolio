import React, { useState } from 'react';
import { contactAPI } from '../api/axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await contactAPI.submit(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary py-20 min-h-[80vh]">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="section-title">Get in Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities, collaborations, and interesting projects.
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {success && (
              <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-300 p-4 rounded-lg mb-6 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">Thank you! I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 p-4 rounded-lg mb-6 flex items-center">
                <span className="text-2xl mr-3">❌</span>
                <div>
                  <p className="font-semibold">Failed to send message</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Tell me about your project, idea, or just say hello! 😊"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message ✉️'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-secondary p-8 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">akhileshchaudhary7905@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Greater Noida, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-gray-400">Galgotias University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-secondary p-8 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/akhilesh-chaudhary-243257297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-600 bg-opacity-20 border border-blue-600 rounded-lg hover:bg-blue-600 hover:bg-opacity-30 transition"
                >
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400">Let's connect</p>
                  </div>
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-600 bg-opacity-20 border border-gray-600 rounded-lg hover:bg-gray-600 hover:bg-opacity-30 transition"
                >
                  <span className="text-2xl mr-3">💻</span>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">View my code</p>
                  </div>
                </a>

                <a
                  href="mailto:akhil@example.com"
                  className="flex items-center p-4 bg-green-600 bg-opacity-20 border border-green-600 rounded-lg hover:bg-green-600 hover:bg-opacity-30 transition"
                >
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-400">Send a message</p>
                  </div>
                </a>

                <a
                  href="https://leetcode.com/u/akhileshchaudhary6018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-yellow-600 bg-opacity-20 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:bg-opacity-30 transition"
                >
                  <span className="text-2xl mr-3">💻</span>
                  <div>
                    <p className="font-semibold">LeetCode</p>
                    <p className="text-sm text-gray-400">Coding challenges</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Response Time */}
            <div className="bg-accent bg-opacity-10 border border-accent p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">⚡</span>
                <h3 className="text-lg font-bold">Quick Response</h3>
              </div>
              <p className="text-gray-300">
                I typically respond to messages within 24 hours. For urgent inquiries,
                feel free to connect with me on LinkedIn for faster communication.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-secondary p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Ready to Start a Project?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind, need consultation, or just want to chat about technology,
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/projects" className="btn-primary">View My Work</a>
            <a href="https://linkedin.com/in/akhilesh-chaudhary-243257297" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
