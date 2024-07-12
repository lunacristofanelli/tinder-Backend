const interesesQueries = {
    selectInterests: 'SELECT * FROM intereses;',
    addInterest: 'INSERT INTO intereses (nombre) VALUES (?);',
    deleteInterest: 'DELETE FROM intereses WHERE interesID = ?;',
    getUserInterests: 'SELECT i.interesID, i.nombre FROM intereses i JOIN perfil_intereses pi ON i.interesID = pi.interesID WHERE pi.perfilID = ?;',
    addUserInterest: 'INSERT INTO perfil_intereses (perfilID, interesID) VALUES (?, ?);',
    deleteUserInterest: 'DELETE FROM perfil_intereses WHERE perfilID = ? AND interesID = ?;',
  };
  
  export default interesesQueries;
  