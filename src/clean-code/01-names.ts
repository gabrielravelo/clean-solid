(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    //? const ddmmyyyy = new Date(); antes
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    //? const d: number = 23; antes
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    //? const dir = 33; antes
    const filesInDirectory = 33;
    
    // primer nombre - first name
    //? const nombre = 'Fernando'; antes
    const firstName = 'Fernando';
    
    // primer apellido - last name
    //? const apellido = 'Herrera'; antes
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    //? const dsm = 12; antes
    const lastModificationDays = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    //? const max = 6; antes
    const maxClassesPerStudent = 6;


})();


