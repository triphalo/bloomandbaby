import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-start justify-between gap-6">
          <div>
            <p className="font-editorial text-lg italic text-[#eadcc6] [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]">Bloom & Baby</p>
            <h1 className="mt-3 font-editorial text-5xl font-light text-[#fdf8ef] md:text-7xl [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">About Bloom & Baby</h1>
            <p className="mt-4 max-w-2xl text-lg text-[#f4ede2] md:text-xl [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
              A gentle, nature-led space for maternal wellbeing, connection, and calm.
            </p>
          </div>
          <a
            href="/"
            className="whitespace-nowrap rounded-full border border-stone-200/65 bg-[#f2e8d8]/25 px-5 py-2 font-editorial text-lg italic text-[#f8f1e6] transition hover:bg-[#f2e8d8]/35"
          >
            Back to home
          </a>
        </div>

        <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-7">
            <p className="font-editorial text-2xl italic text-[#f7f1e6] md:text-3xl [text-shadow:0_2px_10px_rgba(0,0,0,0.32)]">
              Hello, I&apos;m Sheena - a mum of two young boys and the founder of Bloom & Baby.
            </p>
            <p className="text-lg leading-relaxed text-[#f1e7da] [text-shadow:0_2px_9px_rgba(0,0,0,0.28)]">
              After many years living in London, I now call Bath home. Like so many mothers, I found the transition
              into early motherhood far more complex than I expected. It was beautiful and joyful, yes, but also
              overwhelming, isolating, and at times incredibly hard. I experienced postnatal anxiety and often felt as
              though I was constantly trying to keep my head above water.
            </p>
            <p className="text-lg leading-relaxed text-[#f1e7da] [text-shadow:0_2px_9px_rgba(0,0,0,0.28)]">
              In the middle of all of that, I discovered something surprisingly powerful: stepping outside, taking a
              breath, and spending time in nature. Gardening became a quiet anchor for me. Working with my hands,
              feeling the soil, and watching things grow helped me slow down and feel grounded again.
            </p>
            <p className="text-lg leading-relaxed text-[#f1e7da] [text-shadow:0_2px_9px_rgba(0,0,0,0.28)]">
              Being outdoors had a real impact on my mental wellbeing and gave me moments of calm within the chaos of
              motherhood - moments where I could reconnect with myself, not just my role as a mum.
            </p>
          </div>

          <figure className="lg:sticky lg:top-10">
            <img
              src="/About.jpeg"
              alt="Sheena in the Bloom & Baby garden setting"
              className="h-auto w-full border-4 border-white object-cover shadow-2xl"
            />
          </figure>
        </section>

        <section className="mt-14 border-t border-stone-200/35 pt-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <figure className="animate-in fade-in slide-in-from-left-12 duration-1000">
              <img
                src="/Nikita.jpeg"
                alt="Mother and baby moment in nature"
                className="h-auto w-full border-4 border-white object-cover shadow-2xl"
              />
            </figure>
            <div>
              <h2 className="font-editorial text-4xl font-light text-[#f7f1e6] [text-shadow:0_2px_10px_rgba(0,0,0,0.32)]">
                Why I Created Bloom & Baby
              </h2>
              <div className="mt-6 space-y-5">
                <p className="text-lg leading-relaxed text-[#f1e7da] [text-shadow:0_2px_9px_rgba(0,0,0,0.28)]">
                  When I looked around Bath for mum-and-baby groups, I noticed that many were focused almost entirely on
                  the baby - often busy, noisy, or centred around milestones and stimulation. What I could not find much
                  of was a space that truly centred mothers&apos; wellbeing (aside from some lovely postnatal yoga classes).
                  Even then, it could be hard to fully focus. Juggling the class while tending to your baby often meant
                  missing out on the experience.
                </p>
                <p className="text-lg leading-relaxed text-[#f1e7da] [text-shadow:0_2px_9px_rgba(0,0,0,0.28)]">
                  Bloom & Baby was created to fill that gap. I wanted to offer a calm, nature-based mum and baby group in
                  Bath where mothers could slow down, overwhelm could soften, connection could happen naturally, and small,
                  achievable moments could restore confidence.
                </p>
                <p className="text-lg leading-relaxed text-[#f1e7da] [text-shadow:0_2px_9px_rgba(0,0,0,0.28)]">
                  If your baby needs feeding, settling, or just a cuddle, you will not miss out. Activities are designed
                  to be flexible and can be enjoyed at the mother&apos;s own pace, without a strict routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-stone-200/35 pt-10">
          <p className="font-editorial text-2xl italic leading-relaxed text-[#f5eee2] md:text-3xl [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
            Bloom & Baby brings together gentle gardening, mindful moments, and baby-friendly nature sensory play in a
            way that supports postnatal wellbeing, reduces isolation, and helps mums feel more grounded and supported
            during early motherhood.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
