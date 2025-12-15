export const promoCodes = {
  PROMO10: 0.1,
  PROMO25: 0.25,
  SANTA50: 0.5,
} as const;

export type PromoCode = keyof typeof promoCodes;
