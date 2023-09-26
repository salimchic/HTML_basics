const node_for_click_lastname = document.getElementById("for_click_lastname")

function find_edit_lastname() {

    const item = document.getElementsByTagName('p')[1]
    console.log(item.innerText)
    item.innerText = 'новая фамилия Шамсина'

}

node_for_click_lastname.addEventListener("click", find_edit_lastname)



const node_for_click_name = document.getElementById("for_click_name")

function find_edit_name() {

    document.getElementsByTagName('p')[2].innerHTML = 'новое имя Алина'

}

node_for_click_name.addEventListener("click", find_edit_name)



const node_for_click_surname = document.getElementById("for_click_surname")

function find_edit_surname() {

    document.getElementsByTagName('p')[3].innerHTML = 'новое отчество Ленаровна'

}

node_for_click_surname.addEventListener("click", find_edit_surname)



const node_for_click_date = document.getElementById("for_click_date")

function find_edit_date() {

    document.getElementsByTagName('p')[4].innerHTML = 'новая дата 23.03.2004'

}

node_for_click_date.addEventListener("click", find_edit_date)