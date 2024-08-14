document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is empty
    if (input === '') {
        resultDiv.innerHTML = '<span style="color: red;">Please input a value</span>';
        alert('Please input a value');
        return;
    }
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    if (isPalindrome) {
        resultDiv.innerHTML = `<span style="color: green;">${input} is a palindrome!</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color: red;">${input} is not a palindrome.</span>`;
    }
});
