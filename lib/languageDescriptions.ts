import { LoveLanguage, LanguageInfo } from './types';

export const languageDescriptions: Record<LoveLanguage, LanguageInfo> = {
  A: {
    name: 'Slová uistenia',
    description: 'Pre teba sú najdôležitejšie slovné vyjadrenia lásky, komplimenty a povzbudzujúce slová. Pochvala a uznanie ťa napĺňajú energiou a cítiš sa milovaný/á, keď ti partner/ka povie, ako veľmi ťa má rád/rada.',
    icon: '💬'
  },
  B: {
    name: 'Pozornosť',
    description: 'Túžiš po nedelenom čase strávenom s milovanou osobou. Pre teba nie je dôležité, čo robíte, ale že to robíte spolu. Kvalitný čas, nerozptýlená pozornosť a spoločné zážitky sú pre teba najcennejšie.',
    icon: '⏰'
  },
  C: {
    name: 'Prijímanie darov',
    description: 'Dary sú pre teba viditeľnými symbolmi lásky. Nejde o materiálnu hodnotu, ale o to, že si sa rozhodol/la myslieť na teba. Každý darček, veľký či malý, je pre teba dôkazom, že na teba niekto myslí.',
    icon: '🎁'
  },
  D: {
    name: 'Akt služby',
    description: 'Cítiš sa milovaný/á, keď ti niekto pomôže s praktickými vecami. Keď ti partner/ka uľahčí život tým, že ti pomôže s úlohami alebo niečo pre teba urobí, je to pre teba najvýraznejším prejavom lásky.',
    icon: '🤝'
  },
  E: {
    name: 'Fyzický dotyk',
    description: 'Fyzická blízkosť, objatia, bozky a držanie sa za ruky sú pre teba nevyhnutné. Cítiš sa milovaný/á cez fyzický kontakt a dotyk je pre teba najsilnejším prejavom emocionálneho spojenia.',
    icon: '🤗'
  }
};

export function getDominantLanguage(results: Record<LoveLanguage, number>): LoveLanguage {
  return (Object.entries(results) as [LoveLanguage, number][])
    .reduce((max, current) => current[1] > max[1] ? current : max)[0];
}
