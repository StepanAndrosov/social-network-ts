
export const required = (value: string | null): string | undefined => {
    return value ? undefined : "Field is required"
}

export const MaxLengthCreator = (maxLength: number) => (value: string | null) => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}
