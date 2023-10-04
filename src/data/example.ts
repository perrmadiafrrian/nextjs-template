export const getStatus = async () => {
  await new Promise((r) => setTimeout(r, 100))
  return (Math.random() + 1).toString(36).substring(7)
}
