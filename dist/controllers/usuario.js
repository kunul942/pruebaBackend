"use strict";
//*El usuario es para la autenticacion
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = exports.getUsuarios = void 0;
// import Estudiante from '../model/Estudiante'
// import Carrera from '../model/Carrera'
// import Grado from '../model/Grado'
// import { generateJWT } from '../helpers/jwt'
/*import { CustomRequest } from '../middleware/validate-jwt'

export const getEstudiante = async(req: Request, res:Response) =>{

    try {
        // const [ results ] = await db.query('select * from Estudiantes')
        // res.json({ results })

        const estudiante = (await Estudiante.findAll({ include: [
            { as:'Carrera', model: Carrera },
            { as:'Grado', model: Grado }
        ] }))

        res.status(200).json({ estudiante })
        
    } catch (error) {
        console.log( error )
        res.status(500).json({ msg:'hay error' })
    }

}
export const getEstudianteById = (req: Request, res:Response) =>{

    res.json({ msg: 'Hola soy la respuesta' })

}
export const createEstudiante = async(req: Request, res:Response) =>{

    try {

        const { nombre, idCarrera, idGrado } = req.body as { nombre:string, idCarrera: number, idGrado: number }

        const estudiante = await Estudiante.create({ nombre,idCarrera, idGrado })

        const token = await generateJWT( nombre );

        res.status(200).json({ msg: 'ok', estudiante, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Hay error'})
    }


}
export const updateEstudiante = (req: Request, res:Response) =>{

    res.json({ msg: 'Hola soy la respuesta' })

}
export const deleteEstudiante = (req: Request, res:Response) =>{

    res.json({ msg: 'Hola soy la respuesta' })

}


export const revalidateToken = async ( req: Request, res: Response )=>{

    const nombre = (req as CustomRequest).nombre

    const token = await generateJWT( nombre );

    res.json({ ok:true, token })

}*/
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'getUsuarios' });
});
exports.getUsuarios = getUsuarios;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'createUsuario' });
});
exports.createUsuario = createUsuario;
//# sourceMappingURL=usuario.js.map