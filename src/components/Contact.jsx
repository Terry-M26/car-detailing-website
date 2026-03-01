import { Phone, Mail, MessageCircle, Instagram, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
    color: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/1234567890',
    color: 'bg-green-500/10 text-green-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@herodetailing.com',
    href: 'mailto:hello@herodetailing.com',
    color: 'bg-yellow-500/10 text-yellow-400',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@herocardetailing',
    href: 'https://instagram.com/herocardetailing',
    color: 'bg-pink-500/10 text-pink-400',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-4">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to give your car the treatment it deserves? Reach out directly — we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact methods */}
          <div className="space-y-5">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 bg-gray-800/80 rounded-2xl hover:bg-gray-800 transition-colors group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${m.color}`}
                >
                  <m.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-100 group-hover:text-yellow-400 transition-colors">
                    {m.label}
                  </p>
                  <p className="text-gray-400 text-sm">{m.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 pt-4 text-gray-400">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>Serving Your City and nearby areas</span>
            </div>
          </div>

          {/* Google Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[320px]">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
