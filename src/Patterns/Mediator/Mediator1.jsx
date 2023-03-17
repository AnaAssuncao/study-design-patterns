export async function getImage() {
  let response = await fetch("https://dog.ceo/api/breed/labrador/images/random/6")
  response = await response.json()

  if (response.status === 'success') {
    return response.message
  }
  else {
    return []
  }
}

