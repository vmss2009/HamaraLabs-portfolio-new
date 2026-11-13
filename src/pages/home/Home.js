import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import epochPhoto from '../../assets/home/epoch-2023.webp';
import epochPhotoSm from '../../assets/home/epoch-2023-sm.webp';
import epochFlight from '../../assets/home/epoch-flight.webp';
import epochPoster from '../../assets/home/epoch-poster.webp';
import epochPosterSm from '../../assets/home/epoch-poster-sm.webp';
import galaxyTab from '../../assets/home/galaxy-tab-s9-ultra.webp';
import galaxyWatch from '../../assets/home/galaxy-watch-ultra.webp';
import sftVideoPoster from '../../assets/home/sft-2024-video.webp';
import './Home.css';

const DEMO_URL = 'https://wa.me/message/SBWZR7CTGXFXI1';

const SFT_VIDEO = {
  id: 'S6nyZ68XX10',
  url: 'https://youtu.be/S6nyZ68XX10',
  title: 'HamaraLabs: Empowering Students Through Tinkering Labs | Solve for Tomorrow 2024 | Samsung',
};

const EPOCH_TWEET_URL = 'https://x.com/ChristinaAsquit/status/1609463239087370240';

const PRIZE_AMOUNT = 120000;

const JOURNEY = [
  {
    title: 'Spot a real problem',
    desc: 'At home, in school, in the neighbourhood — something worth fixing.',
  },
  {
    title: 'Build the MVP',
    desc: 'Sensors, apps and AI wired into a working first version.',
  },
  {
    title: 'Sell it!',
    desc: 'Pitch it, price it and put it in the hands of real users.',
  },
];

const LAUNCH_FLOW = [
  { title: 'Build', desc: "Your child's MVP, ready for real users" },
  { title: 'Get vetted', desc: 'Reviewed before it reaches the market' },
  { title: 'Get distributed', desc: 'Into the hands of real customers' },
];

const formatINR =(value) => `₹${Math.round(value).toLocaleString('en-IN')}`;

function PrizeCounter({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useLayoutEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduceMotion || !('IntersectionObserver' in window)) return undefined;

    let frame;
    setDisplay(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(value * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span className="home-prize__amount" ref={ref}>
      <span className="home-sr-only">{formatINR(value)}</span>
      <span aria-hidden="true">{formatINR(display)}</span>
    </span>
  );
}

function VideoEmbed({ id, title, poster }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (isPlaying && frameRef.current) frameRef.current.focus();
  }, [isPlaying]);

  return (
    <div className="home-video">
      {isPlaying ? (
        <iframe
          ref={frameRef}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="home-video__poster"
          onClick={() => setIsPlaying(true)}
          aria-label={`Watch Samsung's film: ${title}`}
        >
          <img src={poster} alt="" loading="lazy" width="960" height="540" />
          <span className="home-video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
            </svg>
          </span>
          <span className="home-video__label" aria-hidden="true">
            Watch Samsung's film
          </span>
        </button>
      )}
    </div>
  );
}

const TRACKS = [
  {
    id: 'TRACK/01',
    title: 'Robotics',
    desc: 'Motors, chassis, control logic. Your child builds machines that move, sense obstacles, and make decisions — then competes with them.',
    chips: ['Arduino', 'motor drivers', 'line followers'],
  },
  {
    id: 'TRACK/02',
    title: 'IoT & Sensors',
    desc: 'Temperature, moisture, motion — reading the real world and sending it to the cloud. Smart-home and smart-farm projects they can show off at home.',
    chips: ['ESP32', 'MQTT', 'sensor networks'],
  },
  {
    id: 'TRACK/03',
    title: 'Software Integration',
    desc: 'The 2035 skill: connecting a sensor to an app to a machine. APIs, dashboards, and control apps that tie hardware projects together.',
    chips: ['APIs', 'app control', 'dashboards'],
  },
  {
    id: 'TRACK/04',
    title: '3D Printing & Design',
    desc: 'From idea to object. CAD design, prototyping, and printing custom parts for their own robots — engineering thinking made physical.',
    chips: ['CAD', 'prototyping', 'custom parts'],
  },
  {
    id: 'TRACK/05',
    title: 'AI & Machine Learning',
    desc: 'Not just using AI — understanding it. Your child trains models on real datasets, evaluates results, and learns when to trust a prediction and when to question it.',
    chips: ['Python', 'model training', 'datasets'],
  },
  {
    id: 'TRACK/06',
    title: 'AI for Science & Computational Biology',
    desc: 'The frontier your colleagues talk about at work. Students run AlphaFold to predict protein structures, explore genome data, and present findings the way researchers do.',
    chips: ['AlphaFold', 'protein structures', 'bioinformatics'],
  },
];

