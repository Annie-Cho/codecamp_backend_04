const getPhoneNum = () => {
    const PhoneNumber01 = document.getElementById("PhoneNumber01").value
    const PhoneNumber02 = document.getElementById("PhoneNumber02").value
    const PhoneNumber03 = document.getElementById("PhoneNumber03").value

    let phoneNum = PhoneNumber01 + PhoneNumber02 + PhoneNumber03

    return phoneNum
}
