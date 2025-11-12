# Zisti o sebe viac - Webová Aplikácia

Interaktívna webová aplikácia na zistenie, ako najlepšie vyjadrujete starostlivosť o druhých. Test vychádza z konceptu 5 jazykov lásky Gary Chapmana, adaptovaný pre všeobecné vzťahy (priateľstvá, rodina, blízki ľudia). Aplikácia je plne responzívna s príjemným dizajnom a capybara pozadím.

## Funkcie

- 30 interaktívnych otázok
- Progress bar na sledovanie pokroku
- Automatické vyhodnotenie výsledkov
- Zobrazenie dominantného spôsobu vyjadrovania
- Percentuálne rozloženie všetkých 5 spôsobov
- Plne responzívny dizajn (mobile-first)
- Jemný capybara pattern na pozadí

## 5 Spôsobov vyjadrovania starostlivosti

1. **Slová povzbudenia** 💬 - Pochvaly a povzbudzujúce slová
2. **Spoločný čas** ⏰ - Kvalitný čas strávený spolu
3. **Darčeky a pozornosti** 🎁 - Darčeky ako symboly starostlivosti
4. **Pomoc a podpora** 🤝 - Pomoc s praktickými vecami
5. **Fyzický kontakt** 🤗 - Objatia a priateľský dotyk

## Technológie

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Lokálne spustenie

### Prerekvizity

- Node.js 18+
- npm alebo yarn

### Inštalácia

1. Nainštalujte závislosti:
```bash
npm install
```

2. Spustite vývojový server:
```bash
npm run dev
```

3. Otvorte [http://localhost:3000](http://localhost:3000) vo vašom prehliadači

## Deployment na Vercel

### Jednoduchý spôsob (Recommended)

1. Pushnutie projektu na GitHub
2. Prejdite na [vercel.com](https://vercel.com)
3. Kliknite na "New Project"
4. Importujte váš GitHub repozitár
5. Vercel automaticky detekuje Next.js a nastaví build konfiguráciu
6. Kliknite na "Deploy"

### CLI spôsob

1. Nainštalujte Vercel CLI:
```bash
npm install -g vercel
```

2. Prihlás sa do Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

## Štruktúra projektu

```
test5foriem/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Úvodná stránka
│   ├── globals.css         # Globálne štýly + capybara pattern
│   ├── test/
│   │   └── page.tsx        # Testovacia stránka
│   └── results/
│       └── page.tsx        # Výsledková stránka
├── lib/
│   ├── types.ts            # TypeScript typy
│   ├── questions.ts        # Databáza 30 otázok
│   └── languageDescriptions.ts  # Popisy spôsobov vyjadrovania
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Build pre produkciu

```bash
npm run build
npm start
```

## Licencia

Tento projekt je vytvorený pre vzdelávacie účely.

## Autor

Test vychádza z konceptu "5 jazykov lásky" od Gary Chapmana, adaptovaný pre všeobecné vzťahy.
Webová implementácia: [Vaše meno]

---

Užite si objavovanie seba! ✨
