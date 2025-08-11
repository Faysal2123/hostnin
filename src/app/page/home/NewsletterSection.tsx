'use client'
import React, { useState } from 'react';

const NewsletterSection = () => {
  const [frequency, setFrequency] = useState('daily');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-[#fafbfc]">
      <section
        className="w-full py-12 sm:py-16 flex flex-col items-center relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 "
        style={{
          backgroundImage: `url('https://hostnin.com/wp-content/uploads/2022/09/16252080_rm378-02-scaled.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 z-10 relative leading-snug">
          Don&apos;t Want to Miss Anything?
        </h2>

        {/* Frequency Options */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-white text-sm sm:text-base font-medium z-10 relative">
          {['daily', 'weekly', 'monthly'].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="newsletter-frequency"
                value={option}
                checked={frequency === option}
                onChange={() => setFrequency(option)}
                className="accent-blue-500"
              />
              {option.charAt(0).toUpperCase() + option.slice(1)} Newsletter
            </label>
          ))}
        </div>

        {/* Email Input & Subscribe Button */}
        <form
          className="flex flex-row flex-wrap w-full max-w-3xl rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur px-2 py-2 gap-2 z-10 relative"
          onSubmit={(e) => {
            e.preventDefault();
            // handle subscribe
          }}
        >
          <div className="flex items-center justify-center sm:pl-4">
            <svg
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              className="text-white/70"
            >
              <path
                d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m3 7 8.293 6.293a1 1 0 0 0 1.414 0L21 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 min-w-[150px] bg-transparent outline-none px-3 py-3 text-white placeholder-white/70 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 sm:px-6 md:py-3 rounded-xl sm:rounded-full transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewsletterSection;
