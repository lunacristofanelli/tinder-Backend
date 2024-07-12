const usuarioQueries = {
  selectByEmail:
    'SELECT u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre FROM usuarios u JOIN roles r ON u.rolID = r.rolID WHERE u.email = ?;',

  selectLikeableUsers:
    'SELECT usuarioID as likeableID, r.email, r.nombre, r.apellido FROM usuarios r WHERE r.activo = 1 AND NOT EXISTS (Select * FROM interacciones WHERE usuarioOrigenID = ? AND usuarioDestinoID = r.usuarioID ) AND r.email <> ?;',

  selectImagenes:
    'SELECT * FROM usuario_imagenes WHERE usuario_ID = ?;',

  selectIntereses:
    'SELECT nombre FROM intereses WHERE EXISTS (Select * FROM usuario_intereses WHERE usuario_intereses.interesID = intereses.interesID AND usuarioID = ? ) ;',

  selectAll:
    'SELECT * FROM usuarios;',

  registerUser:
    'INSERT INTO usuarios (email, password, activo, rolID) VALUES (?, ?, ?, ?);',

  updatePassword:
    'UPDATE usuarios SET password = ? WHERE email = ?;',

  updateUser:
    'UPDATE usuarios SET email = ?, activo = ?, rolID = ? WHERE usuarioID = ?;',

  deleteUser:
    'DELETE FROM usuarios WHERE usuarioID = ?;',

  selectUserById:
    'SELECT u.usuarioID, u.email, u.activo, u.rolID, r.codigo, r.nombre FROM usuarios u JOIN roles r ON u.rolID = r.rolID WHERE u.usuarioID = ?;',

}

export default usuarioQueries;
