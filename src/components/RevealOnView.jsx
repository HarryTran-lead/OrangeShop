import { motion } from "framer-motion";

const variantsMap = {
  fadeUp: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  slideLeft: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
};

export default function RevealOnView({
  children,
  type = "fadeUp",
  delay = 0,
  className = "",
}) {
  const variants = variantsMap[type] || variantsMap.fadeUp;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
