export const randomFloat = (min, max) => Math.random() * (max - min) + min;
export const randomInt = (min, max) => Math.floor(randomFloat(min, max + 1));
export const pick = (items) => items[randomInt(0, items.length - 1)];
export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
export const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = randomInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
export const weightedPick = (entries) => {
  const total = entries.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = randomFloat(0, total);
  for (const entry of entries) {
    roll -= entry.weight;
    if (roll <= 0) return entry.value;
  }
  return entries.at(-1).value;
};
