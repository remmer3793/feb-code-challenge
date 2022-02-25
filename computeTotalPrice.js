const price = 299.00

const discounts = {
    0: 0,
    1: 0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25
}

const kinds = [
    'A',
    'B',
    'C',
    'D',
    'E'
]

export default function computeTotalPrice(productsArray) {
    const countsByKind = kinds.map(kind => {
        return productsArray.filter(product => product === kind).length
    })
    const greatestCount = Math.max(...countsByKind)
    const eachDifferentCount = Array(greatestCount).fill(0).map((e, i) => i + 1)
    return eachDifferentCount.map(count => {
        const numberOfKindsMatchingCount = countsByKind.filter(c => c >= count).length
        const absoluteDiscount = 1 - discounts[numberOfKindsMatchingCount]
        return numberOfKindsMatchingCount * absoluteDiscount * price
    }).reduce((total, price) => total + price, 0)
}
