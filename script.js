document.documentElement.classList.add('js');

/* ---------- Данные: сюда добавлять фото и описания ----------
   Положите файлы в images/ и впишите путь в src, например 'images/gelik-1.jpg'.
   src главного фото работы (карточка в сетке) и photos[] (страница работы).
   Пока src пустой, показывается заглушка «Фото скоро». */
const WORKS = [
  { title: 'Матовая и цветная плёнка', film: 'Матовая · цветная', term: '2 – 5 дней', src: 'images/1_Mercedes-G-Class_01.jpeg',
    desc: ['Оклейка автомобилей матовым и цветным полиуретаном: меняет цвет и фактуру кузова и защищает краску. Оттенок и фактуру подбираем под ваш автомобиль.',
           'Ниже примеры работ: у каждой машины своё название и свои фото.'],
    cars: [
      { name: 'Li Auto L9', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Lisyan_01.jpeg', cap: 'Процесс оклейки' },
        { src: 'images/1_Lisyan_02.jpeg', cap: 'Передняя часть и колесо' },
        { src: 'images/1_Lisyan_03.jpeg', cap: 'Дверь и ручка' },
        { src: 'images/1_Lisyan_04.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_Lisyan_05.jpeg', cap: 'Задняя часть: фонарь и стойка' },
        { src: 'images/1_Lisyan_06.jpeg', cap: 'Задняя стойка' },
        { src: 'images/1_Lisyan_07.jpeg', cap: 'Задняя часть: логотип и фонарь' },
      ] },
      { name: 'GAC GS8', info: 'Матовая плёнка', photos: [
        { src: 'images/1_GAC-GS8_01.jpeg', cap: 'Передняя часть и фара' },
        { src: 'images/1_GAC-GS8_02.jpeg', cap: 'Капот и крыло' },
        { src: 'images/1_GAC-GS8_03.jpeg', cap: 'Капот, крыло и зеркало' },
      ] },
      { name: 'Lynk & Co 09', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Lynk-Co-09_01.jpeg', cap: 'Дверь и зеркало' },
        { src: 'images/1_Lynk-Co-09_02.jpeg', cap: 'Крыло и фара' },
        { src: 'images/1_Lynk-Co-09_03.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_Lynk-Co-09_04.jpeg', cap: 'Задняя часть' },
      ] },
      { name: 'Kia Carnival', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Kia-Carnival_01.jpeg', cap: 'Капот' },
        { src: 'images/1_Kia-Carnival_02.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Kia-Carnival_03.jpeg', cap: 'Фара и крыло' },
        { src: 'images/1_Kia-Carnival_04.jpeg', cap: 'Капот и стойка' },
        { src: 'images/1_Kia-Carnival_05.jpeg', cap: 'Задняя часть' },
      ] },
      { name: 'Genesis GV80', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Genesis-GV80_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Genesis-GV80_02.jpeg', cap: 'Фара и колесо' },
        { src: 'images/1_Genesis-GV80_03.jpeg', cap: 'Крыло и капот' },
        { src: 'images/1_Genesis-GV80_04.jpeg', cap: 'Капот и зеркало' },
        { src: 'images/1_Genesis-GV80_05.jpeg', cap: 'Задний фонарь' },
      ] },
      { name: 'Infiniti QX70', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Infiniti-QX70_02.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_Infiniti-QX70_03.jpeg', cap: 'Задняя часть' },
        { src: 'images/1_Infiniti-QX70_04.jpeg', cap: 'Задняя стойка' },
      ] },
      { name: 'Toyota Land Cruiser Prado', info: 'Камуфляжная плёнка', photos: [
        { src: 'images/1_Toyota-Prado_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Toyota-Prado_02.jpeg', cap: 'Капот и решётка' },
        { src: 'images/1_Toyota-Prado_03.jpeg', cap: 'Фара и крыло' },
        { src: 'images/1_Toyota-Prado_04.jpeg', cap: 'Задняя часть' },
        { src: 'images/1_Toyota-Prado_05.jpeg', cap: 'Задний фонарь' },
        { src: 'images/1_Toyota-Prado_06.jpeg', cap: 'Стык плёнки' },
        { src: 'images/1_Toyota-Prado_07.jpeg', cap: 'Процесс оклейки капота' },
        { src: 'images/1_Toyota-Prado_08.jpeg', cap: 'Процесс оклейки' },
        { src: 'images/1_Toyota-Prado_09.jpeg', cap: 'Процесс оклейки: передняя часть' },
      ] },
      { name: 'Toyota RAV4', info: 'Цветная плёнка, оранжевый', photos: [
        { src: 'images/1_Toyota-RAV4_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Toyota-RAV4_02.jpeg', cap: 'Фара и крыло' },
        { src: 'images/1_Toyota-RAV4_03.jpeg', cap: 'Задняя часть' },
        { src: 'images/1_Toyota-RAV4_04.jpeg', cap: 'Багажник' },
        { src: 'images/1_Toyota-RAV4_05.jpeg', cap: 'Задний фонарь и бампер' },
      ] },
      { name: 'McLaren 570S Spider', info: 'Цветная плёнка', photos: [
        { src: 'images/1_McLaren-570S_01.jpeg', cap: 'Процесс переклейки' },
        { src: 'images/1_McLaren-570S_02.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_McLaren-570S_03.jpeg', cap: 'Капот' },
        { src: 'images/1_McLaren-570S_04.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_McLaren-570S_05.jpeg', cap: 'Задняя часть' },
      ] },
      { name: 'Lexus RX', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Lexus-RX_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Lexus-RX_02.jpeg', cap: 'Капот и решётка' },
        { src: 'images/1_Lexus-RX_03.jpeg', cap: 'Капот и фара' },
        { src: 'images/1_Lexus-RX_04.jpeg', cap: 'Крыло и фара' },
        { src: 'images/1_Lexus-RX_05.jpeg', cap: 'Боковая часть' },
        { src: 'images/1_Lexus-RX_06.jpeg', cap: 'Дверь' },
        { src: 'images/1_Lexus-RX_07.jpeg', cap: 'Процесс оклейки' },
      ] },
      { name: 'Kia Stinger', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Kia-Stinger_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Kia-Stinger_02.jpeg', cap: 'Фара и капот' },
        { src: 'images/1_Kia-Stinger_03.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Kia-Stinger_04.jpeg', cap: 'Капот' },
        { src: 'images/1_Kia-Stinger_05.jpeg', cap: 'Капот и фара' },
        { src: 'images/1_Kia-Stinger_06.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_Kia-Stinger_07.jpeg', cap: 'Задняя часть' },
        { src: 'images/1_Kia-Stinger_08.jpeg', cap: 'Задний бампер' },
        { src: 'images/1_Kia-Stinger_09.jpeg', cap: 'Передняя часть и колесо' },
      ] },
      { name: 'Mercedes-AMG G 63', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Mercedes-G-Class_01.jpeg', cap: 'Передняя часть и фара' },
        { src: 'images/1_Mercedes-G-Class_02.jpeg', cap: 'Фара: процесс оклейки' },
        { src: 'images/1_Mercedes-G-Class_03.jpeg', cap: 'Крыло: процесс оклейки' },
        { src: 'images/1_Mercedes-G-Class_04.jpeg', cap: 'Бампер: процесс оклейки' },
        { src: 'images/1_Mercedes-G-Class_05.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_Mercedes-G-Class_06.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Mercedes-G-Class_07.jpeg', cap: 'Процесс оклейки капота' },
        { src: 'images/1_Mercedes-G-Class_08.jpeg', cap: 'Задняя часть и запасное колесо' },
      ] },
      { name: 'Mercedes-Benz SL', info: 'Матовая плёнка', photos: [
        { src: 'images/1_Mercedes-SL_01.jpeg', cap: 'Процесс оклейки' },
        { src: 'images/1_Mercedes-SL_02.jpeg', cap: 'Крыло и капот' },
        { src: 'images/1_Mercedes-SL_03.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Mercedes-SL_04.jpeg', cap: 'Задняя часть' },
      ] },
      { name: 'Mercedes-AMG S 63 Coupe', info: 'Матовая плёнка, чёрный', photos: [
        { src: 'images/1_Mercedes-S63-Coupe_01.jpeg', cap: 'Крыло и колесо' },
        { src: 'images/1_Mercedes-S63-Coupe_02.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Mercedes-S63-Coupe_03.jpeg', cap: 'Фара и бампер' },
        { src: 'images/1_Mercedes-S63-Coupe_04.jpeg', cap: 'Капот и фара' },
        { src: 'images/1_Mercedes-S63-Coupe_05.jpeg', cap: 'Процесс оклейки' },
      ] },
      { name: 'BMW X6', info: 'Цветная плёнка, белый', photos: [
        { src: 'images/1_BMW-X6_01.jpeg', cap: 'Процесс оклейки' },
        { src: 'images/1_BMW-X6_02.jpeg', cap: 'Капот и фара' },
        { src: 'images/1_BMW-X6_03.jpeg', cap: 'Крыло и колесо' },
      ] },
      { name: 'Citroen C5', info: 'Матовая плёнка, чёрный', photos: [
        { src: 'images/1_Citroen-C5_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/1_Citroen-C5_02.jpeg', cap: 'Капот и решётка' },
        { src: 'images/1_Citroen-C5_03.jpeg', cap: 'Капот и фара' },
        { src: 'images/1_Citroen-C5_04.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/1_Citroen-C5_05.jpeg', cap: 'Задняя часть' },
      ] },
    ] },
  { title: 'Прозрачная защитная плёнка', film: 'Прозрачная', term: '2 – 5 дней', src: 'images/2_Toyota-Land-Cruiser-300_01.jpeg',
    desc: ['Прозрачный полиуретан защищает краску и сохраняет заводской вид автомобиля: зоны риска за 2 дня, весь кузов за 5 дней.',
           'Ниже примеры работ: у каждой машины своё название и свои фото.'],
    cars: [
      { name: 'Lexus LX', info: 'Прозрачная плёнка', photos: [
        { src: 'images/2_Lexus-LX_01.jpeg', cap: 'Борт и задний фонарь' },
        { src: 'images/2_Lexus-LX_02.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Lexus-LX_03.jpeg', cap: 'Крыло и колесо' },
        { src: 'images/2_Lexus-LX_04.jpeg', cap: 'Капот и решётка' },
      ] },
      { name: 'Mercedes-AMG G 63', info: 'Прозрачная плёнка', photos: [
        { src: 'images/2_Mercedes-G-Class_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Mercedes-G-Class_02.jpeg', cap: 'Капот: процесс оклейки' },
        { src: 'images/2_Mercedes-G-Class_03.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/2_Mercedes-G-Class_04.jpeg', cap: 'Боковая часть' },
      ] },
      { name: 'HiPhi Z', info: 'Цветная плёнка, оливковый', photos: [
        { src: 'images/2_HiPhi-Z_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_HiPhi-Z_02.jpeg', cap: 'Задняя часть' },
        { src: 'images/2_HiPhi-Z_03.jpeg', cap: 'Задняя часть и фонари' },
        { src: 'images/2_HiPhi-Z_04.jpeg', cap: 'Передний бампер и фара' },
        { src: 'images/2_HiPhi-Z_05.jpeg', cap: 'Бампер: процесс оклейки' },
        { src: 'images/2_HiPhi-Z_06.jpeg', cap: 'Капот и бампер' },
        { src: 'images/2_HiPhi-Z_07.jpeg', cap: 'Борт автомобиля' },
      ] },
      { name: 'Zeekr 001', info: 'Цветная плёнка, оранжевый', photos: [
        { src: 'images/2_Zeekr-001_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Zeekr-001_02.jpeg', cap: 'Борт автомобиля' },
        { src: 'images/2_Zeekr-001_03.jpeg', cap: 'Задняя часть' },
      ] },
      { name: 'Changan', info: 'Прозрачная плёнка, чёрный', photos: [
        { src: 'images/2_Changan_01.jpeg', cap: 'Капот и решётка: процесс оклейки' },
        { src: 'images/2_Changan_02.jpeg', cap: 'Фара и бампер' },
      ] },
      { name: 'Range Rover', info: 'Прозрачная плёнка, чёрный', photos: [
        { src: 'images/2_Range-Rover_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Range-Rover_02.jpeg', cap: 'Капот: процесс оклейки' },
        { src: 'images/2_Range-Rover_03.jpeg', cap: 'Капот и фара' },
      ] },
      { name: 'BMW 5 Series', info: 'Прозрачная плёнка, красный', photos: [
        { src: 'images/2_BMW-5-Series_02.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_BMW-5-Series_01.jpeg', cap: 'Капот и фара' },
      ] },
      { name: 'Toyota RAV4', info: 'Прозрачная плёнка, белый', photos: [
        { src: 'images/2_Toyota-RAV4_01.jpeg', cap: 'Капот: процесс оклейки' },
        { src: 'images/2_Toyota-RAV4_02.jpeg', cap: 'Фара и бампер' },
        { src: 'images/2_Toyota-RAV4_03.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Toyota-RAV4_04.jpeg', cap: 'Крыло и колесо' },
        { src: 'images/2_Toyota-RAV4_05.jpeg', cap: 'Фара и крыло' },
      ] },
      { name: 'Tenet T7', info: 'Прозрачная плёнка, чёрный', photos: [
        { src: 'images/2_Tenet-T7_01.jpeg', cap: 'Решётка: процесс оклейки' },
        { src: 'images/2_Tenet-T7_02.jpeg', cap: 'Капот и решётка' },
        { src: 'images/2_Tenet-T7_03.jpeg', cap: 'Капот и фара' },
      ] },
      { name: 'Toyota Land Cruiser 300', info: 'Прозрачная плёнка, чёрный', photos: [
        { src: 'images/2_Toyota-Land-Cruiser-300_01.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Toyota-Land-Cruiser-300_02.jpeg', cap: 'Капот: процесс оклейки' },
        { src: 'images/2_Toyota-Land-Cruiser-300_03.jpeg', cap: 'Капот и крыло' },
      ] },
      { name: 'Haval', info: 'Прозрачная плёнка, белый', photos: [
        { src: 'images/2_White-SUV_01.jpeg', cap: 'Капот и решётка: процесс оклейки' },
        { src: 'images/2_White-SUV_02.jpeg', cap: 'Фара и бампер' },
      ] },
      { name: 'Geely', info: 'Прозрачная плёнка, серый', photos: [
        { src: 'images/2_Gray-SUV_01.jpeg', cap: 'Капот и решётка: процесс оклейки' },
        { src: 'images/2_Gray-SUV_02.jpeg', cap: 'Передняя часть' },
        { src: 'images/2_Gray-SUV_03.jpeg', cap: 'Фара и колесо' },
      ] },
      { name: 'Changan (пикап)', info: 'Прозрачная плёнка, белый', photos: [
        { src: 'images/2_White-Pickup_02.jpeg', cap: 'Борт и зеркало' },
        { src: 'images/2_White-Pickup_01.jpeg', cap: 'Ручка двери' },
        { src: 'images/2_White-Pickup_03.jpeg', cap: 'Решётка и фара' },
        { src: 'images/2_White-Pickup_04.jpeg', cap: 'Решётка' },
        { src: 'images/2_White-Pickup_05.jpeg', cap: 'Зеркало и крыло' },
      ] },
    ] },
];

