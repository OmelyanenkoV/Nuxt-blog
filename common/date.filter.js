export default (value, type) => {
  const date = new Date(value)
  switch (type) {
    case 'date':
      return date.toDateString()
    case 'time':
      return date.toLocaleTimeString()
  }
  return date.toLocaleString()
}
