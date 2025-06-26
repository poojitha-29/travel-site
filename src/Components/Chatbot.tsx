import React, { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const actions = {
    packages: () => {
      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
      setMessage('✨ Redirecting you to Packages…');
    },
    gallery: () => {
      // If you want “Gallery” to scroll to Testimonials, use 'testimonials' here
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      setMessage('📸 Redirecting you to our Gallery section.');
    },
    feedback: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setMessage('✉️ You can leave feedback in the Contact section.');
    },
    query: () => {
      setMessage('📧 Please email us at sangeethaholidayspvtltd@gmail.com.');
    },
    contact: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setMessage('📞 Our phone is +91 8106868686.');
    },
  } as const;

  const handleClick = (key: keyof typeof actions) => {
    actions[key]();
    // close after 3s
    setTimeout(() => {
      setOpen(false);
      setMessage(null);
    }, 3000);
  };

  return (
    <>
      {/* Chat Bubble */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span>Sangeetha Holidays</span>
            <button
              onClick={() => { setOpen(false); setMessage(null); }}
              className="text-xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="p-4 h-60 md:h-72 flex flex-col justify-between">
            {/* Message */}
            <div className="mb-4 text-gray-800">
              {message ?? 'Hi! How can I help you today?'}
            </div>

            {/* Action Buttons */}
            {!message && (
              <div className="grid grid-cols-2 gap-3">
                {([
                  ['packages', 'Packages'],
                  ['gallery',  'Gallery'],
                  ['feedback', 'Feedback'],
                  ['query',    'Query'],
                  ['contact',  'Contact'],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => handleClick(key)}
                    className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-medium p-2 rounded"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