/* ---------- Полезная информация (окна, как у работ) ---------- */
const INFO = [
  { tag: 'Зоны риска', title: 'Что входит в зоны риска',
    summary: 'Капот, бампер, крылья, фары, зеркала, стойки у лобового стекла и полоса над ним.',
    facts: [['Срок', '2 дня'], ['Цена', 'от 50 000 ₽'], ['Зон', '7']],
    blocks: [
      { p: 'Зоны риска это части кузова, которые страдают сильнее всего. Они оклеиваются полиуретановой плёнкой за 2 дня.' },
      { h: 'Что входит', ul: ['Капот', 'Бампер', 'Крылья', 'Фары', 'Зеркала', 'Стойки около лобового стекла', 'Полоса над лобовым стеклом'] },
      { p: 'Цена зависит от выбора материала, состояния автомобиля и его класса. Точную стоимость называю после осмотра.' },
    ] },
  { tag: 'Цена', title: 'Из чего складывается цена',
    summary: 'Материал, состояние и класс автомобиля. Ориентиры для зон риска и полной оклейки.',
    facts: [['Зоны риска', 'от 50 000 ₽'], ['Полная оклейка', 'от 180 000 ₽'], ['Срок', '2 и 5 дней']],
    blocks: [
      { p: 'Цены варьируются. Итоговая стоимость зависит от трёх вещей:' },
      { ul: ['выбора материала', 'состояния автомобиля', 'класса автомобиля'] },
      { h: 'Зоны риска', ul: ['от 50 000 ₽: китайские плёнки', 'от 65 000 ₽: плёнки из Японии и Кореи'] },
      { h: 'Полная оклейка', p: 'От 180 000 ₽, срок работы 5 дней.' },
      { p: 'Точную цену называю после осмотра, до начала работ.' },
    ] },
  { tag: 'Материал', title: 'Какой полиуретан и на сколько его хватит',
    summary: 'Срок службы 5, 7 или 10 лет, толщина 195 или 210 микрон, гидрофоб и заживление.',
    facts: [['Срок службы', '5 / 7 / 10 лет'], ['Толщина', '195 / 210 мкм'], ['Свойства', 'гидрофоб, заживление']],
    blocks: [
      { p: 'Срок службы полиуретановой плёнки зависит от выбранного материала: 5, 7 или 10 лет.' },
      { h: 'Характеристики', ul: ['Толщина плёнки: 195 или 210 микрон', 'Гидрофобное покрытие у всех плёнок', 'Заживление у всех плёнок'] },
      { h: 'Откуда плёнка', ul: ['Япония и Корея', 'Китай: самый доступный по цене вариант'] },
      { p: 'Какую плёнку выбрать под ваш автомобиль и задачу, подскажу при осмотре.' },
    ] },
  { tag: 'Совет', title: 'Как выбрать мастера и не переплатить',
    summary: 'Говорите с тем, кто клеит, сравните цены в нескольких местах и платите тому, кто делает.',
    facts: [['Позвонить', '3–7 мастерских'], ['Спросить', 'кто будет клеить'], ['Платить', 'тому, кто клеит']],
    blocks: [
      { p: 'Знать, как сделать, и уметь делать качественно это как небо и земля. В идеале консультировать должен тот, кто будет клеить. Как минимум говорите с тем, кто будет нести личную ответственность за качество и сроки оклейки вашего автомобиля.' },
      { h: 'Три шага', ul: [
        'Спросите, кто именно будет клеить ваш автомобиль. Тот, кто обещает, и тот, кто клеит, должен быть одним человеком.',
        'Обзвоните три, пять или семь мастерских с одним вопросом: «Сколько стоит оклеить мой авто защитной плёнкой?» Так вы поймёте порядок цен.',
        'Если самая низкая цена мало отличается от средней, езжайте туда. Либо это мастер без посредников, либо всё станет понятно при встрече.',
      ] },
      { p: 'Платите тому, кто делает: это и качественнее, и дешевле.' },
    ] },
  { tag: 'Памятка', title: 'Памятка клиенту: 5 вопросов мастеру до записи',
    summary: 'Что спросить, чтобы не переплатить и не остаться с косяками после оклейки.',
    facts: [['Вопросов', '5'], ['Сравнить', '3–5 мастерских'], ['Платить', 'тому, кто клеит']],
    blocks: [
      { p: 'Прежде чем записываться, задайте мастеру пять вопросов. Ответы покажут, с кем вы разговариваете на самом деле.' },
      { h: 'Что спросить', ul: [
        'Кто именно будет клеить мою машину?',
        'Консультирует меня тот же человек, который будет клеить?',
        'Кто лично отвечает за качество и за сроки?',
        'Кому и как я плачу: мастеру напрямую или через посредника?',
        'Сколько это стоит в других местах? Обзвоните три, пять, семь мастерских с одним вопросом: «Сколько стоит оклеить мой авто защитной плёнкой?»',
      ] },
      { p: 'Если на любой из первых четырёх вопросов вы слышите «спрошу у мастера» или «это решает администратор», вы говорите не с тем человеком.' },
    ] },
  { tag: 'Мастер', title: 'Почему я клею сам: от консультации до ножа',
    summary: 'Консультирую и клею лично, поэтому за результат отвечает один человек.',
    facts: [['Консультирует', 'тот, кто клеит'], ['Клеит', 'один мастер'], ['Отвечает', 'лично мастер']],
    blocks: [
      { p: 'Лично я всегда сам консультирую клиентов и всегда сам клею. Нож и кузов не терпят случайных рук: доверить нож тому, кто не знает, как резать, значит рисковать вашей краской.' },
      { p: 'Знать, как сделать, и уметь делать качественно это как небо и земля. Менеджер или администратор, который никогда не держал в руках нож и ракель, может пообещать что угодно.' },
      { h: 'Что это даёт вам', ul: [
        'Вы говорите с тем, кто будет клеить, и слышите честный ответ про цену и сроки.',
        'Один человек отвечает за качество и за сроки оклейки вашего автомобиля.',
        'Между вами и мастером нет посредников, поэтому нет лишних наценок.',
        'Вы платите тому, кто делает работу.',
      ] },
    ] }
];

const camIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

function placeholder() {
  const d = document.createElement('div');
  d.className = 'ph';
  d.innerHTML = '<span>' + camIcon + 'Фото скоро</span>';
  return d;
}
function media(src, alt, host) {
  if (src) {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    img.onerror = () => { img.remove(); host.prepend(placeholder()); };
    host.append(img);
  } else {
    host.append(placeholder());
  }
}
function tile(item, idx, isWork) {
  const el = document.createElement(isWork ? 'button' : 'figure');
  el.className = 'work reveal';
  if (isWork) { el.type = 'button'; el.dataset.idx = idx; el.setAttribute('aria-label', 'Открыть работу: ' + item.title); }
  media(item.src, item.title + (item.car ? ', ' + item.car : ''), el);
  const cap = document.createElement('span');
  cap.className = 'cap';
  cap.innerHTML = isWork ? '<i></i><b></b><p></p>' : '<b></b>';
  cap.querySelector('b').textContent = item.title;
  if (isWork) {
    cap.querySelector('i').textContent = item.film;
    cap.querySelector('p').textContent = item.desc[0];
  }
  el.append(cap);
  if (isWork) {
    const more = document.createElement('span');
    more.className = 'more';
    more.setAttribute('aria-hidden', 'true');
    more.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 17 7M8 7h9v9"/></svg>';
    el.append(more);
  }
  return el;
}
const wg = document.getElementById('works-grid');
WORKS.forEach((w, i) => { const t = tile(w, i, true); t.style.setProperty('--i', i); wg.append(t); });
const ig = document.getElementById('info-grid');
INFO.forEach((it, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'info-card reveal';
  b.dataset.idx = i;
  b.style.setProperty('--i', i);
  b.setAttribute('aria-label', 'Открыть: ' + it.title);
  b.innerHTML = '<span class="ic-num"></span><span class="ic-body"><span class="ic-tag"></span><b class="ic-title"></b><p class="ic-sum"></p></span>' +
    '<span class="more" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 17 7M8 7h9v9"/></svg></span>';
  b.querySelector('.ic-num').textContent = String(i + 1).padStart(2, '0');
  b.querySelector('.ic-tag').textContent = it.tag;
  b.querySelector('.ic-title').textContent = it.title;
  b.querySelector('.ic-sum').textContent = it.summary;
  ig.append(b);
});

