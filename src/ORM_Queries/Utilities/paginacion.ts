
export async function paginacion(elements: number, page: number)
{
    if (!page || page <= 0 || page == null) page = 1

    const skip = elements * (page + (-1))
    const take = elements

    return {
        skip: skip,
        take: take
    }
}