document.addEventListener("DOMContentLoaded", function() {
    // Función para enviar los datos a Google Apps Script
    function sendDataToSheet(data) {
        fetch('https://script.google.com/macros/s/AKfycbxT0-Vx8W1FuwqZOSfg-rTvnX5_bZL9-vfdAovH_bO21YvPkhP-kkd9STz6J2XX-_g8/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            displayTables(data.tables); // Muestra las tablas recibidas
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al actualizar los datos');
        });
    }

    // Función para mostrar las tablas de resultados
    function displayTables(tables) {
        const table1Div = document.getElementById('table1');
        const table2Div = document.getElementById('table2');
        const table3Div = document.getElementById('table3');

        // Función para crear una tabla HTML desde un array
        function createTable(data) {
            let tableHTML = '<table border="1"><tr>';
            // Crear encabezados a partir de la primera columna
            for (let i = 1; i < data[0].length; i++) {  // Comienza en la columna 1 (salta la columna A)
                tableHTML += `<th>${data[0][i]}</th>`; // Usa la primera fila para los encabezados
            }
            tableHTML += '</tr>';
            // Mostrar las filas restantes
            for (let i = 1; i < data.length; i++) {
                tableHTML += '<tr>';
                for (let j = 1; j < data[i].length; j++) {  // Saltar la primera columna
                    tableHTML += `<td>${data[i][j]}</td>`;
                }
                tableHTML += '</tr>';
            }
            tableHTML += '</table>';
            return tableHTML;
        }

        // Mostrar las tres tablas
        table1Div.innerHTML = createTable(tables.table1);
        table2Div.innerHTML = createTable(tables.table2);
        table3Div.innerHTML = createTable(tables.table3);
    }

    // Función para detectar cambios en los inputs
    function setupInputListeners() {
        const fields = ['B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'L3', 'A7', 'B7', 'C7', 'D7'];

        fields.forEach(fieldId => {
            document.getElementById(fieldId).addEventListener('input', function() {
                const data = {};
                fields.forEach(id => {
                    data[id] = document.getElementById(id).value;
                });
                sendDataToSheet(data); // Enviar los datos al Google Apps Script
            });
        });
    }

    setupInputListeners();
});
