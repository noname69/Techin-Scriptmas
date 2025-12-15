import { promoCodes, PromoCode } from "./promoCodes";

export class GiftCartEngine {
  private items: { id: string; price: number }[] = [];
  private discount: number = 0;
  private promoCode: PromoCode | null = null;

  constructor() {}

  add(id: string, price: number) {
    if (price < 0) throw new Error("Price can not be negative");

    const exists = this.items.some((item) => item.id === id);
    if (exists) {
      throw new Error(`Item "${id}" already exists in cart`);
    }

    this.items.push({ id, price });
  }

  remove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  total() {
    const sum = this.items.reduce((total, item) => total + item.price, 0);
    return sum - sum * this.discount;
  }

  clear() {
    this.items = [];
    this.discount = 0;
    this.promoCode = null;
  }

  list() {
    return this.items;
  }

  applyDiscount(code: PromoCode): boolean {
    if (this.promoCode) throw new Error("Only one promo code can be applied");
    if (code in promoCodes) {
      this.discount = promoCodes[code];
      this.promoCode = code;
      return true;
    }
    return false;
  }
}