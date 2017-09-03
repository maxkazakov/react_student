export const CHANGE_EMAIL = "CHANGE_EMAIL"
export const CHANGE_FIRSTNAME = "CHANGE_FIRSTNAME"
export const CHANGE_LASTNAME = "CHANGE_LASTNAME"

export const changeEmail = email => ({
    type: CHANGE_EMAIL,
    payload: email
})

export const changeFirstname = firstname => ({
    type: CHANGE_FIRSTNAME,
    payload: firstname
})

export const changeLastname = lastname => ({
    type: CHANGE_LASTNAME,
    payload: lastname
})
