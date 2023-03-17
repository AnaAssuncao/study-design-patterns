import { useState } from "react";
import Container from "../../Components/Container/Container";
import { addBook, getBooks } from './book'

export default function Flyweight() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [countBook, setCountBook] = useState(0);

  const handleAddBook = () => {
    if (title !== '' && author !== '' && isbn !== '') {
      addBook(title, author, isbn)
      setCountBook(countBook + 1)
    }
  }

  const text = (
    <>
      <p>O padrão flyweight é uma maneira útil de economizar memória quando estamos criando um grande número de objetos semelhantes.</p>
      <p>um padrão de projeto estrutural que permite a você colocar mais objetos na quantidade de RAM disponível ao compartilhar partes comuns de estado entre os múltiplos objetos ao invés de manter todos os dados em cada objeto.</p>
    </>
  )
  return (
    <Container title="Flyweight" text={text}>
      <input type="text" required name='title' placeholder="Nome livro" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" required name='author' placeholder="Autor" onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" required name='isbn' placeholder="Isbn" onChange={(e) => setIsbn(e.target.value)} />
      <button onClick={handleAddBook}>Acrescentar livro</button>
      {
        countBook !== 0 && (
          < div >
            <p>lista</p>

            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Titulo</th>
                    <th >Autor</th>
                    <th >ISBN</th>
                  </tr>
                  {getBooks().map((book) => (
                    <tr>
                      <td className='table-td'>{book.title} </td>
                      <td className='table-td'>{book.author} </td>
                      <td className='table-td'>{book.isbn}</td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }

    </Container >
  )
}

