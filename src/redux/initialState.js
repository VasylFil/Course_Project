const initialState = {
    isLoggedIn: false,
    form:{
        login:[
            {
                label: 'Пошта',
                type: 'email',
                value: '',
                message: 'Введіть коректну поштову скриньку',
                valid: false,
                validation: 'email',
                changed: false
            },
            {
                label: 'Пароль',
                type: 'password',
                value: '',
                message: '',
                valid: true,
                validation: 'none',
                changed: false
            }
        ],
        register: [
            {
                label: 'Імя',
                value: '',
                message: 'Введіть коректне імя',
                valid: false,
                validation: 'name',
                changed: false
            },
            {
                label: 'Прізвище',
                value: '',
                message: 'Введіть коректне прізвище',
                valid: false,
                validation: 'name',
                changed: false
            },
            {
                label: 'Пошта',
                type: 'email',
                value: '',
                message: 'Введіть коректну поштову скриньку',
                valid: false,
                validation: 'email',
                changed: false
            },
            {
                label: 'Пароль',
                type: 'password',
                value: '',
                message: 'Пароль повинен містити літери та цифри',
                valid: false,
                validation: 'password',
                changed: false
            },
        ],
    },
    users: [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Horne',
            email: 'cold@gmail.com',
            pass: 'coldPass911$',
        },
        {   id: 2,
            firstName: 'James',
            lastName: 'Macdonald',
            email: 'rainy@gmail.com',
            pass: 'rainyPass911$',
        },
        {   id: 3,
            firstName: 'Robert',
            lastName: 'Mcbride',
            email: 'night@gmail.com',
            pass: 'nightPass911$',
        },
        {   id: 4,
            firstName: 'Michael',
            lastName: 'Riddle',
            email: 'thunderstorm@gmail.com',
            pass: 'thunderstormPass911$',
        },
        {   id: 5,
            firstName: 'Christopher',
            lastName: 'Manning',
            email: 'snowy@gmail.com',
            pass: 'snowyPass911$',
        },
        {   id: 6,
            firstName: 'Jason',
            lastName: 'Ray',
            email: 'winter@gmail.com',
            pass: 'winterPass911$',
        },
        {   id: 7,
            firstName: 'Brian',
            lastName: 'Hunter',
            email: 'blizzard@gmail.com',
            pass: 'blizzardPass911$',
        }
    ],
    projects: [
        {
            id: 1,
            name: "AngularProject",
            type: "Angular",
            tasks: [10, 10],
            ddl: "10/10/2021",
        },
        {
            id: 2,
            name: "DjangoProject",
            type: "Django",
            tasks: [5, 10],
            ddl: "10/10/2021",
        },
        {
            id: 3,
            name: "ReactProject",
            type: "React",
            tasks: [10, 10],
            ddl: "10/10/2021",
        },
        {
            id: 4,
            name: "DockerProject",
            type: "React",
            tasks: [10, 10],
            ddl: "10/10/2021",
        },
        {
            id: 5,
            name: "PythonProject",
            type: "React",
            tasks: [10, 10],
            ddl: "10/10/2021",
        }
    ],
    teams: [
        {
            id: 1,
            name: "Raact Developers",
            members: 16,
        },
        {
            id: 2,
            name: "Angular Developers",
            members: 14,
        },
        {
            id: 3,
            name: "Django Developers",
            members: 4,
        },
        {
            id: 4,
            name: "Quality Assurance Engineers",
            members: 7,
        },
        {
            id: 5,
            name: "Web Designers",
            members: 10,
        }
    ]
}

export {initialState}