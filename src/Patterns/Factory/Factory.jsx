import createUser from './objUser'
import Container from "../../Components/Container/Container";
import { useState } from 'react';
import './Factory.css'

const users = []
export default function Factory() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [qtUsers, setQtUsers] = useState(0)

  const handleUser = () => {
    if (firstName && lastName && email) {
      const user = createUser(firstName, lastName, email)
      users.push(user)
      setQtUsers(qtUsers + 1)
    }

  }

  return (
    <Container title="Factory">
      <input type="text" required name='firstName' placeholder="Primeiro Nome" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" required name='lastName' placeholder="Ultimo Nome" onChange={(e) => setLastName(e.target.value)} />
      <input type="text" required name='email' placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUser}>Add usuario</button>

      {
        users.length !== 0 && (
          < div >
            <p>Tem {qtUsers} usuário</p>

            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Nome Completo</th>
                    <th >Email</th>
                    <th >ID</th>
                  </tr>
                  {users.map((user) => (
                    <tr>
                      <td className='table-td'>{user.fullName} </td>
                      <td className='table-td'>{user.email} </td>
                      <td className='table-td'>{user.id}</td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }

    </Container>
  )
}