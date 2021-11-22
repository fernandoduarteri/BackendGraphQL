var result = require('./tiposResolvers.js');
var dateScalar = require ('../CustomScalar/dateScalar.js');
const resolvers={
    Query:{
        results: async(parent,args,context,info)=> context.dataSources.mysqlDS.results(args.tabla),
        result: async(parent,args,context,info)=> context.dataSources.mysqlDS.result(args.tabla, args.id)
    },
    Mutation:{
        login: async(parent, args, contex, info) => contex.dataSources.mysqlDS.login(args)
    },
    Result: result.result,
    CategoriaProductos:result.categoriaProductos,
    Causales: result.causales,
    CausalesxEmpresa: result.causalesxEmpresa,
    DetalleVisita: result.detalleVisita,
    Empresa:result.empresa,
    MercaderistasUNILEVER:result.mercaderistasUNILEVER,
    PreguntasEncuestas:result.preguntasEncuestas,
    MarcaProducto:result.marcaProducto,
    Productos:result.productos,
    PuntosDeVentaXEmpresa:result.puntosDeVentaXEmpresa,
    ResponsableTienda:result.responsableTienda,
    Respuestas:result.respuestas,
    RutasColectores:result.rutasColectores,
    UsuarioReporte:result.usuarioReporte,
    Usuarios: result.usuarios,
    Date: dateScalar
};

module.exports = resolvers;