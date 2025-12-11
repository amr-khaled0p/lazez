// تعريف أنواع الأكل بالعربي عشان تظهر في الزراير
export enum Category {
  BURGERS = 'برجر وسندوتشات',
  CHICKEN = 'دجاج مقرمش',
  MEALS = 'وجبات عائلية',
  PASTA = 'باستا',
  APPETIZER = 'مقبلات',
}

// شكل البيانات بتاعة كل أكلة
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}
