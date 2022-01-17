exports.guardarestudiantes=(req, res)=>{
    const cedula = req.body.cedula;
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const semestre = req.body.semestre;
    const paralelo = req.body.paralelo;
    const email = req.body.email;
    conexion.query('INSERT INTO cliente SET?', {cedula:cedula, apellido:apellido,
    nombre:nombre, direccion:direccion , semestre:semestre,paralelo:paralelo, email:email },
    (err, results)=>{
        if(err){
        console.log(err);
    } else{
        res.redirect('/');
        alert('Estudiante registrado exitosamente');
        }
    })
}