const STEPS = [
  {
    title: 'Free demo session',
    desc: 'In person. Your child picks a project they like — a robot, an app, or an AI model — and builds it with a mentor while you watch.',
  },
  {
    title: 'Trial task at home',
    desc: 'They take home a simple task. We stay in touch and see how they progress — no commitment yet.',
  },
  {
    title: 'Weekly build sessions',
    desc: 'Hands-on projects that grow in complexity, scheduled around school and exams — never against them.',
  },
  {
    title: 'Progress you can see',
    desc: 'Monthly demo day: your child explains their project to you. You see the skill and the communication.',
  },
  {
    title: 'Competitions & portfolio',
    desc: 'We prepare and handhold them for school, national and international tech competitions.',
  },
];

const PROOF = [
  {
    win: '🏆 State Robotics Championship — 1st place',
    quote: '"My son built a line-following robot in his second month. By month eight he was debugging other kids\' bots at the state finals. I work in IT — I know what real skill looks like."',
    name: 'Rajesh K.',
    role: 'Senior Manager, Infosys · Father of a Class 8 student, Hyderabad',
  },
  {
    win: '🏆 National Science Fair — IoT category finalist',
    quote: '"She made a soil-moisture system for my mother\'s garden that messages her phone. Her school marks didn\'t drop — her confidence went up. That balance is what I was looking for."',
    name: 'Suresh V.',
    role: 'Bank Officer · Father of a Class 7 student, Vijayawada',
  },
  {
    win: '🏆 National Bio-AI Challenge — Best junior presentation',
    quote: '"I\'m a biologist — AlphaFold changed how my whole lab works. When my daughter showed me a protein structure she predicted herself and explained the confidence scores, I knew she was learning the real thing, not a toy version."',
    name: 'Dr. Meena S.',
    role: 'Research Scientist, Genomics Lab · Mother of a Class 9 student, Bangalore',
  },
];

const PROMISES = [
  {
    title: 'No extra homework stress',
    text: "Sessions are hands-on and joyful. Kids ask when the next one is — you'll never have to push.",
  },
  {
    title: 'Exam-aware scheduling',
    text: 'We pause and flex around school exams. Curriculum comes first; skills compound alongside it.',
  },
  {
    title: 'Communication, not just construction',
    text: "Every project ends with your child presenting it. You watch their explanation skills grow month by month.",
  },
  {
    title: 'A portfolio by graduation',
    text: 'By the time they finish school, they\'ll have real projects — not just a resume that says "quick learner."',
  },
];

