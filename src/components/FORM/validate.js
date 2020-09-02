export const required = (data) => {
    if (data) {
        return undefined
    }
    return 'Форма не должна быть пустой'
}

export const mexLength = (max) => (data) => {

        if (data) {
            if (data.length <= max) {
                return undefined
            }
            return `Не должно быть больше ${max} символов. Сейчас у вас введено ${data.length}`
        }
}

