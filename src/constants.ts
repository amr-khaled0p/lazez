import { Category, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'بيج برجر كلاسيك',
    description: 'برجر لحم طازج 200 جرام مشوي على اللهب، مغطى بالجبنة الأمريكية والخضروات الطازجة.',
    price: 99,
    category: Category.BURGERS, // ده تبع البرجر
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '6',
    name: 'ساندوتش فيليه دجاج',
    description: 'صدور دجاج مشوية على اللهب مع الموزاريلا وجبن الشيدر السويسري.',
    price: 97,
    category: Category.BURGERS, // ده تبع البرجر والسندوتشات
    imageUrl: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '2',
    name: 'تشيكن كرسبي',
    description: 'صدور دجاج كرسبي متبلة مع الجبن الشيدر السويسري والخس الطازج وصوص لذيذ الخاص.',
    price: 99,
    category: Category.CHICKEN, // ده دجاج
    imageUrl: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
    isSpicy: true,
  },
  {
    id: '5',
    name: 'أرز كريمي تشيكن',
    description: 'أرز بسمتي فاخر بصوص الكريمة وميكس الجبن مع قطع الدجاج المتبلة.',
    price: 142,
    category: Category.MEALS, // دي وجبات
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '3',
    name: 'ميكس جريل (مشاوي)',
    description: 'تشكيلة فاخرة من الكباب، الشيش طاووق، وريش الغنم. تقدم مع الأرز البسمتي والثومية.',
    price: 257,
    category: Category.MEALS, // دي وجبات
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    isVegetarian: false,
  },
  {
    id: '4',
    name: 'باستا ميكس تشيز',
    description: 'مكرونة غنية بصوص الكريمة وأجود أنواع الجبن (شيدر، موتزاريلا، ريكفورد).',
    price: 79,
    category: Category.PASTA, // دي باستا
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
  }
];
