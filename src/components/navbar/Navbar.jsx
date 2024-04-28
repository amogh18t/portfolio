import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          amogh18t
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/amogh.targe">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/a_m_0_g_h/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/amogh18t">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://leetcode.com/amoi_ty/">
            <img src="/lc.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/amogh-targe/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://codeforces.com/profile/amoi_ty">
            <img src="/cf.png" alt="" />
          </a>
          <a href="https://linktr.ee/am_gh">
            <img src="/linktree.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
