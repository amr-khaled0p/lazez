import { Category, type MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'بيج برجر كلاسيك',
    description: 'برجر لحم طازج 200 جرام مشوي على اللهب، مغطى بالجبنة الأمريكية والخضروات الطازجة.',
    price: 99,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '2',
    name: 'تشيكن كرسبي',
    description: 'صدور دجاج كرسبي متبلة مع الجبن الشيدر السويسري والخس الطازج وصوص لذيذ الخاص.',
    price: 99,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '3',
    name: 'ميكس جريل (مشاوي)',
    description: 'تشكيلة فاخرة من الكباب، الشيش طاووق، وريش الغنم. تقدم مع الأرز البسمتي والثومية.',
    price: 257,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '4',
    name: 'باستا ميكس تشيز',
    description: 'مكرونة غنية بصوص الكريمة وأجود أنواع الجبن (شيدر، موتزاريلا، ريكفورد).',
    price: 79,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
  },
  {
    id: '5',
    name: 'أرز كريمي تشيكن',
    description: 'أرز بسمتي فاخر بصوص الكريمة وميكس الجبن مع قطع الدجاج المتبلة.',
    price: 142,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '6',
    name: 'ساندوتش فيليه دجاج',
    description: 'صدور دجاج مشوية على اللهب مع الموزاريلا وجبن الشيدر السويسري.',
    price: 97,
    category: Category.APPETIZER,
    imageUrl: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
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