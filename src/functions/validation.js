export function validation(value, type){
    switch (type) {
        case 'name':
            return value.trim().match(/^[A-Z][a-z]{2,}$/)
        case 'email':
            return value.trim().match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/)
        case 'password':
            return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/)
        default:
            return true
    }
}