alert("Welcome to LITU Local Web")
// Function to check if upgrade is needed
function checkUpgrade() {
    // Add your logic here. For example:
    let upgradeNeeded = true; // Change this based on your condition
if (upgradeNeeded) {
        document.getElementById("upgrade-message").style.display = "block";
    }
}
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}