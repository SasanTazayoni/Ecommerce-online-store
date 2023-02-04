const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'GBP'
});

export default function formatCurrency(amount) {
    return formatter.format(amount);
}