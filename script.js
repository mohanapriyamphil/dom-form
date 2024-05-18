function addData() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    var table = `<tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${address}</td>
                    <td>${pincode}</td>
                    <td>${state}</td>
                    <td>${country}</td>`;

    document.getElementById('tableData').innerHTML += table;
    clearForm();
}

function clearForm() {
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('address').value = "";
    document.getElementById('pincode').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";
}