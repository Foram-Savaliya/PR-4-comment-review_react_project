import React, { useState } from 'react'

const Form = () => {

    const [input, setInput] = useState([
        { name: "", email: "", salary: "" },
    ])

    const AddData = () => {
        let newLine = { id: Date.now(), name: "", email: "", salary: "" }
        setInput([...input, newLine])
    }

    const RemoveData = (id) => {
        setInput(input.filter(val => val.id != id))
        alert("Record removed")
    }

    return (
        <div className='container'>
            <h2 className='text-center my-4'>React - Add & Delete Table Rows Dynamically</h2>
            <table className='table table-light'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Salary</th>
                        <th>
                            <button type='submit' className='add-btn w-btn' onClick={() => AddData()}>+</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        input.map((val, index) => {
                            return (
                                <tr>
                                    <td>
                                        <input type="text" className='form-control' required/>
                                    </td>
                                    <td>
                                        <input type="email" className='form-control' required/>
                                    </td>
                                    <td>
                                        <input type="text" className='form-control' required/>
                                    </td>
                                    <td>
                                        <button type='submit' className='remove-btn w-btn' onClick={() => RemoveData(val.id)}>X</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Form