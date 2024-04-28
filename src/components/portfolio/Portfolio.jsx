import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Algorithmic Trading",
    img: "/algotrading.png",
    link: "https://github.com/amogh18t/algorithmic-trading-quant",
    desc: "Unsupervised Learning Trading Strategy, utilizing S&P 500 stocks data to master features, indicators, and portfolio optimization nad leverage the power of social media with the Twitter Sentiment Investing Strategy. And Intraday Strategy will introducing the GARCH model.",
  },
  {
    id: 2,
    title: "Kafka YoutubeWatcher",
    img: "/kafka.png",
    link: "https://github.com/amogh18t/Kafka-YoutubeWatcher",
    desc: "Streams out live data of Youtube videos by Kafka by Confluent Cloud via ksqlDB , and sends custom notifications by Telegram. Uses Python to fetch and process data from a static web API Streams that data live. Processes the incoming source data with ksqlDB, watching for important changes, Then streams out live, custom notifications via Telegram",
  },
  {
    id: 3,
    title: "Next JS App (AsuraTube)",
    img: "/asuratube.png",
    link: "https://github.com/amogh18t/asuratube",
    desc: "Video Sharing web-app made with React.Js, Node.Js and RestAPI, Redux, JWT Cookie Authentication. A similar webapp to YouTube, that creator can upload videos and the viewer can view.",
  },
  {
    id: 4,
    title: "quickSQL React App",
    img: "/quicksql.png",
    link: "https://github.com/amogh18t/quickSQL",
    desc: "Designed and Implemented a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
