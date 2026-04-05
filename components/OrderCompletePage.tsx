import React from 'react';

const OrderCompletePage: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-24 lg:px-48 py-32 text-[#fcfbf7]">
      <div className="max-w-3xl w-full text-center space-y-8">
        <p className="text-[#d9c8b1] uppercase tracking-widest text-xs">Bloom & Baby</p>
        <h1 className="font-editorial text-5xl md:text-7xl text-[#f8f1e6] font-light italic [text-shadow:0_3px_12px_rgba(0,0,0,0.35)]">
          Thanks for booking
        </h1>
        <p className="text-[#efe4d6] text-xl md:text-2xl font-light leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">
          Your place is reserved. You’ll receive a confirmation email with the details shortly.
          If you have any questions before the session, feel free to get in touch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center border border-[#a8af95]/70 bg-[#7d886d] px-6 py-3 font-editorial text-2xl italic text-[#f7f4ec] transition hover:bg-[#6f7a60]"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderCompletePage;
