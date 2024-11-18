import { faCrosshairs, faFirstAid, faCog } from "@fortawesome/free-solid-svg-icons";

export const items = [
  { type: 'Weapon', rarity: 'Epic', count: 1, icon: faCrosshairs },
  { type: 'Weapon', rarity: 'Rare', count: 2, icon: faCrosshairs },
  { type: 'Consumable', rarity: 'Common', count: 5, icon: faFirstAid },
  { type: 'Consumable', rarity: 'Rare', count: 3, icon: faFirstAid },
  { type: 'Material', rarity: 'Legendary', count: 1, icon: faCog },
  { type: 'Material', rarity: 'Common', count: 10, icon: faCog },
];
