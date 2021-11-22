const { gql} = require('apollo-server');

const typeDefs = gql`

union Result = Cadena | CategoriaProductos | Categorias2 | Causales | CausalesxEmpresa | Ciudades | Componentes | ConfWS | DetalleVisita | Empresa | Encuestas | EnviosWebServices | FormatoPV | GrupoProductos | MarcaProducto | MercaderistasUNILEVER | PermisosUsuarios | Pregunta | PreguntasEncuestas | Productos | Proyectos | ProyectosEmpresas | PuntodeVenta | PuntosDeVentaXEmpresa | Reportes | ResponsableTienda | Respuestas | Roles | RolesPermiso | Rutas | RutasColectores | SendWS |Test | TipoCausales |TipoEmpresa | TipoEnvio | TipoProducto | UsuarioReporte | Usuarios| UsuariosCorreo | UsuariosRoles | UsuariosRolesNT | Vectorizacion | VisitaResultadoCliente | Visitas | VisitaXML

scalar Date

type Cadena{
    idCadena: ID! 
    nombreCadena:String
}
type CategoriaProductos{
    idCategoriaProductos: ID!
    Empresa:Empresa
    descripcionCategoria:String
}
type Categorias2{
    idCategorias2: ID! 
    descripcionCategoria2:String
}
type Causales{
    id: ID!
    Empresa:Empresa
    causales:String
    descripcionCausales:String
    TipoCausal:TipoCausales
    activada:Boolean
    defaultOSA:Boolean
    causaH:Int
}
type CausalesxEmpresa{
    idCausalesxEmpresa: ID!
    Causales:Causales
    Empresa:Empresa 
    comentarios:String
}
type Ciudades{
    idCiudades: ID! 
    nombreCiudad:String
    region:String
}
type Componentes{
    id: ID! 
    componente:String
    descripcion:String
}
type ConfWS{
    usuario: String 
    contrasena:String
    paisISO:String
}
type DetalleVisita{
    idDetalleVisita: ID!
    Visita:Visitas
    Producto:Productos
    faltante:Int
    Causal:Causales
    fechaHora:Date
}
type Empresa{
    id: ID!  
    nombre:String
    activada:Boolean
    direccion:String
    telefono:String
    TipoEmpresa:TipoEmpresa
    nombreProyectoWS:String
}
type Encuestas{
    idEncuestas: ID! 
    activada:Boolean
    idProyectos:Int
}
type EnviosWebServices{
    idEnvio: ID! 
    estatus:Boolean
    fechaEnvio:Date
}
type FormatoPV{
    idFormatoPV: ID! 
    nombre:String   
}
type GrupoProductos{
    idGrupoProductos: ID! 
    descripcion:String   
}
type MarcaProducto{
    idMarca: ID!
    Empresa:Empresa 
    marca:String   
}
type MercaderistasUNILEVER{
    idMercaderistasUNILEVER: ID! 
    Empresa:Empresa
    nombre:String
    celular:String
    email:String
    cargo:String
    Tienda:PuntodeVenta
}
type PermisosUsuarios{
    menu:String 
    rol:String   
}
type Pregunta{
   idPregunta:ID!
   pregunta:String
   activada:Boolean
}
type PreguntasEncuestas{
    idPreguntasEncuestas:ID!
    Pregunta:Pregunta
    Encuestas:Encuestas
 }
 type Productos{
    idProductos:ID!
    Empresa:Empresa
    descripcionProducto:String
    ean13:String
    consumerUniteCode:String
    CategoriaProducto:CategoriaProductos
    Categoria2:Categorias2
    codigoSAP:String
    MarcaProducto:MarcaProducto
    TipoProducto:TipoProducto
    activo:Boolean
    comentarios:String
    GrupoProductos:GrupoProductos
    descripcionLarga:String
 }
 type Proyectos{
    idProyectos:ID!
    proyectos:String
    fechaInicio:Date
    fechaFin:Date
    activada:Boolean
 }
type ProyectosEmpresas{
    idProyectosEmpresas:ID!
    Proyectos:Proyectos
    Empresa:Empresa
 }
 type PuntodeVenta{
    idPuntosdeVenta:ID!
    nombrePuntosVenta:String
    Cadena:Cadena
    activada:Boolean
    customeStoreCode:String
    direccion:String
    Ciudad:Ciudades
    Ruta:Rutas
    FormatoPV:FormatoPV
    comentario:String
    grupo:Int
 }
 type PuntosDeVentaXEmpresa{
    id:ID!
    Empresa:Empresa
    PuntoDeVenta:PuntodeVenta
    customeStoreCode:String
    activada:Boolean
    comentarios:String
 }
 type Reportes{
    idReportes:ID!
    reporte:String
    comentarios:String
    activado:Boolean
 }
 type ResponsableTienda{
    idResponsableTienda:ID!
    nombreResponsableTienda:String
    cargoResponsableTienda:String
    celular:String
    email:String
    Tienda:PuntodeVenta
 }
 type Respuestas{
    idRespuestas:ID!
    respuestas:String
    valor:String
    activada:String
    Pregunta:Pregunta
    Encuestas:Encuestas
 }
 type Roles{
    id:ID!
    rol:String
 }
 type RolesPermiso{
    id:ID!
    Rol:Roles
    Componente:Componentes
 }
 type Rutas{
    idRutas:ID!
    rutaPV:String
    activada:Boolean
	lunes:Boolean
	martes:Boolean
	miercoles:Boolean
	jueves:Boolean
	viernes:Boolean
	sabado:Boolean
	domingo:Boolean
 }

 type RutasColectores{
    idRutasColectores:ID!
    Rutas:Rutas
    Colectores:Usuarios
    activado:Boolean 
}
 type SendWS{
    id:ID!
    fechaEnvio:Date
    respuesta:Int
    empresa:String 
}
type Test{
   descripcion:String
   ean13:String
}
type TipoCausales{
    id:ID!
    descripcionTipoCausales:String
 }
 type TipoEmpresa{
    idTipoEmpresa:ID!
    tipoEmpresa:String
    activada:String
 }
 type TipoEnvio{
    idTipoEnvio:ID!
    tipoEnvio:String
 }
 type TipoProducto{
    idTipoProducto:ID!
    tipoProducto:String
 }
 type UsuarioReporte{
    idUsuarioReporte:ID!
    Usuario:Usuarios
    Reporte:Reportes
    TipoEnvio:TipoEnvio
    Empresa:Empresa
    activado:Boolean
 }
 type Usuarios{
    idUsuarios:ID!
    usuario:String
    password:String
    roles:String
    nombreCompleto:String
    Empresa:Empresa
    primerNombre:String
    tratamiento:String
    cargo:String
    token:String
 }
 type UsuariosCorreo{
    idUsuariosCorreo:ID!
    nombreContacto:String
    correoContacto:String
    activado:Boolean
 }
 type UsuariosRoles{
    idUsuariosRoles:ID!
    usuario:String
    roles:String
 }
 type UsuariosRolesNT{
    idUsuariosRolesNT:ID!
    Usuario:Usuarios
    Rol:Roles
 }
 type Vectorizacion{
    idVectorizacion:ID!
    PuntoVenta:PuntodeVenta
    Producto:Productos
    activo:Boolean
    comentarios:String
 }
 type VisitaResultadoCliente{
    idVisitaResultadoCliente:ID!
    visita:Int
    archivoImagen:String
 }
 type Visitas{
   idVisitas:ID!
	Empresa:Empresa
	PuntoVenta:PuntodeVenta
	fechaVisitaPlanf:Date
	horario:String
	usuarioCollector:Int
	fechaDescarga:Date
	fechaSubida:Date
	fechaPlanificacion:Date
	estatus:String
	usuarioPlanificador:Int	
	productosContratados:Int
	latitud:Boolean
	longitud:Boolean
	precision:Boolean
	tiempoInicio:Date
 }
 type VisitaXML{
   visitaXML:ID!
   xMLVisita:String
   Visita:Visitas
}

type Query {
   results(tabla:String):[Result]
   result(id:Int, tabla:String):Result
   
}

type Mutation {
   login(usuario: String, password: String): Usuarios
}
`;

module.exports = typeDefs;