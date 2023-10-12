export const StringUtils = {
    isString: (value: any): value is string => {
        return typeof value === 'string'
    },
    isEmpty: (value: string): boolean => {
        return value === ''
    },
    trim : (value: string): string => {
        return value.trim()
    },
    length: (value: string): number => {
        return value.length
    },
    toUpperCase: (value: string): string => {
        return value.toUpperCase()
    },
    toLowerCase: (value: string): string => {
        return value.toLowerCase()
    },
    split: (value: string, separator: string): string[] => {
        return value.split(separator)
    },
    replace: (value: string, searchValue: string, replaceValue: string): string => {
        return value.replace(searchValue, replaceValue)
    },
    includes: (value: string, searchValue: string): boolean => {
        return value.includes(searchValue)
    },
    indexOf: (value: string, searchValue: string): number => {
        return value.indexOf(searchValue)
    },
    lastIndexOf: (value: string, searchValue: string): number => {
        return value.lastIndexOf(searchValue)
    },
    charAt: (value: string, index: number): string => {
        return value.charAt(index)
    },
    startsWith: (value: string, searchValue: string): boolean => {
        return value.startsWith(searchValue)
    },
    endsWith: (value: string, searchValue: string): boolean => {
        return value.endsWith(searchValue)
    },
    substring: (value: string, start: number, end?: number): string => {
        return value.substring(start, end)
    },
    slice: (value: string, start: number, end?: number): string => {
        return value.slice(start, end)
    },
    concat: (value: string, ...values: string[]): string => {
        return value.concat(...values)
    },
    repeat: (value: string, count: number): string => {
        return value.repeat(count)
    },
    match: (value: string, regexp: RegExp): RegExpMatchArray | null => {
        return value.match(regexp)
    },
    search: (value: string, regexp: RegExp): number => {
        return value.search(regexp)
    },
    padStart: (value: string, maxLength: number, fillString?: string): string => {
        return value.padStart(maxLength, fillString)
    },
    padEnd: (value: string, maxLength: number, fillString?: string): string => {
        return value.padEnd(maxLength, fillString)
    },
    trimStart: (value: string): string => {
        return value.trimStart()
    },
    trimEnd: (value: string): string => {
        return value.trimEnd()
    },
    valueOf: (value: string): string => {
        return value.valueOf()
    },
    toString: (value: string): string => {
        return value.toString()
    },
}
