import React from 'react';

const UsersList = ( {users, selectUser, deleteUser} ) => {
    return (
        <div className='containerUsers-list'>
            <ul className='list-users'>
                <h2 className='title-users'>Users List</h2>
                {users.map((user) => (
                    <li key={user.id}>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <div className='container-mail'>
                            <b>Email:</b> {user.email}
                        </div>
                        <div className='container-pass'>
                            <b>Password:</b> {user.password}
                        </div>
                        <div className='container-birthday'>
                            <b>Birthday:</b> {user.birthday}
                        </div>
                        <button className='button-edit' onClick={() => selectUser(user)}><i class="fa-solid fa-pencil"></i></button>
                        <button className='button-delete' onClick={() => deleteUser(user.id)}><i class="fa-solid fa-trash-can"></i></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;