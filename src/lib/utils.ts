export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function assetPath(path: string): string {
  const basePath = "/ARCHI-S_BEAUTY_CARE";
  return `${basePath}${path}`;
}
