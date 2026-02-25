// Student Class
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    getDetails() {
        return `
            <div class="student-card">
                <h3>${this.name}</h3>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong> ${this.courses.join(", ")}</p>
            </div>
        `;
    }
}

// Creating Student Objects using const
const student1 = new Student(101, "Ali Khan", 3, ["OOP", "DSA", "DBMS"]);
const student2 = new Student(102, "Sara Ahmed", 5, ["AI", "OS", "CN"]);
const student3 = new Student(103, "Hassan Raza", 1, ["Programming", "Math", "Physics"]);

// Store all students in array using let
let students = [student1, student2, student3];

// Display students dynamically
const container = document.getElementById("studentContainer");

let output = "";
students.forEach(student => {
    output += student.getDetails();
});

container.innerHTML = output;