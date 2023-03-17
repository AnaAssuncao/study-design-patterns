export default function createUser(firstName, lastName, email){
  const fullName =  `${firstName} ${lastName}`

  const id = (Math.random() *100).toFixed(0)
  return{
    firstName,
    lastName,
    fullName,
    email,
    id
  }
}