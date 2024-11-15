(() => {

    // No aplicando el principio de responsabilidad única
    
    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender; 
        name      : string; 
    }

    class Person {
        public birthdate : Date;
        public gender    : Gender;
        public name      : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }

    interface UserProps {
        birthdate : Date;
        email     : string;
        gender    : Gender; 
        name      : string; 
        role      : string;
    }

    class User extends Person {
        public lastAccess : Date;
        public email      : string;
        public role       : string;
        
        constructor({ birthdate, email, gender, name, role  }: UserProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender,
        lastOpenedFolder : string;
        name             : string,
        role             : string
        workingDirectory : string;
    }

    class UserSettings extends User {
        public workingDirectory : string;
        public lastOpenedFolder : string;

        constructor({ workingDirectory, lastOpenedFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
            super({ email, role, name, gender, birthdate });
            this.lastOpenedFolder = lastOpenedFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1990-01-01'),
        email: 'gabriel@email.com',
        gender: 'M',
        lastOpenedFolder: '/home',
        name: 'Gabriel',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({userSettings});


})();