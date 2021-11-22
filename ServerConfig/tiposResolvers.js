const jwt = require('jsonwebtoken');
const SECRET_KEY='12345-67890-09876-543210';
const Result = {
       __resolveType(parent, args, context, info){
      if(context.fieldNodes[0].arguments[0].value.value =='Cadena'){
        return 'Cadena';
      }
      if(context.fieldNodes[0].arguments[0].value.value =='CategoriaProductos'){
        return 'CategoriaProductos';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Categorias2'){
        return 'Categorias2';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Causales'){
        return 'Causales';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='CausalesxEmpresa'){
        return 'CausalesxEmpresa';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Ciudades'){
        return 'Ciudades';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Componentes'){
        return 'Componentes';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='ConfWS'){
        return 'ConfWS';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='DetalleVisita'){
        return 'DetalleVisita';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Empresa'){
        return 'Empresa';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Encuestas'){
        return 'Encuestas';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='EnviosWebServices'){
        return 'EnviosWebServices';
      }
      
      if(context.fieldNodes[0].arguments[0].value.value =='FormatoPV'){
        return 'FormatoPV';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='GrupoProductos'){
        return 'GrupoProductos';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='MarcaProducto'){
        return 'MarcaProducto';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='MercaderistasUNILEVER'){
        return 'MercaderistasUNILEVER';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='PermisosUsuarios'){
        return 'PermisosUsuarios';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Pregunta'){
        return 'Pregunta';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='PreguntasEncuestas'){
        return 'PreguntasEncuestas';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Productos'){
        return 'Productos';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Proyectos'){
        return 'Proyectos';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='ProyectosEmpresas'){
        return 'ProyectosEmpresas';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='PuntosdeVenta'){
        return 'PuntosdeVenta';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='PuntosDeVentaXEmpresa'){
        return 'PuntosDeVentaXEmpresa';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Reportes'){
        return 'Reportes';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='ResponsableTienda'){
        return 'ResponsableTienda';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Respuestas'){
        return 'Respuestas';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Roles'){
        return 'Roles';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Rutas'){
        return 'Rutas';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='RutasColectores'){
        return 'RutasColectores';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='SendWS'){
        return 'SendWS';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='SendWS'){
        return 'SendWS';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Test'){
        return 'Test';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='TipoCausales'){
        return 'TipoCausales';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='TipoEmpresa'){
        return 'TipoEmpresa';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='TipoEnvio'){
        return 'TipoEnvio';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='TipoProducto'){
        return 'TipoProducto';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='UsuarioReporte'){
        return 'UsuarioReporte';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='Usuarios'){
        return 'TipUsuariosoEnvio';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='UsuariosCorreo'){
        return 'UsuariosCorreo';
      }

      if(context.fieldNodes[0].arguments[0].value.value =='UsuariosRoles'){
        return 'UsuariosRoles';
      }
      if(context.fieldNodes[0].arguments[0].value.value =='UsuariosRolesNT'){
        return 'UsuariosRolesNT';
      }
      if(context.fieldNodes[0].arguments[0].value.value =='Vectorizacion'){
        return 'Vectorizacion';
      }
      if(context.fieldNodes[0].arguments[0].value.value =='VisitaResultadoCliente'){
        return 'VisitaResultadoCliente';
      }
      if(context.fieldNodes[0].arguments[0].value.value =='Visitas'){
        return 'Visitas';
      }
    

      return null;
      },
}





const CategoriaProductos={
  Empresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idEmpresa;
      var tabla='Empresa' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  }
}
// 
const Causales={
  Empresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idEmpresa;
      var tabla='Empresa' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  TipoCausal:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.tipoCausal;
      var tabla='TipoCausales' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);  
  }
}