/* ---------- Страница работы (разворачивается из карточки) ---------- */
const caseEl = document.getElementById('case');
const caseBody = document.getElementById('caseBody');
let caseIdx = 0, caseKind = 'work', caseOpener = null, caseClosing = false;
const caseList = () => (caseKind === 'work' ? WORKS : INFO);
const caseSel = i => (caseKind === 'work' ? '.work' : '.info-card') + '[data-idx="' + i + '"]';

function renderCase(i) {
  document.getElementById('caseSec').textContent = caseKind === 'work' ? 'Работы' : 'Полезно знать';
  return caseKind === 'work' ? renderWork(i) : renderInfo(i);
}

function renderWork(i) {
  const w = WORKS[i];
  caseIdx = i;
  caseBody.innerHTML = '';
  const hero = document.createElement('header');
  hero.className = 'case-hero';
  const bg = document.createElement('div');
  bg.className = 'case-hero-bg';
  media(w.src, w.title, bg);
  hero.append(bg);
  const hi = document.createElement('div');
  hi.className = 'case-hero-in wrap';
  hi.innerHTML = '<p class="label">Примеры работ</p><h2 id="caseTitle"></h2>' +
    '<dl class="case-meta"><div><dt>Автомобилей в примерах</dt><dd class="m-n"></dd></div><div><dt>Плёнка</dt><dd class="m-film"></dd></div><div><dt>Срок</dt><dd class="m-term"></dd></div></dl>' +
    '<span class="case-scroll-hint" aria-hidden="true">Листайте вниз</span>';
  hi.querySelector('h2').textContent = w.title;
  hi.querySelector('.m-n').textContent = w.cars.length ? String(w.cars.length) : 'скоро';
  hi.querySelector('.m-film').textContent = w.film;
  hi.querySelector('.m-term').textContent = w.term;
  hero.append(hi);
  caseBody.append(hero);

  const content = document.createElement('div');
  content.className = 'case-content wrap';
  caseBody.append(content);

  const text = document.createElement('div');
  text.className = 'case-text';
  w.desc.forEach(p => { const e = document.createElement('p'); e.textContent = p; text.append(e); });
  content.append(text);

  if (w.cars.length > 1) {
    const chips = document.createElement('nav');
    chips.className = 'case-cars-nav';
    chips.setAttribute('aria-label', 'Автомобили');
    w.cars.forEach((c, k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = c.name;
      b.addEventListener('click', () => document.getElementById('car-' + k).scrollIntoView({ behavior: 'smooth', block: 'start' }));
      chips.append(b);
    });
    content.append(chips);
  }

  if (!w.cars.length) {
    const empty = document.createElement('div');
    empty.className = 'case-empty';
    empty.innerHTML = '<span></span><p>Здесь появятся работы: название автомобиля и его фотографии.</p>';
    empty.querySelector('span').innerHTML = camIcon;
    content.append(empty);
  }

  w.cars.forEach((c, k) => {
    const blk = document.createElement('section');
    blk.className = 'case-car';
    blk.id = 'car-' + k;
    blk.innerHTML = '<p class="cc-n"></p><h3 class="cc-name"></h3><p class="cc-info"></p>';
    blk.querySelector('.cc-n').textContent = String(k + 1).padStart(2, '0') + ' / ' + String(w.cars.length).padStart(2, '0');
    blk.querySelector('.cc-name').textContent = c.name;
    if (c.info) blk.querySelector('.cc-info').textContent = c.info; else blk.querySelector('.cc-info').remove();
    const gal = document.createElement('div');
    gal.className = 'collage';
    c.photos.forEach((ph, n) => {
      const f = document.createElement('figure');
      f.className = 'ci' + (ph.src ? '' : ' ci-ph');
      if (ph.src) f.style.setProperty('--bg', 'url("' + ph.src + '")');
      media(ph.src, c.name + ': ' + ph.cap, f);
      const eager = f.querySelector('img'); if (eager) eager.loading = 'eager';
      if (ph.src) {
        f.tabIndex = 0;
        f.setAttribute('role', 'button');
        f.setAttribute('aria-label', 'Открыть фото: ' + ph.cap);
        const open = () => openLightbox(c.photos.filter(p => p.src), c.photos.filter(p => p.src).indexOf(ph));
        f.addEventListener('click', open);
        f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
      }
      gal.append(f);
    });
    const total = c.photos.length;
    const swipe = document.createElement('div');
    swipe.className = 'swipe';
    const hint = document.createElement('div');
    hint.className = 'swipe-hint';
    hint.innerHTML = '<span class="sh-text">Листайте фото</span><svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 7h19M14 1l6 6-6 6"/></svg><span class="sh-n"></span>';
    const step = () => gal.querySelector('.ci').offsetWidth + (parseFloat(getComputedStyle(gal).columnGap) || 0) || 1;
    const dots = document.createElement('div');
    dots.className = 'dots';
    for (let d = 0; d < total; d++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Фото ' + (d + 1));
      dot.addEventListener('click', () => {
        const its = gal.querySelectorAll('.ci');
        gal.scrollTo({ left: its[d].offsetLeft - its[0].offsetLeft, behavior: 'smooth' });
      });
      dots.append(dot);
    }
    const sync = () => {
      const its = gal.querySelectorAll('.ci');
      let k = total - 1;
      for (let q = 0; q < its.length; q++) {
        if (its[q].offsetLeft - its[0].offsetLeft + its[q].offsetWidth * 0.5 > gal.scrollLeft) { k = q; break; }
      }
      hint.querySelector('.sh-n').textContent = (k + 1) + ' / ' + total;
      dots.querySelectorAll('button').forEach((b, d) => b.classList.toggle('on', d === k));
    };
    gal.addEventListener('scroll', sync, { passive: true });
    requestAnimationFrame(() => requestAnimationFrame(sync));
    window.addEventListener('resize', sync);
    const view = document.createElement('div');
    view.className = 'swipe-view';
    const arrow = (dir) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sw-btn sw-' + (dir < 0 ? 'prev' : 'next');
      b.setAttribute('aria-label', dir < 0 ? 'Предыдущее фото' : 'Следующее фото');
      b.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="' + (dir < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7') + '"/></svg>';
      b.addEventListener('click', () => gal.scrollBy({ left: dir * step(), behavior: 'smooth' }));
      return b;
    };
    if (total > 1) view.append(gal, arrow(-1), arrow(1)); else view.append(gal);
    swipe.append(hint, view, dots);
    blk.append(swipe);
    content.append(blk);
  });

  const cta = document.createElement('div');
  cta.className = 'case-cta';
  cta.innerHTML = '<p>Хотите так же? Позвоните мастеру: он назовёт цену и свободную дату.</p><a class="btn" href="tel:+79772700058">Позвонить +7 977 270-00-58</a>';
  content.append(cta);
  caseEl.querySelector('.case-scroll').scrollTop = 0;
}

