export type Gender = 'male' | 'female';

/**
 * Kapitalizuje prvé písmeno textu
 */
function capitalize(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Upraví text otázky podľa zvoleného pohlavia
 * Nahradí výrazy ako rád/rada, milovaný/á atď.
 * Nahradí osobné zámená na partnera/partnerku
 */
export function applyGender(text: string, gender: Gender): string {
  let result: string;

  if (gender === 'male') {
    // Pre muža: partner → partnerka (ženský rod)
    result = text
      // Osobné rody
      .replace(/rád\/rada/gi, 'rád')
      .replace(/milovaný\/á/g, 'milovaný')
      .replace(/naplnený\/á/g, 'naplnený')
      .replace(/príťažlivý\/á/g, 'príťažlivý')
      .replace(/objal\/a/g, 'objal')
      .replace(/pomohol\/la/g, 'pomohol')
      .replace(/požiadal\/a/g, 'požiadal')
      .replace(/rozhodol\/la/g, 'rozhodol')
      .replace(/som rád\/rada/gi, 'som rád')
      .replace(/takého\/takú aký\/aká/g, 'takého aký')
      .replace(/takého\/takú/g, 'takého')
      .replace(/aký\/aká/g, 'aký')
      .replace(/urobil\/la/g, 'urobil')
      .replace(/vyrobil\/la/g, 'vyrobil')
      .replace(/sama\/sám/g, 'sám')
      // Zámená → partnerka (ženský rod pre muža)
      .replace(/od partnera\/partnerky/g, 'od partnerky')
      .replace(/s partnerom\/partnerkou/g, 's partnerkou')
      .replace(/partner\/ka/g, 'partnerka')
      .replace(/partnerom\/partnerkou/g, 'partnerkou')
      .replace(/partnera\/partnerky/g, 'partnerky');
  } else {
    // Pre ženu: partner → partner (mužský rod)
    result = text
      // Osobné rody
      .replace(/rád\/rada/gi, 'rada')
      .replace(/milovaný\/á/g, 'milovaná')
      .replace(/naplnený\/á/g, 'naplnená')
      .replace(/príťažlivý\/á/g, 'príťažlivá')
      .replace(/objal\/a/g, 'objala')
      .replace(/pomohol\/la/g, 'pomohla')
      .replace(/požiadal\/a/g, 'požiadala')
      .replace(/rozhodol\/la/g, 'rozhodla')
      .replace(/som rád\/rada/gi, 'som rada')
      .replace(/takého\/takú aký\/aká/g, 'takú aká')
      .replace(/takého\/takú/g, 'takú')
      .replace(/aký\/aká/g, 'aká')
      .replace(/urobil\/la/g, 'urobila')
      .replace(/vyrobil\/la/g, 'vyrobila')
      .replace(/sama\/sám/g, 'sama')
      // Zámená → partner (mužský rod pre ženu)
      .replace(/od partnera\/partnerky/g, 'od partnera')
      .replace(/s partnerom\/partnerkou/g, 's partnerom')
      .replace(/partner\/ka/g, 'partner')
      .replace(/partnerom\/partnerkou/g, 'partnerom')
      .replace(/partnera\/partnerky/g, 'partnera');
  }

  // Vráť text s veľkým prvým písmenom
  return capitalize(result);
}
