// العيارات الأربعة المسموحة فقط
// export : يسمح لمفات ثانية تستورد هذا التعريف 
// type karat : نوع مخصص  القيمة لازم تكون واحد من هذيلا الاربعة فقط 
export type Karat = 18 | 21 | 22 | 24;

// interface GoldPrice :  استمارة سعر العيار 
// شكل سعر عيار واحد
// karat : karat  الخانة الاولى العيار ولازم من الاربعة
//  pricePerGram: number;  الخانة الثانية : سعر الجرام ولازم رقم 
export interface GoldPrice {
  karat: Karat;
  pricePerGram: number;
}

// أسعار يوم واحد لكل العيارات
export interface DailyPrice {
  date: string;
  prices: Record<Karat, number>;
}