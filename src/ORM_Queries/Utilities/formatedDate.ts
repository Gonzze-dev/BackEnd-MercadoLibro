function padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
}

export function formatedDate(date: any) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}

export function formatedStringToDate(dateString: string) {
    const partesFecha = dateString.split("/")
    dateString = partesFecha[2] + '-' + partesFecha[1] + '-' + partesFecha[0];

    return dateString
}