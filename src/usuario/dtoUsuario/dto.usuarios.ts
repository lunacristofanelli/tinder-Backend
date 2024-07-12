export class UsuarioDto {
  readonly id: number;
  readonly email: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly password: string;
  readonly activo?: boolean; 
  readonly rolID?: number; 
  readonly tipoUsuario?: string; 
  readonly usuarioID:number;
  readonly matchID: number;
  readonly edad: number;
  readonly ubicacion : string;
  readonly profesion: string;
  readonly sobreMi: string;
  readonly intereses: string[];
  readonly imagenes: string[];
  readonly misRedes: string;
}
