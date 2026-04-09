const issueForm = document.getElementById("issue-form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const prioritySelect = document.getElementById("priority");
const issueList = document.getElementById("issue-list");

// Store all issues here
let issues = [];

// Handle form submit
issueForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Issue object
  const newIssue = {
    id: Date.now(),
    title: titleInput.value,
    description: descriptionInput.value,
    priority: prioritySelect.value,
    status: "Open",
  };

  issues.push(newIssue);

  // Update UI
  renderIssues();

  // Clear form
  issueForm.reset();
});

// Show all issues on the page
function renderIssues() {
  issueList.innerHTML = "";

  issues.forEach(function (issue) {
    issueList.innerHTML += `
        
        <div class="issue-card">
         <h3>${issue.title}</h3>
         <p>${issue.description}</p>
         <p>Priority: ${issue.priority}</p>
         <p>Status: ${issue.status}</p>
         <button class="status-btn">Change Status</button>
        <button onclick="deleteIssue(${issue.id})" class="delete-btn">Delete</button>
        </div>
        
        `;
  });
}

function deleteIssue(id) {
  issues = issues.filter(function (issue) {
    return issue.id !== id;
  });
  renderIssues();
}
