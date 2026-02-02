export const formatDistance = (distance: number) => {
    const formattedDistance = distance.toFixed(1) + " miles"
    return formattedDistance
}

export const formatHourlyRate = (hourlyRate: number) => {
    const dollars = hourlyRate / 100
    const newHourlyRate = "$" + dollars.toFixed(2)
    return newHourlyRate
}

export const formatShift = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return {
        day: start.toLocaleString('en-US', { weekday: 'short' }),
        date: start.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
        time: `${start.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - ${end.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    };
}