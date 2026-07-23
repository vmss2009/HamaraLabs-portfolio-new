import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Home.css';

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
      <Header />
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
              Your child can write code — school covers that. Can they make a sensor talk to
              an app that controls a machine? Can they run AlphaFold to predict a protein's
              structure? Those are the skills of 2035. We start building them in Class 6, not
              after graduation.
            </p>
            <div className="home-hero__ctas">
              <a className="home-btn home-btn--primary home-btn--big" href="#demo">
                Book a free demo session
              </a>
              <a className="home-btn home-btn--ghost" href="#how">
                See how it works
              </a>
            </div>
            <p className="home-hero__note">
              In-person demo · Your child builds something in session 1 ·{' '}
              <b>No payment, no pressure</b>
            </p>
          </div>

          <div className="home-hero__visuals">
            <figure
              className="home-pipeline home-reveal"
              aria-label="Animated diagram: a sensor sends data to a controller, then to an app, which controls a machine"
            >
                <div className="home-pipeline__header">
                  <span>ENGINEERING · CLASS 8</span>
                  <span className="home-pipeline__live">● LIVE</span>
                </div>
                <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img">
                  <defs>
                    <filter id="home-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path d="M105 80 H210" fill="none" stroke="#f6936b" strokeWidth="2.5" />
                  <path d="M300 80 H405" fill="none" stroke="#f6936b" strokeWidth="2.5" />
                  <path d="M450 108 V150 H150 V178" fill="none" stroke="#f6936b" strokeWidth="2.5" />

                  <g textAnchor="middle">
                    <rect x="35" y="52" width="70" height="56" rx="10" fill="#5f41c9" stroke="#ffd15f" strokeWidth="1.5" />
                    <circle cx="70" cy="72" r="8" fill="none" stroke="#ffd15f" strokeWidth="2" />
                    <circle cx="70" cy="72" r="3" fill="#ffd15f" />
                    <text x="70" y="98" fontSize="10" fill="#f1f0ff">SENSOR</text>

                    <rect x="210" y="52" width="90" height="56" rx="10" fill="#5f41c9" stroke="#ffd15f" strokeWidth="1.5" />
                    <rect x="237" y="64" width="36" height="24" rx="4" fill="none" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="243" y1="58" x2="243" y2="64" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="255" y1="58" x2="255" y2="64" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="267" y1="58" x2="267" y2="64" stroke="#ffd15f" strokeWidth="2" />
                    <text x="255" y="98" fontSize="10" fill="#f1f0ff">CONTROLLER</text>

                    <rect x="405" y="45" width="90" height="63" rx="10" fill="#5f41c9" stroke="#ffd15f" strokeWidth="1.5" />
                    <rect x="435" y="55" width="30" height="42" rx="5" fill="none" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="443" y1="90" x2="457" y2="90" stroke="#ffd15f" strokeWidth="2" />
                    <text x="450" y="122" fontSize="10" fill="#f1f0ff">MOBILE APP</text>

                    <rect x="100" y="178" width="100" height="58" rx="10" fill="#5f41c9" stroke="#ffd15f" strokeWidth="1.5" />
                    <circle cx="150" cy="200" r="12" fill="none" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="150" y1="188" x2="150" y2="196" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="150" y1="204" x2="150" y2="212" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="138" y1="200" x2="146" y2="200" stroke="#ffd15f" strokeWidth="2" />
                    <line x1="154" y1="200" x2="162" y2="200" stroke="#ffd15f" strokeWidth="2" />
                    <text x="150" y="226" fontSize="10" fill="#f1f0ff">MACHINE</text>
                  </g>

                  <g className="home-pulse" filter="url(#home-glow)">
                    <circle r="4" fill="#ffd15f">
                      <animateMotion dur="2.2s" repeatCount="indefinite" path="M105 80 H210" />
                    </circle>
                    <circle r="4" fill="#ffd15f">
                      <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite" path="M300 80 H405" />
                    </circle>
                    <circle r="4" fill="#ffd15f">
                      <animateMotion dur="2.6s" begin="1.4s" repeatCount="indefinite" path="M450 108 V150 H150 V178" />
                    </circle>
                  </g>
                </svg>
                <figcaption className="home-pipeline__caption">
                  A soil-moisture sensor, an app, and a water pump —{' '}
                  <b>built and wired by a 13-year-old.</b>
                </figcaption>
              </figure>

              <figure
                className="home-pipeline home-pipeline--protein home-reveal"
                aria-label="Animated diagram: an amino acid sequence folds into a 3D protein structure with per-residue confidence scores"
              >
                <div className="home-pipeline__header">
                  <span>AI FOR SCIENCE · CLASS 9</span>
                  <span className="home-pipeline__live home-pipeline__live--mint">● PREDICTING</span>
                </div>
                <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img">
                  <defs>
                    <linearGradient id="home-ribbon" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#8bd8c7" />
                      <stop offset="1" stopColor="#4aa460" />
                    </linearGradient>
                    <filter id="home-pglow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2.5" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g fontSize="11" fill="#f1f0ff" textAnchor="middle">
                    <text x="90" y="34">SEQUENCE</text>
                  </g>
                  <g fontSize="12" fill="#c9c4f2" textAnchor="middle">
                    <text x="90" y="54" letterSpacing="2">MKT AYI AKQ R</text>
                  </g>
                  <path d="M90 64 V88" fill="none" stroke="#8bd8c7" strokeWidth="2" />
                  <path d="M84 82 L90 90 L96 82" fill="none" stroke="#8bd8c7" strokeWidth="2" />
                  <text x="90" y="106" fontSize="9" fill="#f1f0ff" textAnchor="middle">FOLD →</text>

                  <g className="home-fold" filter="url(#home-pglow)" transform="translate(0,4)">
                    <path
                      d="M120 150 C 150 118, 175 190, 205 150 S 275 118, 300 150 C 330 182, 370 120, 405 150"
                      fill="none"
                      stroke="#4aa460"
                      strokeWidth="4"
                      strokeLinecap="round"
                      opacity="0.55"
                    />

                    <g stroke="url(#home-ribbon)" strokeWidth="7" fill="none" strokeLinecap="round">
                      <ellipse cx="130" cy="150" rx="15" ry="26" transform="rotate(-24 130 150)" />
                      <ellipse cx="146" cy="150" rx="15" ry="26" transform="rotate(-24 146 150)" />
                      <ellipse cx="162" cy="150" rx="15" ry="26" transform="rotate(-24 162 150)" />
                      <ellipse cx="178" cy="150" rx="15" ry="26" transform="rotate(-24 178 150)" />
                    </g>

                    <path
                      d="M235 168 L285 138 L281 131 L296 136 L288 150 L285 143 L238 173 Z"
                      fill="url(#home-ribbon)"
                      stroke="#2f6b3d"
                      strokeWidth="1"
                    />
                    <path
                      d="M232 152 L282 122 L278 115 L293 120 L285 134 L282 127 L235 157 Z"
                      fill="#63b46b"
                      stroke="#2f6b3d"
                      strokeWidth="1"
                      opacity="0.85"
                    />

                    <g stroke="url(#home-ribbon)" strokeWidth="6" fill="none" strokeLinecap="round">
                      <ellipse cx="350" cy="150" rx="12" ry="22" transform="rotate(22 350 150)" />
                      <ellipse cx="364" cy="150" rx="12" ry="22" transform="rotate(22 364 150)" />
                      <ellipse cx="378" cy="150" rx="12" ry="22" transform="rotate(22 378 150)" />
                    </g>
                  </g>

                  <g fontSize="9" fill="#f1f0ff">
                    <text x="120" y="220">CONFIDENCE SCORE</text>
                    <rect x="120" y="228" width="34" height="9" rx="2" fill="#8bd8c7" />
                    <rect x="154" y="228" width="34" height="9" rx="2" fill="#63b46b" />
                    <rect x="188" y="228" width="34" height="9" rx="2" fill="#4aa460" />
                    <rect x="222" y="228" width="34" height="9" rx="2" fill="#5633b6" />
                    <text x="120" y="250" fill="#c9c4f2">HIGH</text>
                    <text x="256" y="250" fill="#c9c4f2" textAnchor="end">LOW</text>
                    <text x="405" y="234" fill="#8bd8c7" textAnchor="end">92.4 avg</text>
                  </g>
                </svg>
                <figcaption className="home-pipeline__caption">
                  An amino-acid sequence folded into 3D with AlphaFold —{' '}
                  <b>run and interpreted by a Class 9 student.</b>
                </figcaption>
            </figure>
          </div>
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
          <p className="home-section__lede">
            Coding is already in the school syllabus. What schools don't teach is integration —
            connecting hardware, software, data, and AI into one working system, whether that
            system waters a plant or predicts a protein's structure. That's what engineers and
            scientists actually do, and that's what we teach.
          </p>
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

        <section className="home-section" id="proof">
          <span className="home-eyebrow">Verifiable, not vague</span>
          <h2 className="home-section__title">
            The parents whose kids win national competitions started at Class 6.
          </h2>
          <p className="home-section__lede">
            It's not luck — it's a head start. Every story below comes with a parent you can
            actually call and a result you can look up.
          </p>
          <div className="home-proof">
            {PROOF.map((item) => (
              <article className="home-proof-card home-reveal" key={item.name}>
                <div className="home-proof-card__win">{item.win}</div>
                <blockquote>{item.quote}</blockquote>
                <div className="home-proof-card__who">
                  <b>{item.name}</b> · {item.role}
                </div>
              </article>
            ))}
          </div>
          <p className="home-verify">
            <span className="home-verify__dot" aria-hidden="true" />
            Want to verify? At your demo session we'll connect you with parents from your city —
            talk to them directly.
          </p>
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
            <a className="home-btn home-btn--accent home-btn--big" href="tel:+918985315423">
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
