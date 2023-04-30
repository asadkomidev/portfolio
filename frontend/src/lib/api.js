export async function fetcher(url, option = {}) {
  let response

  if (!response) {
    response = await fetch(url)
  } else {
    response = await fetch(url, options)
  }
  const data = await response.json()
  return data
}
