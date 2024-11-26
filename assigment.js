var arrayID = ["kak", "titi", "tyty", "oop", "gojo"];
var tbody = document.querySelector('tbody');
var inputName = document.getElementById('num-txt');
var buttonsubmit = document.getElementById('btn-submit');
var buttonupdate = document.getElementById('btn-update');
var buttondelete = document.getElementById('btn-delete');

const sweetAlert = (title,text,icon) =>{
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        button: "Done"
      });
}
const showInfo = () => {

    var show = '';
    arrayID.forEach((value, index, array) => {
        show += `
            <tr>
                <td>${index}</td>
                <td>${value}</td>
                <td><button onclick="clicker(${index})" class="btn btn-outline-primary">Click</button></td>
            </tr>
        `;
    });
    tbody.innerHTML = show;
};


const clicker = (index) => {
    buttonupdate.classList.remove('d-none');
    buttondelete.classList.remove('d-none');
    inputName.value = arrayID[index];
    clearButtonEvent();

    buttonupdate.addEventListener('click', function() {
        arrayID[index] = inputName.value;
        showInfo();
        resetform();
        sweetAlert("Update success","click on button for Accept","success");
    });
    buttondelete.addEventListener('click',function(){
        arrayID.splice(index,1);
        showInfo();
        resetform();
        sweetAlert("Delete success","click on button for Accept","success");
    });
}

const resetform = () =>{
    inputName.value = "";
    buttonupdate.classList.add('d-none');
    buttondelete.classList.add('d-none');
}
const clearButtonEvent = () =>  {
    const btnNewupdate = buttonupdate.cloneNode(true);
    const btnNewdelete = buttondelete.cloneNode(true);

    buttonupdate.parentNode.replaceChild(btnNewupdate,buttonupdate);
    buttondelete.parentNode.replaceChild(btnNewdelete,buttondelete);

    buttonupdate = btnNewupdate;
    buttondelete = btnNewdelete;
}
buttonsubmit.addEventListener("click", () =>{
    if (inputName?.value) {
        arrayID.push(inputName?.value);
        showInfo();
        resetform();
        sweetAlert("Good job","click on button for Accept","success");
    }
});
showInfo();