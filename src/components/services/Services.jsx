import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate={"animate"}
      // whileInView={"animate"}
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I have worked on Algorithms & Strategies to solve real world problems
          <br /> and provide buisness insights
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ML & Algo</h2>
          <p>
            Amazon ML Summer School Sept 2023 – Oct 2023
            Machine Learning Intern Remote
            • Classical ML: Gained comprehensive insights into key ML topics, including deep neural networks, supervised
            learning, probabilistic graphical models, and unsupervised learning, Reinforcement Learning, Causal Inference, etc.
            through engaging modules delivered by Amazon Scientists.
            • Practical ML: Developed a strong foundation in essential ML technologies, combining theoretical knowledge with
            practical applications in real-world scenarios.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            I have developed some full stack projects such as AsuraTube in MERN stack and also leveraged frontend into the APIs provided. You can check my projects in github.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Data Analysis</h2>
          <p>
            Analysed Covid-19 database in Global Scale and provide some insights that include the effect of age, previous health status and loaction into the recovery rates.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Financial Research Analysis</h2>
          <p>
          Financial Research AnalystFinancial Research Analyst
          Wall Street Oasis · InternshipWall Street Oasis · Internship
          Jan 2024 - Mar 2024 · 3 mosJan 2024 - Mar 2024 · 3 mos
          RemoteRemote
            helped me get this jobLinkedIn helped me get this job
          • Spearheaded research efforts across diverse domains including finance, management, accounting, valuation, strategy, and budgeting, resulting in the development of comprehensive research materials totaling over 40,000 words, delivered before the conclusion of my internship. 
          • Self-directed learning, focusing on fundamental accounting principles, three-statement financial modeling, and discounted cash flow (DCF) modeling. 
          • Orchestrated a strategic overhaul that led to an impressive 27% increase in Search Engine Optimization (SEO) performance, significantly enhancing our online visibility.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
