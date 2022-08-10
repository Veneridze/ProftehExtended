function GenerateJSON(request_only = false) {
    let result = {};
    result.request = {
        gosuslugi: document.getElementById("form:applicationPanel").children[0]
            .children[0].children[0].children[0].children[0].children[1].children[0] //0 - слева, 1 - справа
            .children[0].children[0].children[1].innerHTML, //0-2
        id_gosuslugi: document
            .getElementById("form:applicationPanel")
            .children[0].children[0].children[0].children[0].children[0] //0 - слева, 1 - справа
            .children[0].children[0].children[0] //0-2
            .children[0].children[1].innerHTML.split(" ")[1],
        date_gosuslugi: document
            .getElementById("form:applicationPanel")
            .children[0].children[0].children[0].children[0].children[0] //0 - слева, 1 - справа
            .children[0].children[0].children[0] //0-2
            .children[0].children[1].innerHTML.split(" ")[3],
        spo_spec: document.getElementById("form:applTab:coursePanelGrid")
            .children[0].children[5].children[1].children[0].innerHTML,
        pay_level: document.getElementById("form:applTab:coursePanelGrid")
            .children[0].children[1].children[1].innerHTML,
        ed_type: document.getElementById("form:applTab:coursePanelGrid").children[0]
            .children[6].children[1].children[0].innerHTML,
    };
    if (!request_only) {
        result.gender = GetMale();
        result.surname =
            document.getElementById(
                "form:findPanel"
            ).children[0].children[0].children[1].innerHTML; //Документ, удостоверяющий личность - ОК
        result.name =
            document.getElementById(
                "form:findPanel"
            ).children[0].children[1].children[1].innerHTML; //Документ, удостоверяющий личность - ОК
        result.father =
            document.getElementById(
                "form:findPanel"
            ).children[0].children[2].children[1].children[0].innerHTML; //Документ, удостоверяющий личность - ОК
        result.date_birth =
            document.getElementById(
                "form:findPanel"
            ).children[0].children[3].children[1].innerHTML; //Документ, удостоверяющий личность - ОК
        //gender: document.getElementById("form:applicationGender").children[0].children[4].children[1].innerHTML, //Пол
        result.pasp_type = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[0].children[1].innerHTML; //Документ, удостоверяющий личность - ОК
        result.pasp_ser = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[1].children[1].innerHTML; //Серия - ОК
        result.pasp_no = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[2].children[1].innerHTML; //Номер - ОК
        result.pasp_vydan = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[3].children[1].innerHTML; //Кем выдан - ОК
        result.pasp_code = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[4].children[1].innerHTML; //Код подразделения - ОК
        result.pasp_date = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[5].children[1].innerHTML; //Дата выдачи - ОК
        result.citizenship = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[6].children[1].children[0].innerHTML; //Гражданство - ОК
        result.phone_mob = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[7].children[1].innerHTML; //Контактный номер - ОК
        result.email = document.getElementById(
            "form:applTab:applicantIdentityDocColumn"
        ).children[0].children[8].children[1].innerHTML; //Адрес электронной почты - ОК
        //document.getElementById("form:applTab:applicantIdentityDcColumn").children[0].children[9].children[1].children[0].innerHTML //Тип полиса - ОК
        if (document.getElementById("form:applTab:applicantIdentityDocColumn").children[0].children[10] != null) {
            result.med_polis = document.getElementById(
                "form:applTab:applicantIdentityDocColumn"
            ).children[0].children[10].children[1].innerHTML; //Номер полиса ОМС - ОК
        }
        result.address_register_type = document.getElementById(
            "form:applTab:permanentGrid"
        ).children[0].children[0].children[1].innerHTML; //Тип регистрации - ОК
        //document.getElementById("form:applTab:permanentGrid").children[0].children[1].children[1].children[0].innerHTML, //Регистрация - ОК
        //document.getElementById("form:applTab:permanentGrid").children[0].children[2].children[1].children[0].innerHTML, //Полный адрес - ОК
        result.address_register_flat = document.getElementById(
            "form:applTab:permanentGrid"
        ).children[0].children[3].children[1].innerHTML; //Квартира - ОК

        result.ed_level = document.getElementById(
            "form:applTab:applicantInfoRight"
        ).children[0].children[0].children[1].children[0].innerHTML; //Базовое образование - ОК
        result.school_year = document.getElementById(
            "form:applTab:applicantInfoRight"
        ).children[0].children[1].children[1].children[0].innerHTML; //Год окончания - ОК
        result.att_type = document.getElementById(
            "form:applTab:applicantInfoRight"
        ).children[0].children[2].children[1].children[0].innerHTML; //Документ об образовании - ОК
        result.att_date = document.getElementById(
            "form:applTab:applicantInfoRight"
        ).children[0].children[3].children[1].children[0].innerHTML; //Дата выдачи - ОК
        //document.getElementById("form:applTab:applicantInfoRight").children[0].children[4].children[1].innerHTML //Серия - ОК
        result.att_no = document.getElementById(
            "form:applTab:applicantInfoRight"
        ).children[0].children[5].children[1].innerHTML; //Номер - ОК
    }
    return result;
}

