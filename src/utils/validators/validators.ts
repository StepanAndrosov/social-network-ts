

export const required = (value: string | null): string | undefined => {
    return value ? undefined : "Field is required"
}

export const maxLength30 = (value: string | null): string | undefined => {
    return value && value.length > 30 ? "Max length is 30 symbols" : undefined
}
export const MaxLengthCreator = (maxLength: number) => (value: string | null) => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}
