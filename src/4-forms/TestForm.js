import React, { useState } from "react"

const TestForm = () => {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])
  // const [id, setId] = useState(1)

  const submitHandler = (e) => {
    e.preventDefault()
    // setId(id + 1)
    const person = { id: new Date().getTime().toString(), text, email }
    setPeople([...people, person])
    setText("")
    setEmail("")
  }

  return (
    <div>
      <h1>Test Form</h1>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='Name'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail: </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>

      {people.map((person) => {
        return (
          <section className='item' key={person.id}>
            <p>{person.id}: </p>
            <h4>{person.text}</h4>
            <p>{person.email}</p>
          </section>
        )
      })}
    </div>
  )
}

export default TestForm
