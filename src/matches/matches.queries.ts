const matchesQueries = {
  likesRecibidos: `
    SELECT 
      u.usuarioID AS usuario_id,
      u.email AS usuario_email,
      u.nombre,
      u.apellido,
      i.usuarioOrigenID,
      i.usuarioDestinoID 
    FROM 
      Usuarios u 
    JOIN 
      Interacciones i 
    ON 
      u.usuarioID = i.usuarioOrigenID 
    WHERE 
      i.usuarioDestinoID = ? 
      AND i.accionID = 1
  `,

  interaccion: `
    INSERT INTO interacciones (usuarioOrigenID, usuarioDestinoID, accionID) VALUES (?, ?, ?);
  `,

  matches: ''
};

export default matchesQueries;