function videoBlock(b) {
  const wrap = document.createElement('figure');
  wrap.className = 'vid';
  const src = (b.video || '').trim();
  if (!src) {
    wrap.classList.add('vid-empty');
    wrap.innerHTML = '<div class="vid-ph"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/></svg><span>Видео скоро</span></div>';
  } else if (/\.(mp4|webm|mov)(\?.*)?$/i.test(src)) {
    const v = document.createElement('video');
    v.src = src; v.controls = true; v.playsInline = true; v.preload = 'metadata';
    wrap.append(v);
  } else {
    const f = document.createElement('iframe');
    f.src = src; f.loading = 'lazy'; f.allowFullscreen = true;
    f.allow = 'autoplay; fullscreen; picture-in-picture';
    f.title = b.title || 'Видео';
    wrap.append(f);
  }
  if (b.title) { const c = document.createElement('figcaption'); c.textContent = b.title; wrap.append(c); }
  return wrap;
}

function renderInfo(i) {
  const it = INFO[i];
  caseIdx = i;
  caseBody.innerHTML = '';
  const hero = document.createElement('header');
  hero.className = 'case-hero no-photo';
  const bg = document.createElement('div');
  bg.className = 'case-hero-bg info-bg';
  hero.append(bg);
  const hi = document.createElement('div');
  hi.className = 'case-hero-in wrap';
  hi.innerHTML = '<p class="label"></p><h2 id="caseTitle"></h2><dl class="case-meta"></dl>';
  hi.querySelector('.label').textContent = it.tag + ' / ' + String(i + 1).padStart(2, '0') + ' из ' + String(INFO.length).padStart(2, '0');
  hi.querySelector('h2').textContent = it.title;
  const dl = hi.querySelector('dl');
  it.facts.forEach(([k, v]) => {
    const d = document.createElement('div');
    d.innerHTML = '<dt></dt><dd></dd>';
    d.querySelector('dt').textContent = k;
    d.querySelector('dd').textContent = v;
    dl.append(d);
  });
  hero.append(hi);
  caseBody.append(hero);

  const content = document.createElement('div');
  content.className = 'case-content wrap';
  const blocks = document.createElement('div');
  blocks.className = 'case-blocks';
  it.blocks.forEach(b => {
    if (b.h) { const e = document.createElement('h3'); e.textContent = b.h; blocks.append(e); }
    if (b.p) { const e = document.createElement('p'); e.textContent = b.p; blocks.append(e); }
    if ('video' in b) blocks.append(videoBlock(b));
    if (b.ul) {
      const ul = document.createElement('ul');
      b.ul.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.append(li); });
      blocks.append(ul);
    }
  });
  content.append(blocks);

  const prev = INFO[(i - 1 + INFO.length) % INFO.length], next = INFO[(i + 1) % INFO.length];
  const nav = document.createElement('nav');
  nav.className = 'case-nav';
  nav.innerHTML = '<button type="button" data-go="-1"><span>Предыдущая</span><b></b></button><button type="button" data-go="1"><span>Следующая</span><b></b></button>';
  nav.querySelector('[data-go="-1"] b').textContent = prev.title;
  nav.querySelector('[data-go="1"] b').textContent = next.title;
  content.append(nav);

  const cta = document.createElement('div');
  cta.className = 'case-cta';
  cta.innerHTML = '<p>Остались вопросы? Позвоните мастеру: он ответит и назовёт цену после осмотра.</p><a class="btn" href="tel:+79772700058">Позвонить +7 977 270-00-58</a>';
  content.append(cta);
  caseBody.append(content);
  caseEl.querySelector('.case-scroll').scrollTop = 0;
}

