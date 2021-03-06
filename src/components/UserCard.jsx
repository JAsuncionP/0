import React from 'react'
import logo from  '../img/img1.jpg'

export const UserCard = ({ getUserList, deleteUser }) => {

  const [userCard, setUserCard] = React.useState('')

  let userList = getUserList();

  return (
    <div>
      {
        <div className='principal-card-container'>
          <h2  className='registered-user-title'>Usuarios Registrados</h2>
          {
            userList.map((element, index) =>
              <div className='user-card-container' key={index}>
                <img src={logo} alt='userImgView' className='userImg'></img>

                <table className='table table-hover'>
                  <tbody>
                    <tr>
                      <th className='informationType'>Id</th>
                      <td>{element.id}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Nombre</th>
                      <td>{element.name}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Apellido</th>
                      <td>{element.lastName}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Edad</th>
                      <td>{element.age}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Dirección</th>
                      <td>{element.address}</td>
                    </tr>
                  </tbody>
                </table>

                <button type='button' className='btn btn-danger' onClick={() => deleteUser(element.id)}>Borrar</button>
              </div>)
          }

        </div>
      }
    </div>
  )
}
