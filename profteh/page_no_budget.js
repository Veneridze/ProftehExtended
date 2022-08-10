const FieldsMatch = {
  surname:"form:applicationLastName",
  name:"form:applicationFirstName",
  father:"form:applicationMiddleName",
  //gender:"",
  date_birth:"form:applicationBirthday_input",
  pasp_type:"form:applTab:j_idt444:j_idt352_input",
  pasp_ser:"form:applTab:docSerial:j_idt446",
  pasp_no:"form:applTab:j_idt449:j_idt427",
  pasp_vydan:"form:applTab:j_idt451:j_idt427",
  pasp_code:"form:applTab:j_idt453:j_idt437",
  pasp_date:"form:applTab:j_idt455_input",
  citizenship:"form:applTab:nationality:j_idt352_input",
  phone_mob:"form:applTab:contactPhone:j_idt437",
  email:"form:applTab:contactEmail:j_idt441",
  //med_polis: "form:applTab:j_idt464:j_idt427",
  address_register_type:"form:applTab:regType:j_idt352_input",
  address_register_city:"form:applTab:j_idt477:j_idt352_input",
  ed_level:"form:applTab:j_idt503:j_idt352_input",
  school_year:"form:applTab:graduationYear",
  att_type:"form:applTab:j_idt508:j_idt352_input",
  att_date:"form:applTab:docEducationIssueDate_input",
  att_no:"form:applTab:j_idt515:j_idt427",
  av_ball:"form:applTab:averageMarkMask:j_idt437",
  att_orig:"form:applTab:j_idt518",
};

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

function PasteJsonFromBuffer(data) {
  for (const [key, value] of Object.entries(data)) {
    if (FieldsMatch[key] && document.getElementById(FieldsMatch[key])) {
      //console.log(key);
      console.log(FieldsMatch[key]);
      console.log(value);
      document.getElementById(FieldsMatch[key]).value = ConvertValue(
        key,
        value
      );
    }
  }
  AdditionActions(data);
}

function AdditionActions(data) {
  document.getElementById("form:applTab:j_idt525").checked = true;
  if(data['att_orig'] && data['att_orig'] == 'ORIG') {
    document.getElementById('form:applTab:j_idt518').checked = true;
  }

  //Установка поля Документ об образовании и (или) документ об образовании и о квалификации*:

  if(data['ed_level'] == 'SCH9') {
    document.getElementById('form:applTab:j_idt508:j_idt352_input').value = "Аттестат об основном общем образовании";
  } else if(data['ed_level'] == 'SCH11') {
    document.getElementById('form:applTab:j_idt508:j_idt352_input').value = "Аттестат о среднем (полном) общем образовании";
  }

  /*case "att_type": 
            return ""
        case "att_orig": 
            if()
        break; */
  //document.getElementById("form:applTab:docOMS_input").value = "Полис ОМС";
}

function ConvertValue(key, value) {
  switch (key) {
    case "pasp_type":
      if (value == "pass") {
        return "Паспорт гражданина Российской Федерации";
      } else {
        return "";
      }
    case "address_register_type":

      if (value == "const") {
        return "Адрес регистрации по месту жительства";
      } else if (value == "temp") {
        return "Адрес регистрации по месту пребывания";
      } else {
        return "";
      }
    case "address_register_city":
      if (value == "Москва") {
        return "Город Москва";
      }
      if (value == "Московская область") {
        return "Московская область";
      }
      if (value == "") {
        return "Отсутствует регистрация";
      } else {
        return "Другое";
      }
    case "ed_level":
      if (value == "SCH9") {
        return "Основное общее образование";
      }
      if (value == "SCH11") {
        return "Среднее общее образование";
      } else {
        return "";
      }

    default:
      return value;
  }
}

let json_btn_paste = GenerateButton("Вставить из буфера");
//document.getElementById("form:buttonPanel_content").prepend(json_btn_paste);
document.getElementById("form").prepend(json_btn_paste);
json_btn_paste.addEventListener("click", async function () {
  let text_json = {};
  try {
    const text = await navigator.clipboard.readText();
    text_json = JSON.parse(text);
  } catch (error) {
    alert("Некорректное содержимое буфера");
  }
  PasteJsonFromBuffer(text_json);
});
