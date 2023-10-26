import Spline from "@splinetool/react-spline";
import { motion} from 'framer-motion'

export default function Spidey() {
  return (
    <motion.div className="fixed  z-10 bottom-0 "
        initial={{opacity:0}}
        whileInView={{opacity:1,}}
        viewport={{once:true,amount:0.8}}
        transition={{type:'spring',duration:1.2}}
    >
      <Spline scene="https://prod.spline.design/jOBTEeI2IvPuf7-8/scene.splinecode" />
    </motion.div>
  );
}
