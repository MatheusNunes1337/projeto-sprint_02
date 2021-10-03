const InvalidField = require('../errors/InvalidField')

const checkClientGender = (gender) => {
    const validGenres = ['MALE', 'FEMALE', 'OTHER', 'I PREFER NOT TO SAY']
    const genderInCapital = gender.toUpperCase()

    if(!validGenres.includes(genderInCapital)) {
        throw new InvalidField('gender')
    }
}