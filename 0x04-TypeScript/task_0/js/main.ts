interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ami",
  lastName: "Choudhary",
  age: 28,
  location: "Canada"
};

const student2: Student = {
  firstName: "Robin",
  lastName: "Choudhary",
  age: 32,
  location: "Kenya"
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studentsList.forEach(student => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable();
