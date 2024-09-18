function insert_Row() {
    //Write your code here
  let tableBody = document.getElementById('sampleTable').getElementsByTagName('tbody')[0];

    let newRow = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = 'New Cell1';
    let cell2 = document.createElement('td');
    cell2.textContent = 'New Cell2';

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Inserting the new row at the beginning of the table body
    if (tableBody.rows.length > 0) {
        tableBody.insertBefore(newRow, tableBody.rows[0]);
    } else {
        tableBody.appendChild(newRow); // If no rows exist, just append the new row
    }
  
}
