import { useScroll, useTransform, motionValue } from 'framer-motion';

export function useScrollAnimation() {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  
  return { opacity, scale, y };
}