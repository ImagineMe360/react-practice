import React, { useState } from "react"

const MultipleForm = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    password: "",
  })
  const [people, setPeople] = useState([])

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault()

    setPeople([...people, { id: new Date().getTime().toString(), ...person }])
    setPerson({ firstName: "", email: "", age: "", password: "" })
  }

  return (
    <div>
      <h1>Test Form</h1>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='Name'
            value={person.firstName}
            onChange={handleOnChange}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail: </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='E-mail'
            value={person.email}
            onChange={handleOnChange}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='age'>Age: </label>
          <input
            type='number'
            name='age'
            id='age'
            placeholder='Age'
            value={person.age}
            onChange={handleOnChange}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={person.password}
            onChange={handleOnChange}
          />
        </div>

        <button type='submit' onClick={handleClick}>
          Submit
        </button>
      </form>

      {people.map((person) => {
        return (
          <section className='item' key={person.id}>
            {/* <p>{person.id}: </p> */}
            <h4>{person.firstName}</h4>
            <p>{person.email}</p>
            <p>{person.age}</p>
            <p>{person.password}</p>
          </section>
        )
      })}
    </div>
  )
}

export default MultipleForm
