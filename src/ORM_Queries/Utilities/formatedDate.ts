export const formatedDate = (date: Date) => {
    return [
        date.getDate(),
        (date.getMonth() + 1),
        date.getFullYear()
        ].join('/')
}