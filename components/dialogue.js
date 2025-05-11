let branches = ["CSE", "IT", "ECE", "ME"];

let branchOptions = branches.map(branch => `<option value="${branch}">${branch}</option>`).join("");

let formElement = `     



   <form method="dialog" style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; flex-direction: row; gap: 25px;">
         <select id="branch" name="branch"  style="width:220px">
            ${branchOptions}
         </select>
      </div>
       
      <div style="display: flex; flex-direction: row; gap: 10px;">
        <select id="semester" name="semester" style="width:220px">
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
        </select>
      </div>

        <button id="confirmSelection" value="default">Confirm</button>
        <button id="cancel" value="default" style="border-color: transparent; background-color: transparent;">Cancel</button>
    </form>
`;

// Insert the form into the dialog with id="branchSemesterDialog"
document.getElementById("branchSemesterDialog").innerHTML = formElement;

    const dialog = document.getElementById("branchSemesterDialog");
    const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", () => {
        dialog.showModal();
    });

    document.getElementById("confirmSelection").addEventListener("click", () => {
        const branch = document.getElementById("branch").value;
        const semester = document.getElementById("semester").value;

        console.log(`User selected Branch: ${branch}, Semester: ${semester}`);
        dialog.close();

        // Optional: Redirect or dynamically load content
         window.location.href = `../../../data/${branch}/semester${semester}/index.html`;
    });

