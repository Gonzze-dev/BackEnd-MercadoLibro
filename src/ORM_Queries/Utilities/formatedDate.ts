export const formatedDate = (date: any) => {
    return [
        date.getDate(),
        (date.getMonth() + 1),
        date.getFullYear()
        ].join('/')
}