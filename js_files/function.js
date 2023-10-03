const node_for_click_lastname = document.getElementById("for_click_lastname")

function find_edit_lastname() {

    const item = document.getElementsByTagName('div')[3]
    console.log(item.innerText)
    item.innerText = 'Фамилия: Шамсина'

}

node_for_click_lastname.addEventListener("click", find_edit_lastname)



const node_for_click_name = document.getElementById("for_click_name")

function find_edit_name() {

    document.getElementsByTagName('div')[4].innerHTML = 'Имя: Алина'

}

node_for_click_name.addEventListener("click", find_edit_name)



const node_for_click_surname = document.getElementById("for_click_surname")

function find_edit_surname() {

    document.getElementsByTagName('div')[5].innerHTML = 'Отчество: Ленаровна'

}

node_for_click_surname.addEventListener("click", find_edit_surname)



const node_for_click_date = document.getElementById("for_click_date")

function find_edit_date() {

    document.getElementsByTagName('div')[7].innerHTML = 'Дата: 23.03.2004'

}

node_for_click_date.addEventListener("click", find_edit_date)