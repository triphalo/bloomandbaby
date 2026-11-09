
import React, { useState, useEffect, useRef } from 'react';

interface SignupFormProps {
  onComplete?: () => void;
  submitLabel?: string;
  loadingLabel?: string;
  placeholder?: string;
  className?: string;
  buttonVariant?: 'text' | 'sage';
  tone?: 'dark' | 'light';
}

const SignupForm: React.FC<SignupFormProps> = ({
  onComplete,
  submitLabel = 'Join the interest list',
  loadingLabel = 'One moment...',
  placeholder = 'Email address',
  className = '',
  buttonVariant = 'text',
  tone = 'dark',
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load MailerLite script and set up callback
  useEffect(() => {
    // Set up success callback
    (window as any).ml_webform_success_35951566 = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setLoading(false);
      setSubmitted(true);
      if (onComplete) onComplete();
    };

    // Load MailerLite script if not already loaded
    if (!document.querySelector('script[src*="webforms.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024';
      script.async = true;
      document.body.appendChild(script);
    }

    // Fetch MailerLite form data
    fetch("https://assets.mailerlite.com/jsonp/2049220/forms/177041923383494272/takel")
      .catch(() => {
        // Ignore errors
      });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onComplete]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // Submit to MailerLite endpoint
      const formData = new FormData();
      formData.append('fields[email]', email);
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');

      // Use fetch with no-cors since MailerLite uses JSONP
      await fetch('https://assets.mailerlite.com/jsonp/2049220/forms/177041923383494272/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // MailerLite will call the success callback via JSONP
      // Set a timeout as fallback in case callback doesn't fire
      timeoutRef.current = setTimeout(() => {
        if (!submitted) {
          setLoading(false);
          setSubmitted(true);
          if (onComplete) onComplete();
          timeoutRef.current = null;
        }
      }, 2000);
    } catch (error) {
      // Even if fetch fails, MailerLite might still process it
      // Set timeout to handle success case
      timeoutRef.current = setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        if (onComplete) onComplete();
        timeoutRef.current = null;
      }, 2000);
    }
  };

  if (submitted) {
    return null;
  }

  const inputClass =
    tone === 'light'
      ? 'form-control w-full bg-transparent border-b border-[#8f7556]/60 py-4 text-[#2f271e] focus:outline-none focus:border-[#5c4a35] transition-all duration-700 placeholder:text-[#6d5d4a] font-light text-xl'
      : 'form-control w-full bg-transparent border-b border-stone-300/60 py-4 text-[#fcfbf7] focus:outline-none focus:border-white/80 transition-all duration-700 placeholder:text-stone-400 font-light text-xl';

  const buttonClass =
    buttonVariant === 'sage'
      ? 'w-full md:w-auto self-start inline-flex items-center justify-center gap-4 border border-[#a8af95]/80 bg-[#7d886d] px-7 py-4 text-[#f7f4ec] font-editorial text-2xl transition-colors hover:bg-[#6f7a60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a8af95] disabled:opacity-50 disabled:cursor-not-allowed group'
      : tone === 'light'
      ? 'w-full md:w-auto self-start px-0 py-2 text-[#2f271e] font-editorial text-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center space-x-4 border-b border-transparent hover:border-[#7f684f]'
      : 'w-full md:w-auto self-start px-0 py-2 text-[#fcfbf7] font-editorial text-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center space-x-4 border-b border-transparent hover:border-white/60';

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className={`flex flex-col space-y-6 w-full max-w-sm ml-block-form ${className}`} 
      action="https://assets.mailerlite.com/jsonp/2049220/forms/177041923383494272/subscribe" 
      method="post" 
      target="_blank"
      data-code=""
    >
      <div className="relative group">
        <input
          type="email"
          name="fields[email]"
          className={inputClass}
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          data-inputmask=""
        />
      </div>
      <input type="hidden" name="ml-submit" value="1" />
      <input type="hidden" name="anticsrf" value="true" />
      <button
        type="submit"
        disabled={loading}
        className={buttonClass}
      >
        {loading ? (
          <span className={`flex items-center space-x-3 italic font-light ${tone === 'light' ? 'text-[#2f271e]' : 'text-[#fcfbf7]'}`}>
            <svg className={`animate-spin h-5 w-5 ${tone === 'light' ? 'text-[#6f5b44]' : 'text-stone-200'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{loadingLabel}</span>
          </span>
        ) : (
          <>
            <span className="font-light italic">{submitLabel}</span>
            <span className="group-hover:translate-x-2 transition-transform duration-500 font-serif">→</span>
          </>
        )}
      </button>
    </form>
  );
};

export default SignupForm;
