import { useState, forwardRef } from "react";
import { Github, Linkedin, Mail, SendHorizontal, X, AlertCircle, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import PropTypes from "prop-types"
import emailjs from '@emailjs/browser';

const Toast = ({ message, type }) => (
    <div
        className={`bg-white rounded-lg h-auto max-w-xs w-full flex items-center py-4 px-5 justify-between border-l-4 ${
        type === 'error' ? 'border-red-500' : 'border-green-500'} shadow-lg animate-in slide-in-from-top duration-300`}
    >
        <div className="flex items-center gap-2">
            {type === 'error' ? (
                <AlertCircle className="w-5 h-5 text-red-500" />
            ) : (
                <CheckCircle className="w-5 h-5 text-green-500" />
            )}
            <p className={`text-sm font-medium ${
                type === 'error' ? 'text-red-900' : 'text-green-900'
            }`}>
                {message}
            </p>
        </div>
        <button 
            onClick={() => toast.dismiss()}
            className={`ml-4 ${
                type === 'error' ? 'text-red-500 hover:text-red-700' : 'text-green-500 hover:text-green-700'
            } transition duration-200`}
        >
            <X className="w-5 h-5"/>
        </button>
    </div>
);

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

const Contact = forwardRef(function Contact(props, ref) {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showToast = (message, type) => {
        toast.custom(() => (
            <Toast message={message} type={type} />
        ));
    };

    const resetForm = () => {
        setEmail("");
        setSubject("");
        setMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!email || !subject || !message) {
            showToast("Please fill in all fields", "error");
            return;
        }

        try {
            setIsSubmitting(true);

            const templateParams = {
                from_name: email,
                subject: subject,
                message: message,
            };

            await emailjs.send(
                'service_dx4nak4',
                'template_abu264x',
                templateParams,
                '_oJhGeuItqvHWzXF0'
            );

            showToast("Message sent successfully!", "success");
            resetForm();

        } catch (error) {
            console.error("Error sending email:", error);
            showToast("Failed to send message. Please try again.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div 
            ref={ref} 
            className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 md:p-8 lg:p-16 xl:p-20 gap-8"
        >
            <section className="w-full lg:w-2/5 space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Let&apos;s Connect
                    </h1>
                    <p className="text-base md:text-lg text-gray-300">
                        Create amazing digital products together. Reach out through the form or my social media.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <div className="space-y-3 md:space-y-4">
                        <h4 className="text-lg md:text-xl font-semibold">Find me on</h4>
                        <div className="space-y-3 md:space-y-4">
                            <a 
                                href="https://github.com/mikemills254" 
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                            >
                                <Github className="w-5 h-5 md:w-6 md:h-6" />
                                <span>Github</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/mills-mike/" 
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                            >
                                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                                <span>Linkedin</span>
                            </a>
                            <a 
                                href="mailto:mikemills930@gmail.com" 
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                            >
                                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full lg:w-3/5">
                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johndoe@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="What's this about?"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={6}
                                className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm md:text-base"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <SendHorizontal className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
});

export default Contact;