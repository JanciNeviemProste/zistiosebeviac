import { LoveLanguage, LanguageInfo } from './types';

export const languageDescriptions: Record<LoveLanguage, LanguageInfo> = {
  A: {
    name: 'Slová povzbudenia',
    description: 'Pre teba sú najdôležitejšie slovné vyjadrenia, komplimenty a povzbudzujúce slová. Pochvala a uznanie ťa napĺňajú energiou a cítiš sa cenený/á, keď ti niekto povie niečo pekné alebo ocení tvoje úspechy.',
    icon: '💬'
  },
  B: {
    name: 'Spoločný čas',
    description: 'Túžiš po kvalitnom čase strávenom s blízkymi ľuďmi. Pre teba nie je dôležité, čo robíte, ale že to robíte spolu. Nedelená pozornosť a spoločné zážitky sú pre teba najcennejšie.',
    icon: '⏰'
  },
  C: {
    name: 'Darčeky a pozornosti',
    description: 'Dary a malé pozornosti sú pre teba viditeľnými symbolmi starostlivosti. Nejde o materiálnu hodnotu, ale o to, že niekto myslel na teba. Každý darček ti pripomenie, že si pre niekoho dôležitý/á.',
    icon: '🎁'
  },
  D: {
    name: 'Pomoc a podpora',
    description: 'Cítiš sa cenený/á, keď ti niekto pomôže s praktickými vecami. Keď ti blízka osoba uľahčí život tým, že ti pomôže s úlohami alebo niečo pre teba vybaví, je to pre teba najvýraznejší prejav starostlivosti.',
    icon: '🤝'
  },
  E: {
    name: 'Fyzický kontakt',
    description: 'Fyzická blízkosť, objatia a priateľský dotyk sú pre teba dôležité. Cítiš sa dobre cez fyzický kontakt - či už je to objatie, pohladenie po pleci alebo priateľský dotyk ruky.',
    icon: '🤗'
  }
};

export function getDominantLanguage(results: Record<LoveLanguage, number>): LoveLanguage {
  return (Object.entries(results) as [LoveLanguage, number][])
    .reduce((max, current) => current[1] > max[1] ? current : max)[0];
}
