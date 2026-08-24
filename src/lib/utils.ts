type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
type ClassDictionary = Record<string, unknown>;
type ClassArray = ClassValue[];

function toVal(mix: ClassValue): string {
  let k = 0,
    y: string,
    str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      const len = mix.length;
      for (; k < len; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            if (str) str += " ";
            str += y;
          }
        }
      }
    } else {
      for (const key in mix) {
        if (mix && mix[key]) {
          if (str) str += " ";
          str += key;
        }
      }
    }
  }

  return str;
}

export function cn(...inputs: ClassValue[]): string {
  let i = 0,
    tmp: ClassValue,
    x: string,
    str = "";
  const len = inputs.length;
  for (; i < len; i++) {
    if ((tmp = inputs[i])) {
      if ((x = toVal(tmp))) {
        if (str) str += " ";
        str += x;
      }
    }
  }
  return str;
}
