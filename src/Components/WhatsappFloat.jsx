import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
    const whatsappNumber = "254701233944";
    const whatsappMessage = "Hello! I'd like to connect with you.";
    
    const handleClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-white" />
        </button>
    );
};

export default WhatsAppFloat;