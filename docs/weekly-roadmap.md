# UniWorld — haftalik ko‘rib chiqish va ish rejasi

## 2026-yil 16–22-noyabr: bajarilgan ishlar

19-noyabr kuni \`home-page-2-foundation\` branch’ida 12 ta commit bajarilgan. Natijada:

- yangi \`index-v2.html\` bosh sahifasi va unga mos dizayn tizimi yaratildi;
- Campus, Discover, Opportunities, UniWorld Guide va Profile sahifalarining dastlabki tuzilmasi qo‘shildi;
- bosh sahifadagi havolalar yangi bo‘limlarga ulandi;
- mobil menyu va til tanlash mexanizmi bosh sahifaga qo‘shildi;
- tekshirilmagan statistika, soxta grantlar va haqiqiy bo‘lmagan postlardan foydalanilmadi;
- barcha ishlar alohida branch va draft PR’da saqlandi; \`main\` branch o‘zgartirilmadi.

### Qisqa baho

**Yaxshi:** loyiha oddiy universitet saytidan talabalar uchun mustaqil platforma yo‘nalishiga o‘tdi. Campus birinchi ustun sifatida belgilandi. Mavjud HTML/CSS/JavaScript yondashuvi saqlandi.

**Kamchiliklar:** ichki sahifalardagi til tanlash matnlarni almashtirmas edi; ayrim sahifalar faqat inglizcha ko‘rinishda edi. Campus qidiruvi va filtrlari ishlamas edi. Guide formasi haqiqiy AI xizmatiga ulanmagan. Profil, postlar va izohlar uchun server hamda ma’lumotlar bazasi yo‘q.

## 2026-yil 23–29-noyabr: keyingi hafta rejasi

### 1. Uch asosiy tilni barcha ichki sahifalarda tekshirish
1. Campus, Discover, Opportunities, Guide va Profile sahifalarida til tanlagichni sinash.
2. Qoraqalpoqcha, o‘zbekcha va inglizcha matnlarni ko‘zdan kechirish.
3. Mavjud ruscha tanlov ham buzilmaganini tekshirish.
4. Til tanlovi sahifalar orasida saqlanishini telefon va kompyuterda tekshirish.

**Tayyor bo‘lish mezoni:** sahifa sarlavhasi, menyu, matnlar, forma va izohlar tanlangan tilga o‘tadi.

### 2. Campus-first pilotini aniqlashtirish
1. Pilot uchun asosiy kategoriyalarni belgilash: talabalar loyihalari, kampus tadbirlari, hamjamiyat.
2. Post maydonlarini yozish: sarlavha, kategoriya, matn, muallif, sana va ixtiyoriy rasm.
3. Tadbir maydonlarini yozish: tashkilotchi, joy, sana, ro‘yxatdan o‘tish havolasi va rasmiy manba.
4. E’lonni tekshirish, rad etish va shikoyat qilish tartibini hujjatlashtirish.

**Tayyor bo‘lish mezoni:** backend yozilishidan oldin Campus uchun aniq ma’lumot modeli va moderatsiya qoidalari mavjud bo‘ladi.

### 3. Mobil qulaylik va foydalanish imkoniyatlarini tekshirish
1. Telefon ekranida menyuni ochish va yopish.
2. Klaviatura orqali menyu va formadan foydalanish.
3. Tugmalar, til tanlagich va matn maydonlarida fokus ko‘rinishini tekshirish.
4. Sahifalarda gorizontal siljish yo‘qligini tekshirish.

**Tayyor bo‘lish mezoni:** asosiy sahifalar tor ekranda qulay o‘qiladi va menyu klaviatura bilan ham boshqariladi.

### 4. Backend uchun xavfsiz tayyorgarlik
1. Supabase va Node.js server variantlarini sodda tilda solishtirish.
2. Login, profil, postlar va izohlar uchun saqlanadigan ma’lumotlar ro‘yxatini tuzish.
3. API maxfiy kalitlarini HTML yoki brauzer JavaScript ichiga joylamaslik.
4. Hech qanday backend xizmatini tasdiqsiz ulmaslik.

**Tayyor bo‘lish mezoni:** backend tanlovi, xavfsizlik talablari va keyingi bosqichlar bo‘yicha qisqa qaror hujjati tayyor bo‘ladi.

## Ishlash tartibi

- Ishni \`home-page-2-foundation\` branch’ida davom ettirish; \`main\` branch’ga ruxsatsiz merge qilmaslik.
- Har bir kichik o‘zgarishdan keyin brauzerda tekshirish.
- Yangi boshlovchi uchun vazifalarni bitta fayl va bitta kichik qadamdan bajarish.
- Haqiqiy ma’lumot, rasm, grant yoki tadbirni faqat tekshirilgan manba bilan qo‘shish.
- Backend ulanmaguncha login, post joylash, umumiy izohlar va AI ishlayapti deb ko‘rsatmaslik.
