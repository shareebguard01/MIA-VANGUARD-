import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  onClick,
  type = 'button',
  fullWidth = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.35 });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  const innerClass = `${className} ${fullWidth ? 'w-full sm:w-auto' : ''}`.trim();

  const inner = href ? (
    <a href={href} target={target} rel={rel} onClick={onClick} className={innerClass}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={innerClass}>
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={fullWidth ? 'flex w-full sm:inline-flex sm:w-auto' : 'inline-flex'}
    >
      {inner}
    </motion.div>
  );
}
