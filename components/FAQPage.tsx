import React, { useState } from 'react';

type FAQItem = {
  question: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
};

const faqItems: FAQItem[] = [
  {
    question: 'What is Bloom & Baby?',
    paragraphs: [
      'We offer calming gardening sessions focused on maternal wellbeing, connection with nature, and simple, achievable tasks while babies explore safely by your side.',
      'Our sessions are as much about nurturing mums as they are about introducing babies to nature.',
    ],
  },
  {
    question: 'When do sessions run?',
    intro: 'Spring Term 2 sessions are running:',
    bullets: ['Mondays and Tuesdays', '10:30 to 12:00'],
    paragraphs: [
      'To begin with, each session is limited to 6 mums to keep the space calm and supportive.',
      'Information about future terms will be released closer to the time.',
    ],
  },
  {
    question: 'Where do the sessions take place?',
    paragraphs: [
      'Sessions take place in Withyditch near Bath.',
      "Location details and directions are shared after you reserve your place so it is easy to find us on the day.",
      'We use an outdoor garden space where possible, with cover or indoor alternatives for wet or unsuitable weather.',
    ],
  },
  {
    question: 'How much does it cost?',
    bullets: [
      '£20 for a drop-in session',
      '£72 for a 4 Session bundle',
      '£87.50 for a 5 Session bundle',
      '£102 for a 6 Session bundle',
    ],
    paragraphs: ['You can attend single sessions or commit to the term. Both options are welcome.'],
  },
  {
    question: 'What is included in the full term programme?',
    intro: 'The 6-week Bloom & Baby programme includes:',
    bullets: [
      'Weekly themed wellbeing and gardening sessions.',
      'Sowing and planting according to the season, with continuity and progression for plants through the term.',
      'Baby sensory nature play.',
      'Take-home plants or creations every week.',
      'A supportive group of mums.',
      'A small celebration at the end of the programme.',
    ],
  },
  {
    question: 'Who are the sessions for?',
    intro: 'Bloom & Baby sessions are for:',
    bullets: [
      'Mothers with babies aged 0-9 months: if your baby is content resting in a sling, pram, or bouncy chair, or a mix of all three, this space is perfect for you. There is also the option to pop them into a play pen with sensory toys if they need to wriggle.',
      'New mums on maternity leave.',
      'Mothers looking for calm, connection, and community.',
    ],
  },
  {
    question: 'Do I need gardening experience?',
    paragraphs: [
      'Not at all.',
      'All activities are beginner-friendly, guided, and focused on enjoyment rather than perfection. The aim is to leave feeling calmer and more confident.',
    ],
  },
  {
    question: 'What happens in a typical session?',
    intro: 'Each 1.5-hour session follows a gentle, predictable rhythm:',
    bullets: [
      'Welcome and settling time (with refreshment).',
      'Short grounding or mindful moment.',
      'A simple gardening activity.',
      'Baby-friendly nature sensory play.',
      'A take-home plant or creation.',
    ],
    paragraphs: ['You will always leave with something you have made and, hopefully, feeling a little lighter.'],
  },
  {
    question: 'What if my baby cries, feeds, sleeps, or needs me?',
    paragraphs: [
      'That is completely expected and completely welcome.',
      'Babies can be fed, changed, worn, soothed, or left to explore at any point during the session. There is no pressure to participate constantly. Do what you can, when you can, and I am always on hand to help too.',
      'Bloom & Baby is a space where the realities of motherhood are welcomed, not managed.',
    ],
  },
  {
    question: 'Are the sessions safe for babies?',
    intro: 'Yes. Baby safety is a top priority:',
    bullets: [
      'Only non-toxic plants and materials are used.',
      'No chemicals, fertilisers, or sharp tools.',
      'Baby sensory items are natural and safe.',
      "Babies remain under their parent's supervision at all times.",
      'Hand wipes, seating, shade, and mats are provided.',
    ],
  },
  {
    question: 'What should I bring?',
    intro: 'Very little:',
    bullets: [
      'Yourself.',
      'Your baby (and all their accessories).',
      'Weather-appropriate clothing (old clothes, warm layers, sun hats, etc.).',
    ],
    paragraphs: [
      'Everything else, including tools, materials, plants, and refreshments, is provided.',
      'There is also a sheltered place to change nappies, plus handwashing and toilet facilities.',
    ],
  },
  {
    question: 'Can I try a session before committing?',
    paragraphs: [
      'Yes. Many mums start with a single drop-in session to see if it feels right for them.',
      "If you decide afterwards that you would like to continue for the full term, I can offer a special rate so you only pay for the remaining sessions in that term.",
    ],
  },
  {
    question: 'What is your cancellation policy?',
    bullets: [
      "Please give at least 24 hours' notice if you cannot attend a session.",
      'Single sessions cancelled with notice can be refunded or credited.',
      'Block bookings are non-refundable but can be transferred to another session where possible.',
      'If Bloom & Baby needs to cancel a session, you will receive a refund or credit.',
    ],
  },
  {
    question: 'Can I take photos?',
    paragraphs: [
      'You are welcome to take photos of your own baby and plants.',
      'Bloom & Baby will only take photos with explicit consent, and babies are never identified by name.',
    ],
  },
  {
    question: 'How do I reserve a place?',
    paragraphs: [
      'You can reserve your place directly via the Eventbrite link below.',
      'If you have questions before reserving a place, feel free to get in touch. I am always happy to help.',
    ],
  },
  {
    question: 'Is Bloom & Baby a replacement for medical or mental health support?',
    paragraphs: [
      'No. Bloom & Baby is a wellbeing and community-based offering and does not replace medical, mental health, or postnatal care.',
      'However, many mums find the sessions deeply supportive alongside other care.',
    ],
  },
  {
    question: 'I am feeling nervous about coming. Is that normal?',
    paragraphs: [
      "Very normal. You are welcome exactly as you are. There is no expectation to be 'fine', social, or productive.",
    ],
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-start justify-between gap-6">
          <div>
            <p className="font-editorial text-lg italic text-[#e9dcc6]">Bloom & Baby</p>
            <h1 className="mt-3 font-editorial text-5xl font-light text-[#fdf8ef] md:text-7xl [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">FAQ</h1>
            <p className="mt-4 max-w-2xl text-lg text-[#f4ede2] md:text-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.25)]">
              Everything you need to know about sessions, what to bring, and what to expect.
            </p>
          </div>
          <a
            href="/"
            className="whitespace-nowrap rounded-full border border-stone-200/55 bg-transparent px-5 py-2 font-editorial text-lg italic text-[#f8f2e8] transition hover:bg-white/10"
          >
            Back to home
          </a>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <article
              key={item.question}
              className="border-b border-stone-200/25"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8"
                aria-expanded={openIndex === index}
              >
                <h2 className="font-editorial text-3xl font-light text-[#f7f1e7] md:text-4xl">{item.question}</h2>
                <span className="font-editorial text-4xl leading-none text-[#f3e8d7]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8">
                  {item.intro && <p className="text-lg leading-relaxed text-[#f2ebe1]">{item.intro}</p>}

                  {item.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-[#f2ebe1] marker:text-[#d9c2a0]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {item.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-lg leading-relaxed text-[#f2ebe1]">
                      {paragraph}
                    </p>
                  ))}

                  {item.question === 'How do I reserve a place?' && (
                    <p className="mt-4 text-lg leading-relaxed text-[#f2ebe1]">
                      <a
                        href="https://www.eventbrite.co.uk/e/bloom-baby-spring-term-1-tickets-1982002945163"
                        target="_blank"
                        rel="noreferrer"
                        className="break-all underline decoration-[#d9c2a0]/80 underline-offset-4 hover:text-white"
                      >
                        https://www.eventbrite.co.uk/e/bloom-baby-spring-term-1-tickets-1982002945163
                      </a>
                    </p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
