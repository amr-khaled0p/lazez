import { Category, type MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'حمص بيروتي',
    description: 'حمص كريمي مع زيت الزيتون البكر، البقدونس، والصنوبر المحمص.',
    price: 25,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1577906096429-f736f1161d60?auto=format&fit=crop&q=80&w=400',
    isVegetarian: true,
  },
  {
    id: '2',
    name: 'تبولة',
    description: 'سلطة بقدونس طازجة مع برغل ناعم، طماطم، ونعناع.',
    price: 28,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?auto=format&fit=crop&q=80&w=400',
    isVegetarian: true,
  },
  {
    id: '4',
    name: 'مشاوي مشكلة',
    description: 'تشكيلة فاخرة من الكباب، الشيش طاووق، وريش الغنم.',
    price: 95,
    category: Category.MAIN,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '5',
    name: 'كبسة دجاج',
    description: 'أرز بسمتي مطبوخ مع الدجاج والتوابل العربية الخاصة.',
    price: 55,
    category: Category.MAIN,
    imageUrl: 'https://images.unsplash.com/photo-1626804475297-411dbe15f210?auto=format&fit=crop&q=80&w=400',
    isSpicy: true,
  },
  {
    id: '6',
    name: 'منسف أردني',
    description: 'لحم ضأن مطبوخ بالجميد الكركي الأصلي يقدم على خبز شراك وأرز.',
    price: 110,
    category: Category.MAIN,
    imageUrl: 'https://images.unsplash.com/photo-1606446543292-0692a7795324?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '7',
    name: 'كنافة نابلسية',
    description: 'كنافة خشنة بالجبنة النابلسية الساخنة والقطر.',
    price: 30,
    category: Category.DESSERT,
    imageUrl: 'https://images.unsplash.com/photo-1576186414902-69f2e374345d?auto=format&fit=crop&q=80&w=400',
    isVegetarian: true,
  },
  {
    id: '9',
    name: 'ليمون ونعناع',
    description: 'عصير ليمون طازج مثلج مع أوراق النعناع.',
    price: 20,
    category: Category.DRINK,
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400',
    isVegetarian: true,
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Nadheem" (نديم), a friendly and knowledgeable AI waiter at "Laziz" (لذيذ) restaurant. 
Your goal is to help customers choose dishes from our menu based on their preferences, mood, or dietary restrictions.

Here is our Menu Data in JSON format:
${JSON.stringify(MENU_ITEMS)}

Rules:
1. Only recommend items that are strictly on the menu above.
2. If a user asks for something we don't have, politely apologize and suggest the closest alternative.
3. Reply in Arabic unless the user speaks to you in another language.
4. If the user asks about price, mention it clearly in SAR (ريال).
`;