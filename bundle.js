function fetchData() {
  const name = document.getElementById("studentName").value.trim();

  if (!name) {
    alert("Please enter a student name");
    return;
  }

  fetch(`https://backendc-ppul.onrender.com/api/students?name=${encodeURIComponent(name)}`)
    .then(response => response.json())
    .then(data => {
      if (data.success && data.student) {
        document.getElementById("result").innerHTML = `
          <h2>Student Found</h2>
          <p><strong>Name:</strong> ${data.student.name}</p>
          <p><strong>Course:</strong> ${data.student.course}</p>
          <p><strong>Fees:</strong> ₹${data.student.fees}</p>
          <p><strong>Status:</strong> ${data.student.status}</p>
        `;
      } else {
        document.getElementById("result").innerHTML = "<p>No student found.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("result").innerHTML = "<p>Error fetching data. Try again later.</p>";
    });
}
