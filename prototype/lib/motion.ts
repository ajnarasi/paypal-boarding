// Motion constants — compositor-friendly only.

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

export const DUR = {
  fast: 0.18,
  normal: 0.32,
  slow: 0.6,
  parade: 0.9,
};

export const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.normal, ease: EASE_EXPO },
  },
};

export const FADE = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR.normal, ease: EASE_STANDARD },
  },
};
