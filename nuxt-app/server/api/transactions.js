export default defineEventHandler(async () => {
    return new Promise((resolve) => setTimeout(() => resolve(transactions), 3000))
})

const transactions = [
    {
        id: 1,
        name: 'Payment to Molly Sanders',
        href: '#',
        amount: '$20,000',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
    },
    {
        id: 2,
        name: 'Payment to Doug Mann',
        href: '#',
        amount: '$19,500',
        currency: 'USD',
        status: 'processing',
        date: 'July 5, 2020',
        datetime: '2020-07-05',
    },
    {
        id: 3,
        name: 'Payment to Erica Frost',
        href: '#',
        amount: '$8,750',
        currency: 'USD',
        status: 'success',
        date: 'July 4, 2020',
        datetime: '2020-07-04',
    },
    {
        id: 4,
        name: 'Payment to Miley Davis',
        href: '#',
        amount: '$300',
        currency: 'USD',
        status: 'success',
        date: 'July 1, 2020',
        datetime: '2020-07-01',
    },
    {
        id: 5,
        name: 'Payment to Molly Sanders',
        href: '#',
        amount: '$20,000',
        currency: 'USD',
        status: 'failed',
        date: 'June 17, 2020',
        datetime: '2020-06-17',
    },
]