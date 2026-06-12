export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const BASE_PATH = "/ARCHI-S_BEAUTY_CARE";

export function assetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith(BASE_PATH) || path.startsWith("http")) return path;
  if (path.startsWith("/")) return `${BASE_PATH}${path}`;
  return path;
}
