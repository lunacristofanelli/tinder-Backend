const usuarioQueries = {
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
  };
  
  export default usuarioQueries;