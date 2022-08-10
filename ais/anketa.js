const FieldsToCopy = [
  "surname",
  "name",
  "father",
  "date_birth",
  "pasp_type",
  "pasp_ser",
  "pasp_no",
  "pasp_vydan",
  "pasp_code",
  "pasp_date",
  "citizenship",
  "phone_mob",
  "email",
  "med_polis",
  "address_register_type",
  "address_register_city",
  "ed_level",
  "school_year",
  "att_type",
  "att_date",
  "att_no",
  "av_ball",
  "att_orig",
];

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

function GenerateJSON(fields) {
  let result = {};
  fields.forEach((field) => {
    if (document.getElementById(field)) {
      result[field] = document.getElementById(field).value;
    }
  });
  return result;
}

function GenerateButton(title) {
  let btn = document.createElement("button");
  btn.innerHTML = title;
  btn.style.marginBottom = "10px";
  btn.style.padding = "10px";
  btn.setAttribute("type", "button"); // works
  return btn;
}

let json_copy_btn = GenerateButton("Копировать данные анкеты");
json_copy_btn.addEventListener("click", function () {
  CopyToBuffer(JSON.stringify(GenerateJSON(FieldsToCopy)));
});

document
  .getElementById("anketa")
  .children[0].children[0].appendChild(json_copy_btn);
