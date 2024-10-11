let votes = {
    design1: 0,
    design2: 0,
    design3: 0
};

function vote(design) {
    votes[design]++;
    alert(`You voted for ${design}!`);
    console.log(votes); // This shows the votes in the console for testing
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const className = document.getElementById('class').value;
    const size = document.getElementById('size').value;

    alert(`Order received: ${fullName}, Class: ${className}, Size: ${size}. Please pay within three days.`);

    // Here you could send the data to a server or Google Sheets

    this.reset(); // Reset the form fields after submission
});