function openCase(i, opener, kind) {
  caseKind = kind || 'work';
  caseOpener = opener;
  renderCase(i);
  const r = opener.getBoundingClientRect();
  const vw = innerWidth, vh = innerHeight;
  caseEl.hidden = false;
  caseEl.style.transition = 'none';
  caseEl.style.clipPath = 'inset(' + r.top + 'px ' + (vw - r.right) + 'px ' + (vh - r.bottom) + 'px ' + r.left + 'px round 20px)';
  caseEl.style.opacity = '1';
  void caseEl.offsetWidth;
  caseEl.style.transition = '';
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => {
    caseEl.classList.add('open');
    caseEl.style.clipPath = 'inset(0px 0px 0px 0px round 0px)';
  });
  caseEl.querySelector('.case-close').focus({ preventScroll: true });
}
function closeCase() {
  if (caseEl.hidden || caseClosing) return;
  caseClosing = true;
  const op = document.querySelector(caseSel(caseIdx)) || caseOpener;
  const r = op.getBoundingClientRect();
  const vw = innerWidth, vh = innerHeight;
  caseEl.classList.remove('open');
  const visible = r.bottom > 0 && r.top < vh;
  caseEl.style.clipPath = visible
    ? 'inset(' + r.top + 'px ' + (vw - r.right) + 'px ' + (vh - r.bottom) + 'px ' + r.left + 'px round 20px)'
    : 'inset(50% 50% 50% 50% round 20px)';
  setTimeout(() => {
    caseEl.hidden = true;
    caseEl.style.clipPath = '';
    document.body.classList.remove('no-scroll');
    caseClosing = false;
    op.focus({ preventScroll: true });
  }, 520);
}
wg.addEventListener('click', e => {
  const t = e.target.closest('.work[data-idx]');
  if (t) openCase(+t.dataset.idx, t, 'work');
});
ig.addEventListener('click', e => {
  const t = e.target.closest('.info-card[data-idx]');
  if (t) openCase(+t.dataset.idx, t, 'info');
});
caseEl.addEventListener('click', e => {
  if (e.target.closest('.case-close')) return closeCase();
  const go = e.target.closest('[data-go]');
  if (go) renderCase((caseIdx + +go.dataset.go + caseList().length) % caseList().length);
});
document.addEventListener('keydown', e => {
  if (caseEl.hidden || !document.getElementById('lb').hidden) return;
  if (e.key === 'Escape') closeCase();
  if (caseKind === 'info' && e.key === 'ArrowRight') renderCase((caseIdx + 1) % caseList().length);
  if (caseKind === 'info' && e.key === 'ArrowLeft') renderCase((caseIdx - 1 + caseList().length) % caseList().length);
});

