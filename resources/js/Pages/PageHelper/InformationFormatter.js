

function formatToCurrency(valueArgs) {
    let value = valueArgs.replace(/[^0-9]/g, "");
    let formattedValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
    }).format(value / 100);

    return formattedValue.replace(/\₱|\$/g, "").trim();
}

const calculatedAge = (date) => {
    const birth = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())) age--;
    return age;
}

export { formatToCurrency, calculatedAge }