const CausalesxEmpresa={
  Empresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idEmpresa;
      var tabla='Empresa' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  Causales:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idCausales;
      var tabla='Causales' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);  
  }
}
const DetalleVisita={
  Causal:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.Causal;
      var tabla='Causales' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  Producto:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.Producto;
      var tabla='Productos' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);  
  },
  Visita:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.Visita;
    var tabla='Visitas' // Como esta el nombre de la tabla en la BD
    return await resolvers.Query.result(parent,{id,tabla},context,info);  
  }
}
const Empresa={
  TipoEmpresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idTipoEmpresa;
      var tabla='TipoEmpresa' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  }
}
const MarcaProducto={
  Empresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idEmpresa;
      var tabla='Empresa' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  }
}
const MercaderistasUNILEVER={
  Empresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idEmpresa;
      var tabla='Empresa' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  Tienda:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.tienda;
    var tabla='PuntodeVenta' // Como esta el nombre de la tabla en la BD
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}
const PreguntasEncuestas={
  Pregunta:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idPregunta;
      var tabla='Pregunta' // Como esta el nombre de la tabla en la BD
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  Encuestas:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.idEncuestas;
    var tabla='Encuestas' // Como esta el nombre de la tabla en la BD
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}
const Productos={
  Categoria2:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.categoria2;
      var tabla='Categorias2' // Como esta el nombre de la tabla en la BD
      if(id==null){
        return null
      }
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
CategoriaProducto:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.categoriaProducto;
    var tabla='CategoriaProductos' // Como esta el nombre de la tabla en la BD
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
Empresa:async(parent,args,context,info)=>{
  var resolvers=require('./resolvers');
  var id=parent.idEmpresa;
  var tabla='Empresa' // Como esta el nombre de la tabla en la BD
  if(id==null){
    return null
  }
  return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
GrupoProductos:async(parent,args,context,info)=>{
  var resolvers=require('./resolvers');
  var id=parent.grupoProductos;
  var tabla='GrupoProductos' // Como esta el nombre de la tabla en la BD
  if(id==null){
    return null
  }
  return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
MarcaProducto:async(parent,args,context,info)=>{
  var resolvers=require('./resolvers');
  var id=parent.marcaProducto;
  var tabla='MarcaProducto' // Como esta el nombre de la tabla en la BD
  if(id==null){
    return null
  }
  return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
TipoProducto:async(parent,args,context,info)=>{
  var resolvers=require('./resolvers');
  var id=parent.tipoProducto;
  var tabla='TipoProdaucto' // Como esta el nombre de la tabla en la BD
  if(id==null){
    return null
  }
  return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}
const PuntosDeVentaXEmpresa={
  Empresa:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idEmpresa;
      var tabla='Empresa' // Como esta el nombre de la tabla en la BD
      if(id==null){
        return null
      }
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  PuntoDeVenta:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.idPuntoDeVenta;
    var tabla='PuntosdeVenta' // Como esta el nombre de la tabla en la BD
    if(id==null){
      return null
    }
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}
const ResponsableTienda={
  Tienda:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.tienda;
      var tabla='PuntosdeVenta' // Como esta el nombre de la tabla en la BD
      if(id==null){
        return null
      }
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  }
}
const Respuestas={
  Pregunta:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.pregunta;
      var tabla='Pregunta' // Como esta el nombre de la tabla en la BD
      if(id==null){
        return null
      }
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  Encuestas:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.encuestas;
    var tabla='Encuestas' // Como esta el nombre de la tabla en la BD
    if(id==null){
      return null
    }
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}
const RutasColectores={
  Rutas:async(parent,args,context,info)=>{
      var resolvers=require('./resolvers');
      var id=parent.idRutas;
      var tabla='Rutas' // Como esta el nombre de la tabla en la BD
      if(id==null){
        return null
      }
      return await resolvers.Query.result(parent,{id,tabla},context,info);   
  },
  Colectores:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.idColectores;
    var tabla='Usuarios' // Como esta el nombre de la tabla en la BD
    // if(id==null){
    //   return null
    // }
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}
const UsuarioReporte={
  Usuario:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.usuarios;
    var tabla='Usuarios' // Como esta el nombre de la tabla en la BD
    if(id==null){
      return null
    }
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
  Reporte:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.reporte;
    var tabla='Reportes' // Como esta el nombre de la tabla en la BD
    if(id==null){
      return null
    }
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
TipoEnvio:async(parent,args,context,info)=>{
  var resolvers=require('./resolvers');
  var id=parent.tipoEnvio;
  var tabla='TipoEnvio' // Como esta el nombre de la tabla en la BD
  if(id==null){
    return null
  }
  return await resolvers.Query.result(parent,{id,tabla},context,info);   
},
Empresa:async(parent,args,context,info)=>{
  var resolvers=require('./resolvers');
  var id=parent.idEmpresa;
  var tabla='Empresa' // Como esta el nombre de la tabla en la BD
  if(id==null){
    return null
  }
  return await resolvers.Query.result(parent,{id,tabla},context,info);   
}
}

const Usuarios={
  token: (parent, args, context, info) =>{
    return jwt.sign({usuario: parent.usuario, password: parent. password},SECRET_KEY);
  },
  Empresa:async(parent,args,context,info)=>{
    var resolvers=require('./resolvers');
    var id=parent.idEmpresa;
    var tabla='Empresa' // Como esta el nombre de la tabla en la BD
    if(id==null){
      return null
    }
    return await resolvers.Query.result(parent,{id,tabla},context,info);   
  }
}




exports.result=Result;
exports.categoriaProductos=CategoriaProductos;
exports.causales=Causales;
exports.causalesxEmpresa=CausalesxEmpresa;
exports.detalleVisita=DetalleVisita;
exports.empresa=Empresa;
exports.marcaProducto=MarcaProducto;
exports.mercaderistasUNILEVER=MercaderistasUNILEVER;
exports.preguntasEncuestas=PreguntasEncuestas;
exports.productos=Productos;
exports.puntosDeVentaXEmpresa=PuntosDeVentaXEmpresa;
exports.responsableTienda=ResponsableTienda;
exports.respuestas=Respuestas;
exports.rutasColectores=RutasColectores;
exports.usuarioReporte=UsuarioReporte;
exports.usuarios = Usuarios;
