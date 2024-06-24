const usuarioQueries = {
<<<<<<< HEAD
  selectByEmail:
    'SELECT u.usuarioID, u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre ' +
    'FROM usuarios u ' +
    'JOIN roles r ON u.rolID = r.rolID ' +
    'WHERE u.email = ?;',

  selectAll:
    'SELECT * ' +
    'FROM usuarios;',

  registerUser:
    'INSERT INTO usuarios (email, password, activo, rolID) ' +
    'VALUES (?, ?, ?, ?);',

    // updateUser: 'UPDATE usuarios SET email = ?, password = ?, activo = ?, tipoUsuario = ?, rolID = ? WHERE usuarioID = ?;',
    // deleteUser: 'DELETE FROM usuarios WHERE usuarioID = ?;',
    // changeUserStatus: 'UPDATE usuarios SET activo = ? WHERE usuarioID = ?;',
=======
    selectByEmail:
      'select u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre from usuarios u join roles r on u.rolID = r.rolID where u.email = ?;',
    selectAll: 'select * from usuarios;',

    registerUser:
    'insert into usuarios (email,password,activo,rolId) VALUES (?,?,?,?)',

>>>>>>> 968b0951b830ea1836d1310a33149c34373d399e
  };
  
  export default usuarioQueries;