function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const revealEls = mainRef.current
      ? mainRef.current.querySelectorAll('.home-reveal')
      : [];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealEls.forEach((el) => el.classList.add('home-reveal--in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('home-reveal--in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header className="top-nav--tight" />
      <main className="home" ref={mainRef}>
        <section className="home-hero">
          <div className="home-hero__content">
            <span className="home-eyebrow">For parents of Classes 6–9</span>
            <h1 className="home-hero__title">
              Degrees get interviews.
              <br />
              <span className="home-hero__accent">Skills get careers.</span>
            </h1>
            <p className="home-hero__lede">
              Want your child to solve real-world problems and learn concepts by experimentation?
            </p>
            <div className="home-hero__ctas">
              <a
                className="home-btn home-btn--primary home-btn--big"
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free demo session
              </a>
              <a className="home-btn home-btn--ghost" href="#how">
                See how it works
              </a>
            </div>
          </div>
        </section>

        <section className="home-wins" id="wins" aria-labelledby="home-wins-title">
          <div className="home-wins__head">
            <span className="home-eyebrow">Proof, not promises</span>
            <h2 className="home-section__title" id="home-wins-title">
              Real problems. <span className="home-wins__title-accent">Real prizes.</span>
            </h2>
          </div>

          <div className="home-wins__grid">
            {/* Samsung Solve for Tomorrow 2024 */}
            <article className="home-prize home-reveal">
              <div className="home-prize__text">
                <h3 className="home-badge home-badge--gold">
                  Samsung Solve for Tomorrow{'\u00a0·\u00a0'}2024
                </h3>
                <p className="home-prize__label">Prizes won</p>
                <PrizeCounter value={PRIZE_AMOUNT} />
                <ul className="home-prize__extras" aria-label="Also won">
                  <li>
                    <span aria-hidden="true">+ 2&nbsp;×</span>
                    <span className="home-sr-only">Two</span> Galaxy Tab S9 Ultra
                  </li>
                  <li>
                    <span aria-hidden="true">+ 2&nbsp;×</span>
                    <span className="home-sr-only">Two</span> Galaxy Watch Ultra
                  </li>
                </ul>
                <p className="home-prize__note">
                  One tablet and one watch for each of our two team members.
                </p>
                <a
                  className="home-prize__link"
                  href={SFT_VIDEO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="home-prize__media">
                <VideoEmbed id={SFT_VIDEO.id} title={SFT_VIDEO.title} poster={sftVideoPoster} />
                <div className="home-prize__gear">
                  <figure className="home-gear">
                    <img
                      src={galaxyTab}
                      alt="Samsung Galaxy Tab S9 Ultra box won at Solve for Tomorrow 2024"
                      loading="lazy"
                      width="1100"
                      height="521"
                    />
                    <figcaption>
                      <span className="home-gear__long">Galaxy Tab S9 Ultra</span>
                      <span className="home-gear__short">Tab S9 Ultra</span>
                    </figcaption>
                  </figure>
                  <figure className="home-gear home-gear--watch">
                    <img
                      src={galaxyWatch}
                      alt="Samsung Galaxy Watch Ultra box won at Solve for Tomorrow 2024"
                      loading="lazy"
                      width="760"
                      height="1066"
                    />
                    <figcaption>
                      <span className="home-gear__long">Galaxy Watch Ultra</span>
                      <span className="home-gear__short">Watch Ultra</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </article>

            {/* Hack Club Epoch 2023 */}
            <article className="home-epoch home-reveal">
              <img
                className="home-epoch__photo"
                src={epochPhoto}
                srcSet={`${epochPhotoSm} 900w, ${epochPhoto} 1800w`}
                sizes="(max-width: 1100px) 100vw, 42vw"
                alt="Students cheering in EPOCH hoodies at Hack Club's Epoch hackathon in Delhi, 2023"
                loading="lazy"
                width="1800"
                height="1202"
              />
              <div className="home-epoch__overlay">
                <h3 className="home-badge home-badge--glass">Hack Club Epoch · Delhi · 2023</h3>
                <p className="home-epoch__stat">
                  <span className="home-epoch__num">22</span>
                  <span className="home-epoch__unit">students</span>
                </p>
                <p className="home-epoch__desc">
                  flew to Hack Club's Epoch hackathon — <b>on a fully sponsored trip to Delhi.</b>
                </p>
              </div>
            </article>

            <figure className="home-poster home-reveal">
              <img
                src={epochPoster}
                srcSet={`${epochPosterSm} 600w, ${epochPoster} 1080w`}
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 42vw, 25vw"
                alt="Hack Club Epoch poster: a 42-hour hackathon organised by the Hack Club community, December 30, 2022 to January 1, 2023, at Masters' Union, DLF Cyberpark, Gurugram, with ₹12.5 lakh in travel stipends."
                loading="lazy"
                width="1080"
                height="1920"
              />
            </figure>

            <article className="home-tweet home-reveal">
              <h3 className="home-tweet__kicker">The flight that got a round of applause</h3>
              <div className="home-tweet__card">
                <div className="home-tweet__author">
                  <span className="home-tweet__avatar" aria-hidden="true">
                    CA
                  </span>
                  <span className="home-tweet__who">
                    <b>Christina Asquith</b>
                    <span>@ChristinaAsquit</span>
                  </span>
                  <svg
                    className="home-tweet__x"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-label="X"
                    role="img"
                  >
                    <path
                      fill="currentColor"
                      d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"
                    />
                  </svg>
                </div>
                <blockquote className="home-tweet__text" cite={EPOCH_TWEET_URL}>
                  Indian teenagers flying to New Delhi for{' '}
                  <span className="home-tweet__mention">@hackclub</span> coding event received a
                  round of applause from the entire airplane{' '}
                  <span role="img" aria-label="hearts">
                    💕
                  </span>
                </blockquote>
                <a
                  className="home-tweet__media"
                  href={EPOCH_TWEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch the video of our students' flight on X"
                >
                  <img src={epochFlight} alt="" loading="lazy" width="640" height="352" />
                  <span className="home-tweet__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="home-tweet__dur" aria-hidden="true">
                    0:29
                  </span>
                </a>
                <div className="home-tweet__foot">
                  <time dateTime="2023-01-01">Jan 1, 2023</time>
                  <a href={EPOCH_TWEET_URL} target="_blank" rel="noopener noreferrer">
                    View on X <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className="home-section home-journey"
          id="journey"
          aria-labelledby="home-journey-title"
        >
          <div className="home-journey__head">
            <span className="home-eyebrow">The HamaraLabs journey</span>
            <h2 className="home-section__title" id="home-journey-title">
              Get your child to solve a real{'\u2011'}life problem, build an MVP —{' '}
              <span className="home-journey__accent">and sell it!</span>
            </h2>
          </div>
          <ol className="home-journey__steps home-reveal">
            {JOURNEY.map((step, index) => (
              <li key={step.title}>
                <span className="home-journey__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
          <p className="home-journey__note home-reveal">
            <span className="home-journey__trophy" aria-hidden="true">
              🏆
            </span>
            Along the way, they take part in many more competitions like the ones above.
          </p>
        </section>

        <section className="home-section">
          <div className="home-band home-reveal">
            <span className="home-eyebrow home-eyebrow--light">You already know this</span>
            <h2 className="home-band__title">
              You've seen it at work: graduates with degrees but no skills.
            </h2>
            <p>
              You didn't get where you are because of your marks. You got here because of what
              you could do. Whether your team ships software or runs experiments, every year you
              watch fresh hires arrive with certificates and no capability — and you know the
              ladder that worked for you won't work the same way for your child.
            </p>
            <p className="home-band__quote">
              Some parents wait for the school to catch up. Others build the future themselves.
            </p>
          </div>
        </section>

        <section className="home-section" id="tracks">
          <span className="home-eyebrow">Beyond coding classes</span>
          <h2 className="home-section__title">
            Not another coding course. The skill to make systems talk to each other.
          </h2>
          <div className="home-tracks">
            {TRACKS.map((track) => (
              <article className="home-track home-reveal" key={track.id}>
                <div className="home-track__id">{track.id}</div>
                <h3>{track.title}</h3>
                <p>{track.desc}</p>
                <div className="home-track__chips">
                  {track.chips.map((chip) => (
                    <span className="home-chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section" id="how">
          <span className="home-eyebrow">Zero effort to evaluate us</span>
          <h2 className="home-section__title">See it work before you spend a rupee.</h2>
          <p className="home-section__lede">
            You don't have time to evaluate every new program in the market. So we made
            evaluation effortless: watch your child build something real in one session, then
            decide.
          </p>
          <div className="home-steps">
            {STEPS.map((step, index) => (
              <div className="home-step home-reveal" key={step.title}>
                <div className="home-step__dot" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-promise">
            <div>
              <span className="home-eyebrow">Marks and skills aren't enemies</span>
              <h2 className="home-section__title">Fits around school, not against it.</h2>
              <ul className="home-promise__list">
                {PROMISES.map((item) => (
                  <li key={item.title}>
                    <span className="home-promise__tick" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <span className="home-promise__text">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="home-report home-reveal"
              role="img"
              aria-label="Sample monthly progress report showing project status and skill growth"
            >
              <div className="home-report__head">
                <span>MONTHLY PROGRESS REPORT</span>
                <span>CLASS 8 · MONTH 06</span>
              </div>
              <div className="home-report__body">
                <div className="home-report__row">
                  <span className="home-report__lbl">Current project</span>
                  <span className="home-report__val">SMART IRRIGATION v2</span>
                </div>
                <div className="home-report__row">
                  <span className="home-report__lbl">Hardware & circuits</span>
                  <span className="home-report__bar">
                    <i style={{ width: '82%' }} />
                  </span>
                </div>
                <div className="home-report__row">
                  <span className="home-report__lbl">App & integration</span>
                  <span className="home-report__bar">
                    <i style={{ width: '64%' }} />
                  </span>
                </div>
                <div className="home-report__row">
                  <span className="home-report__lbl">Presentation skills</span>
                  <span className="home-report__bar">
                    <i style={{ width: '71%' }} />
                  </span>
                </div>
                <div className="home-report__row">
                  <span className="home-report__lbl">Next milestone</span>
                  <span className="home-report__val">DISTRICT SCIENCE FAIR</span>
                </div>
                <div className="home-report__row">
                  <span className="home-report__lbl">Demo day</span>
                  <span className="home-report__val">SAT · 4:00 PM · PARENTS INVITED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section" id="demo">
          <div className="home-cta home-reveal">
            <span className="home-eyebrow home-eyebrow--light">One session. Then you decide.</span>
            <h2 className="home-cta__title">
              Start your child's portfolio in Class 6 — not after graduation.
            </h2>
            <p>
              Book a free in-person demo. Your child builds a working project in the first
              session; you watch, ask anything, and talk to parents whose kids are already
              winning. No payment details, no follow-up spam.
            </p>
            <a
              className="home-btn home-btn--accent home-btn--big"
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free demo session
            </a>
            <p className="home-cta__fine">
              HYDERABAD · VIJAYAWADA · VIZAG · BANGALORE · PUNE — WEEKEND SLOTS AVAILABLE
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
