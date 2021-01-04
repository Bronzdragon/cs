/* Concatenate classes */
export type csType = string | undefined | null | csType[]

export default function cs(...elements: csType[]) {
    return elements.flat(Infinity)
        .filter(Boolean)
        .join(" ")
        .trim()
        .replace(/\s+/g, " ")
}