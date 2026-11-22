# UniWorld — haftalik ko‘rib chiqish va ish rejasi

## 2026-yil 16–22-noyabr: bajarilgan ishlar

19-noyabr kuni \`home-page-2-foundation\` branch’ida 12 ta commit bajarilgan. Natijada yangi bosh sahifa, dizayn tizimi va Campus, Discover, Opportunities, UniWorld Guide hamda Profile sahifalarining dastlabki tuzilmasi yaratildi. Bosh sahifa bo‘limlarga ulandi, mobil menyu va to‘rt tilli bosh sahifa mexanizmi qo‘shildi.

### Ushbu haftalik ko‘rib chiqishda qo‘shimcha bajarilgan ishlar

- Ichki besh sahifaning matnlari qoraqalpoqcha, o‘zbekcha, inglizcha va mavjud ruscha til uchun tayyorlandi.
- Til tanlovi brauzerda saqlanadi va sahifalar orasida davom etadi.
- Campus sahifasiga ishlaydigan qidiruv va kategoriya filtri qo‘shildi.
- Qidiruv natijasi bo‘lmasa, alohida xabar chiqadi.
- Guide formasiga bo‘sh savolni tekshirish va mahalliy tasdiq xabari qo‘shildi. Savol AI xizmatiga yuborilmaydi.
- Profile havolasi bosh sahifa navigatsiyasiga qo‘shildi.
- Mobil menyu uchun aria holati, Escape tugmasi bilan yopish va fokus ko‘rinishlari yaxshilandi.
- Bajarilgan ishlar va keyingi reja ushbu hujjatga yozildi.

### Qisqa baho

**Yaxshi:** loyiha Campus-first yo‘nalishini saqlagan holda mustaqil talabalar platformasi sifatida shakllanmoqda. HTML/CSS/JavaScript kodi saqlandi. Til almashtirish va Campus filtrlari endi faqat ko‘rinish emas, amalda ishlaydigan frontend funksiyalaridir.

**Hali bajarilmagan:** brauzerda telefon va kompyuter orqali qo‘lda vizual sinov o‘tkazilmadi. Qoraqalpoqcha matnlarni ona tilida so‘zlashuvchi bilan tekshirish kerak. Haqiqiy Campus postlari, login, profilni saqlash, umumiy izohlar va AI uchun backend hamda ma’lumotlar bazasi hali yo‘q.

## 2026-yil 23–29-noyabr: keyingi hafta rejasi

### 1. Saytni telefon va kompyuterda sinash
1. Bosh sahifa va beshta ichki sahifani ochish.
2. Har bir sahifada qoraqalpoqcha, o‘zbekcha, inglizcha va ruscha tillarni navbat bilan tanlash.
3. Boshqa sahifaga o‘tib, tanlangan til saqlanganini tekshirish.
4. Telefon ekranida menyu, kartalar va formalarni tekshirish.
5. Xato topilsa, avval qaysi sahifa va qaysi tilda ekanini yozib, keyin bitta-bitta tuzatish.

**Tayyor bo‘lish mezoni:** asosiy sahifalar telefon va kompyuterda ochiladi, til almashtirish va Campus filtri xatosiz ishlaydi.

### 2. Qoraqalpoqcha matnlarni til jihatdan tekshirish
1. Campus va menyudagi matnlarni alohida ro‘yxatga olish.
2. Imlo va tabiiy ifodalarni qoraqalpoq tilini yaxshi biladigan inson bilan ko‘rib chiqish.
3. Tasdiqlangan tuzatishlarni tarjima lug‘atiga kiritish.

**Tayyor bo‘lish mezoni:** asosiy interfeys matnlari tushunarli va tabiiy qoraqalpoq tilida bo‘ladi.

### 3. Campus pilotining aniq qoidalarini tayyorlash
1. Post maydonlarini belgilash: sarlavha, kategoriya, matn, muallif, sana va ixtiyoriy rasm.
2. Tadbir maydonlarini belgilash: tashkilotchi, joy, sana, ro‘yxatdan o‘tish havolasi va rasmiy manba.
3. Postni tekshirish, rad etish va shikoyat qilish tartibini yozish.
4. Dastlabki pilotda qaysi kontentni qabul qilishni aniqlash.

**Tayyor bo‘lish mezoni:** backend yozilishidan oldin Campus uchun ma’lumot modeli va moderatsiya qoidalari tayyor bo‘ladi.

### 4. Backend variantini tanlashga tayyorgarlik
1. Supabase va Node.js + PostgreSQL variantlarini sodda tilda solishtirish.
2. Login, profil, postlar va izohlar uchun kerakli ma’lumotlarni ro‘yxatlash.
3. Har bir variantning xavfsizlik, narx va boshqarish murakkabligini baholash.
4. Tanlovni foydalanuvchi bilan kelishmasdan ulab yubormaslik.

**Tayyor bo‘lish mezoni:** qaysi backend tanlanishi va nima sababdan tanlanishi haqida qisqa qaror hujjati bo‘ladi.

### 5. Xavfsizlik talablarini yozib chiqish
1. API maxfiy kalitlari faqat serverda saqlanishini belgilash.
2. Profil ma’lumotlarini faqat egasi ko‘ra olishi va o‘zgartira olishi kerakligini yozish.
3. Postlar uchun tekshirish, spamdan himoya va shikoyat qilish talablarini belgilash.
4. Foydalanuvchining fotosurati majburiy bo‘lmasligini saqlash.

**Tayyor bo‘lish mezoni:** backend ishga tushishidan oldin maxfiylik va xavfsizlik talablari yozma ko‘rinishda bo‘ladi.

## Ishlash tartibi

- Ishni \`home-page-2-foundation\` branch’ida davom ettirish; \`main\` branch’ga ruxsatsiz merge qilmaslik.
- Har bir kichik o‘zgarishdan keyin brauzerda tekshirish.
- Yangi boshlovchi uchun vazifalarni bitta fayl va bitta kichik qadamdan bajarish.
- Haqiqiy ma’lumot, rasm, grant yoki tadbirni faqat tekshirilgan manba bilan qo‘shish.
- Backend ulanmaguncha login, post joylash, umumiy izohlar va AI ishlayapti deb ko‘rsatmaslik.