/* ---------- Навигация ---------- */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const links = document.getElementById('navLinks');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
});

/* ---------- Появление при скролле ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Кнопка звонка скрывается на блоке записи и контактов ---------- */
const fab = document.getElementById('dial');
const fabHide = new IntersectionObserver(es => {
  es.forEach(e => { e.target.dataset.vis = e.isIntersecting ? '1' : ''; });
  const hide = [...document.querySelectorAll('#booking,#contacts')].some(s => s.dataset.vis);
  fab.style.opacity = hide ? '0' : '';
  fab.style.pointerEvents = hide ? 'none' : '';
}, { threshold: 0.15 });
document.querySelectorAll('#booking,#contacts').forEach(s => fabHide.observe(s));

/* ---------- Линия прогресса в «Как работаю» ---------- */
const steps = document.getElementById('steps');
new IntersectionObserver((es, o) => {
  if (es[0].isIntersecting) { steps.style.setProperty('--progress', '100%'); o.disconnect(); }
}, { threshold: 0.3 }).observe(steps);

/* ---------- Мобильная плашка записи ---------- */
const dial = document.getElementById('dial');
const dialToggle = document.getElementById('dialToggle');
const dialBackdrop = document.getElementById('dialBackdrop');
function setDial(open) {
  dial.classList.toggle('open', open);
  dialToggle.setAttribute('aria-expanded', open);
  dialToggle.setAttribute('aria-label', open ? 'Закрыть' : 'Записаться');
  if (open) { dialBackdrop.hidden = false; requestAnimationFrame(() => dialBackdrop.classList.add('on')); }
  else { dialBackdrop.classList.remove('on'); setTimeout(() => { if (!dial.classList.contains('open')) dialBackdrop.hidden = true; }, 400); }
}
dialToggle.addEventListener('click', () => setDial(!dial.classList.contains('open')));
dialBackdrop.addEventListener('click', () => setDial(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setDial(false); });
document.getElementById('dialItems').addEventListener('click', e => { if (e.target.closest('a')) setDial(false); });

