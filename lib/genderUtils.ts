export type Gender = 'male' | 'female';

/**
 * Upraví text otázky podľa zvoleného pohlavia
 * Nahradí výrazy ako rád/rada, milovaný/á atď.
 */
export function applyGender(text: string, gender: Gender): string {
  if (gender === 'male') {
    return text
      .replace(/rád\/rada/gi, 'rád')
      .replace(/Rád\/rada/g, 'Rád')
      .replace(/milovaný\/á/g, 'milovaný')
      .replace(/naplnený\/á/g, 'naplnený')
      .replace(/príťažlivý\/á/g, 'príťažlivý')
      .replace(/objal\/a/g, 'objal')
      .replace(/pomohol\/la/g, 'pomohol')
      .replace(/požiadal\/a/g, 'požiadal')
      .replace(/rozhodol\/la/g, 'rozhodol')
      .replace(/Som rád\/rada/g, 'Som rád')
      .replace(/som rád\/rada/g, 'som rád')
      .replace(/takého\/takú aký\/aká/g, 'takého aký')
      .replace(/takého\/takú/g, 'takého')
      .replace(/aký\/aká/g, 'aký')
      .replace(/bezpečne/g, 'bezpečne')
      .replace(/urobil\/la/g, 'urobil')
      .replace(/vyrobil\/la/g, 'vyrobil')
      .replace(/vyrobíš/g, 'vyrobíš')
      .replace(/sama\/sám/g, 'sám')
      .replace(/Sama\/sám/g, 'Sám');
  } else {
    return text
      .replace(/rád\/rada/gi, 'rada')
      .replace(/Rád\/rada/g, 'Rada')
      .replace(/milovaný\/á/g, 'milovaná')
      .replace(/naplnený\/á/g, 'naplnená')
      .replace(/príťažlivý\/á/g, 'príťažlivá')
      .replace(/objal\/a/g, 'objala')
      .replace(/pomohol\/la/g, 'pomohla')
      .replace(/požiadal\/a/g, 'požiadala')
      .replace(/rozhodol\/la/g, 'rozhodla')
      .replace(/Som rád\/rada/g, 'Som rada')
      .replace(/som rád\/rada/g, 'som rada')
      .replace(/takého\/takú aký\/aká/g, 'takú aká')
      .replace(/takého\/takú/g, 'takú')
      .replace(/aký\/aká/g, 'aká')
      .replace(/bezpečne/g, 'bezpečne')
      .replace(/urobil\/la/g, 'urobila')
      .replace(/vyrobil\/la/g, 'vyrobila')
      .replace(/vyrobíš/g, 'vyrobíš')
      .replace(/sama\/sám/g, 'sama')
      .replace(/Sama\/sám/g, 'Sama');
  }
}