function GenerateButton(title) {
    let btn = document.createElement("button");
    btn.type = "button";
    btn.role = "button";
    btn.classList.add(
        "ui-button",
        "ui-widget",
        "ui-state-default",
        "ui-corner-all",
        "ui-button-text-only"
    );
    let btn_span = document.createElement("span");
    btn_span.classList.add("ui-button-text", "ui-c");
    btn_span.innerHTML = title;
    btn.appendChild(btn_span);
    return btn;
}

function GetMale() {
    let is_man = document.getElementById("form:applicationGender").children[0]
        .children[0].children[0].children[0].checked;
    let is_woman = document.getElementById("form:applicationGender").children[0]
        .children[0].children[1].children[0].checked;
    if (is_man) {
        return "м";
    } else if (is_woman) {
        return "ж";
    }
}

//let data = GenerateJSON(); //Получение информации


function CopyToBuffer(text) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            console.log("Данные скопированы в буфер обмена");
        })
        .catch((err) => {
            alert("Не удалось скопировать данные в буфер обмена \n" + err);
            console.error("Не удалось скопировать данные в буфер обмена", err);
        });
}

//Добавление кнопки "Создать в АИС КС 54"
//let ais_button = GenerateButton("Создать в АИС КС 54");
//document.getElementById("form:buttonPanel_content").prepend(ais_button);
//Добавление кнопки "Копировать в JSON"
let json_btn = GenerateButton("Копировать в JSON");
document.getElementById("form:buttonPanel_content").prepend(json_btn);
json_btn.addEventListener("click", function () {
    CopyToBuffer(JSON.stringify(GenerateJSON()));
});

/*let json_request_btn = GenerateButton("Копировать заявку в JSON");
document.getElementById("form:buttonPanel_content").prepend(json_request_btn);
json_request_btn.addEventListener("click", function () {
    CopyToBuffer(JSON.stringify(GenerateJSON(true)));
}); */

function GenerateTaskList(title, checks) {
    let maindiv = document.createElement("div");
    maindiv.classList.add("kw-portlet");
    let div_panel = document.createElement("div");
    div_panel.classList.add("ui-panel", "ui-widget", "ui-widget-content", "ui-corner-all");
    let div_title = document.createElement("div");
    div_title.classList.add("ui-panel-titlebar", "ui-widget-header", "ui-helper-clearfix", "ui-corner-all");
    let span_title = document.createElement("span");
    span_title.classList.add("ui-panel-title");
    span_title.innerHTML = title;
    let div_body = document.createElement("div");
    div_body.classList.add("ui-panel-content", "ui-widget-content");
    let table = document.createElement("table");
    table.classList.add("form-table", "form-vertical");
    maindiv.appendChild(div_panel);
    div_panel.appendChild(div_title);
    div_panel.appendChild(div_body);
    div_body.appendChild(table);
    div_title.appendChild(span_title)
    checks.forEach(checkbox => {
        let tr = document.createElement("tr");
        let td_title = document.createElement("td");
        let label_title = document.createElement("label");
        label_title.setAttribute("for", checkbox);
        label_title.style.userSelect = "none";
        //label_title.for = "checkbox";
        label_title.classList.add("ui-outputlabel", "ui-widget");
        label_title.innerHTML = checkbox;
        let td_checkbox = document.createElement("td");

        //Чекбокс
        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = checkbox;
        input.style.transform = "scale(1.8)";
        td_checkbox.style.textAlign = "center";
        td_title.appendChild(label_title);
        td_checkbox.appendChild(input);

        tr.appendChild(td_title);
        tr.appendChild(td_checkbox);
        table.appendChild(tr);
    });
    return maindiv;
}
document.getElementById("form").children[1].children[1].children[0].children[0].children[0].children[0].children[0].prepend(GenerateTaskList("Чек-лист аттестата", ["Приложение прикреплено", "Приложены обе стороны аттестата", "Уровень образования и программа обучения совпадают", "Номер аттестата совпадает", "Дата выдачи аттестата совпадает", "Средний бал посчитан"],));
document.getElementById("form").children[1].children[1].children[0].children[0].children[0].children[0].children[0].prepend(GenerateTaskList("Чек-лист прописки", ["Московская прописка", "Адрес совпадает", "Приложена временная регистрация"]));
document.getElementById("form").children[1].children[1].children[0].children[0].children[0].children[0].children[0].prepend(GenerateTaskList("Чек-лист паспорта", ["Серия и номер совпадают", "Дата рождения и пол совпадают", "Дата выдачи и код совпадает", "Кем выдан совпадает",],));