/* ---------- Просмотр фото: листание и приближение ---------- */
const lb = document.getElementById('lb');
const lbStage = document.getElementById('lbStage');
const lbImg = document.getElementById('lbImg');
let lbList = [], lbIdx = 0, lbSc = 1, lbTx = 0, lbTy = 0, lbLast = null;
const LB_MAX = 5;
function lbApply() {
  lbImg.style.transform = 'translate(' + lbTx + 'px,' + lbTy + 'px) scale(' + lbSc + ')';
  lbStage.classList.toggle('zoomed', lbSc > 1.01);
}
function lbClamp() {
  const r = lbStage.getBoundingClientRect();
  const mx = Math.max(0, (lbImg.clientWidth * lbSc - r.width) / 2);
  const my = Math.max(0, (lbImg.clientHeight * lbSc - r.height) / 2);
  lbTx = Math.max(-mx, Math.min(mx, lbTx));
  lbTy = Math.max(-my, Math.min(my, lbTy));
}
function lbZoomAt(ns, cx, cy) {
  ns = Math.max(1, Math.min(LB_MAX, ns));
  const k = ns / lbSc;
  lbTx = cx - (cx - lbTx) * k;
  lbTy = cy - (cy - lbTy) * k;
  lbSc = ns;
  if (lbSc <= 1.001) { lbSc = 1; lbTx = 0; lbTy = 0; }
  lbClamp();
  lbApply();
}
function lbCenter(e) {
  const r = lbStage.getBoundingClientRect();
  return [e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)];
}
function lbShow(i) {
  lbIdx = (i + lbList.length) % lbList.length;
  const it = lbList[lbIdx];
  lbSc = 1; lbTx = 0; lbTy = 0; lbApply();
  lbImg.src = it.src;
  lbImg.alt = it.cap || '';
  document.getElementById('lbCount').textContent = (lbIdx + 1) + ' / ' + lbList.length;
  [lbIdx - 1, lbIdx + 1].forEach(n => { const p = lbList[(n + lbList.length) % lbList.length]; if (p) new Image().src = p.src; });
  const many = lbList.length > 1;
  const dotsEl = document.getElementById('lbDots');
  if (dotsEl.children.length !== lbList.length) {
    dotsEl.innerHTML = '';
    lbList.forEach((_, d) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Фото ' + (d + 1));
      b.addEventListener('click', () => lbShow(d));
      dotsEl.append(b);
    });
  }
  dotsEl.hidden = !many;
  dotsEl.querySelectorAll('button').forEach((b, d) => b.classList.toggle('on', d === lbIdx));
  document.getElementById('lbPrev').hidden = !many;
  document.getElementById('lbNext').hidden = !many;
}
function openLightbox(list, i) {
  if (!list.length) return;
  lbList = list;
  lb.hidden = false;
  lbShow(i);
  document.getElementById('lbClose').focus({ preventScroll: true });
}
function closeLightbox() {
  lb.hidden = true;
  lbImg.removeAttribute('src');
}
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => lbShow(lbIdx - 1));
document.getElementById('lbNext').addEventListener('click', () => lbShow(lbIdx + 1));
document.getElementById('lbZoomIn').addEventListener('click', () => lbZoomAt(lbSc * 1.6, 0, 0));
document.getElementById('lbZoomOut').addEventListener('click', () => lbZoomAt(lbSc / 1.6, 0, 0));
lb.addEventListener('keydown', e => {
  if (e.key === 'Escape') { e.stopPropagation(); closeLightbox(); }
  if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
  if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
  if (e.key === '+' || e.key === '=') lbZoomAt(lbSc * 1.4, 0, 0);
  if (e.key === '-') lbZoomAt(lbSc / 1.4, 0, 0);
});
document.addEventListener('keydown', e => { if (!lb.hidden && e.key === 'Escape') closeLightbox(); });
lbStage.addEventListener('wheel', e => {
  e.preventDefault();
  const [cx, cy] = lbCenter(e);
  lbZoomAt(lbSc * (e.deltaY < 0 ? 1.18 : 1 / 1.18), cx, cy);
}, { passive: false });
lbStage.addEventListener('dblclick', e => {
  const [cx, cy] = lbCenter(e);
  lbZoomAt(lbSc > 1.01 ? 1 : 2.6, cx, cy);
});
const lbPtrs = new Map();
let lbPinch = null, lbStartX = 0, lbMoved = false, lbTapT = 0;
lbStage.addEventListener('pointerdown', e => {
  lbStage.setPointerCapture(e.pointerId);
  lbPtrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  lbMoved = false;
  lbStartX = e.clientX;
  if (lbPtrs.size === 2) {
    const [a, b] = [...lbPtrs.values()];
    lbPinch = { d: Math.hypot(a.x - b.x, a.y - b.y), sc: lbSc };
  }
});
lbStage.addEventListener('pointermove', e => {
  const p = lbPtrs.get(e.pointerId);
  if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY;
  if (lbPtrs.size === 2 && lbPinch) {
    const [a, b] = [...lbPtrs.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    const r = lbStage.getBoundingClientRect();
    lbZoomAt(lbPinch.sc * d / lbPinch.d, (a.x + b.x) / 2 - (r.left + r.width / 2), (a.y + b.y) / 2 - (r.top + r.height / 2));
    lbMoved = true;
  } else if (lbSc > 1.01) {
    lbTx += dx; lbTy += dy; lbClamp(); lbApply(); lbMoved = true;
  } else if (Math.abs(e.clientX - lbStartX) > 8) { lbMoved = true; }
});
function lbEnd(e) {
  const had = lbPtrs.has(e.pointerId);
  lbPtrs.delete(e.pointerId);
  if (lbPtrs.size < 2) lbPinch = null;
  if (!had) return;
  if (lbPtrs.size === 0 && lbSc <= 1.01 && !lbPinch) {
    const dx = e.clientX - lbStartX;
    if (Math.abs(dx) > 60) { lbShow(lbIdx + (dx < 0 ? 1 : -1)); return; }
    if (!lbMoved && e.pointerType === 'touch') {
      const now = Date.now();
      if (now - lbTapT < 300) { const [cx, cy] = lbCenter(e); lbZoomAt(2.6, cx, cy); lbTapT = 0; } else lbTapT = now;
    }
  } else if (lbPtrs.size === 0 && lbSc > 1.01 && !lbMoved && e.pointerType === 'touch') {
    const now = Date.now();
    if (now - lbTapT < 300) { lbZoomAt(1, 0, 0); lbTapT = 0; } else lbTapT = now;
  }
}
lbStage.addEventListener('pointerup', lbEnd);
lbStage.addEventListener('pointercancel', lbEnd);
