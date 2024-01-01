/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IDescription } from "../context/interface";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const applyTheme = (theme: Record<string, any>) => {
  const mappedTheme = createTheme(theme);
  const root = document.documentElement;
  Object.keys(mappedTheme)?.forEach((cssVar) => {
    root.style.setProperty(cssVar, (mappedTheme as any)[cssVar]);
  });
};

export const createTheme = (theme: Record<string, any>) => {
  return {
    "--theme-primary-dark": theme?.primaryDark,
    "--theme-primary-light": theme?.primaryLight,
    "--theme-on-primary": theme?.onPrimary,
    "--theme-on-secondary": theme?.onSecondary,
    "--theme-secondary-dark": theme?.secondaryDark,
    "--theme-secondary-light": theme?.secondaryLight,
    "--theme-hero": `url(${theme?.hero})`,
  };
};

const mapDecoratedTagWithText = (literal: string[]) => {
  switch (literal[0]) {
    case "b":
      return `<b>${literal[1]}</b>`;
    case "i":
      return `<i>${literal[1]}</i>`;
    case "l":
      return `<a className="text-secondary-dark font-bold underline" href=${literal[2]} target="_black" rel="noreferrer">${literal[1]}</a>`;
    default:
      "";
  }
  return "";
};

export const prepareDecoratedText = (description: IDescription) => {
  if (!description?.literals?.length) return description?.values;
  let finalDescription = description?.values;
  description?.literals?.forEach((literal: string[], index: number) => {
    const text = finalDescription?.replace(
      `$${index + 1}`,
      mapDecoratedTagWithText(literal)!,
    );
    finalDescription = text;
  });
  return finalDescription;
};
