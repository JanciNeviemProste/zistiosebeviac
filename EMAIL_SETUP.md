# Nastavenie e-mailových notifikácií

Po dokončení testu sa výsledky automaticky posielajú na tvoj e-mail pomocou Resend.

## 🚀 Rýchle nastavenie (5 minút)

### 1. Registrácia na Resend

1. Choď na [resend.com](https://resend.com)
2. Zaregistruj sa (zdarma - 100 emailov/deň)
3. Potvrď e-mail

### 2. Získanie API kľúča

1. Po prihlásení choď na [API Keys](https://resend.com/api-keys)
2. Klikni na **"Create API Key"**
3. Daj mu názov (napr. "Test 5 Jazykov Lásky")
4. Skopíruj API kľúč (začína s `re_...`)

### 3. Lokálne testovanie

Vytvor súbor `.env.local` v root priečinku projektu:

```bash
RESEND_API_KEY=re_tvoj_api_kluc_tu
RECIPIENT_EMAIL=tvoj-email@example.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Reštartuj dev server:
```bash
npm run dev
```

### 4. Deployment na Vercel

1. Choď na [vercel.com](https://vercel.com) do svojho projektu
2. Settings → Environment Variables
3. Pridaj tieto premenné:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_tvoj_api_kluc_tu` |
| `RECIPIENT_EMAIL` | `tvoj-email@example.com` |
| `NEXT_PUBLIC_APP_URL` | `https://zistiosebeviac.vercel.app` |

4. Klikni **Save**
5. Redeploy aplikáciu (Deployments → ... → Redeploy)

## ✅ Overenie funkčnosti

1. Otvor aplikáciu
2. Vyplň test
3. Po dokončení skontroluj svoj e-mail
4. Malo by prísť: **"Nový výsledok testu: [Dominantný jazyk] 🦫"**

## 📧 Čo obsahuje e-mail?

- Dátum a čas testu
- Pohlavie testovaného
- **Dominantný jazyk lásky** (s popisom a skóre)
- Kompletné rozloženie všetkých 5 jazykov (s percentami)
- Pekný dizajn s capybara motívom 🦫

## ⚠️ Dôležité poznámky

- **API kľúč NIKDY nedávaj do git commitu!** (je v `.gitignore`)
- Free tier: 100 emailov/deň (postačuje pre väčšinu použití)
- E-maily prídu z `onboarding@resend.dev` (môžeš zmeniť na vlastnú doménu)

## 🔧 Troubleshooting

### E-mail neprišiel?

1. Skontroluj spam folder
2. Overte API kľúč v Vercel Environment Variables
3. Skontroluj Vercel logs: Deployments → Function Logs
4. Overte, že `RECIPIENT_EMAIL` je správny

### Chcem použiť vlastnú doménu pre e-maily?

1. V Resend → Domains → Add Domain
2. Pridaj DNS záznamy
3. V `app/api/send-results/route.ts` zmeň `from:` na `from: 'Test <test@tvoja-domena.com>'`

## 💡 Bonusové funkcie

Ak chceš rozšíriť funkcionalitu:

- **Notifikácia užívateľovi**: Pridaj pole pre e-mail užívateľa a pošli mu výsledky
- **Štatistiky**: Ukládaj výsledky do databázy (Supabase, MongoDB)
- **Export PDF**: Vygeneruj PDF s výsledkami
- **Webhook**: Pošli výsledky do Google Sheets alebo Notion

---

Enjoy! 🦫
