export type Mods = Record<string, boolean | string | undefined> // special type constraining types of keys and values

export function classNames(
    mainClass: string,
    mods: Mods = {},
    additionalClasses: Array<string | undefined> = [],
): string {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ]
        .join(' ');
}
