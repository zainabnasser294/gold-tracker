// import { GoldPrice} from '../models/gold.model';   نجيب الاستمارة من ملف المودل 
 import { DailyPrice, GoldPrice, Karat } from '../models/gold.model';


 // أسعار اليوم (ريال عماني لكل جرام) - بيانات تجريبية
export const TODAY_PRICES: GoldPrice[] = [
  { karat: 24, pricePerGram: 48.5 },
  { karat: 22, pricePerGram: 44.46 },
  { karat: 21, pricePerGram: 42.44 },
  { karat: 18, pricePerGram: 36.38 },
];


// نسبة كل عيار إلى عيار 24
const KARAT_RATIO: Record<Karat, number> = {
  24: 24 / 24,
  22: 22 / 24,
  21: 21 / 24,
  18: 18 / 24,
};

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

// يولّد أسعار عدد من الأيام، من الأقدم إلى اليوم
function buildHistory(days: number): DailyPrice[] {
  const history: DailyPrice[] = [];

  for (let daysAgo = days - 1; daysAgo >= 0; daysAgo--) {
    const price24 = 48.5 + Math.sin(daysAgo * 0.6) * 1.2 + daysAgo * 0.03;
    const date = new Date(Date.UTC(2026, 8, 30 - daysAgo)).toISOString().slice(0, 10);

    history.push({
      date,
      prices: {
        24: round2(price24 * KARAT_RATIO[24]),
        22: round2(price24 * KARAT_RATIO[22]),
        21: round2(price24 * KARAT_RATIO[21]),
        18: round2(price24 * KARAT_RATIO[18]),
      },
    });
  }
  return history;
}

export const HISTORY_30_DAYS: DailyPrice[] = buildHistory(30);