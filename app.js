// Get the input and output elements
const input = document.getElementById('input');
const output = document.getElementById('output');

// Get the select element
const fromSelect = document.getElementById('from-select');
const toSelect = document.getElementById('to-select');


// Function to handle the conversion
function convert() {
  // Get the selected options from the dropdowns
  const fromOption = fromSelect.options[fromSelect.selectedIndex];
  const toOption = toSelect.options[toSelect.selectedIndex];

  const conversionFactors = {
    'seconds-minutes': 1 / 60,
    'seconds-hours': 1 / 3600,
    'seconds-days': 1 / (24 * 60 * 60),
    'seconds-weeks': 1 / (7 * 24 * 60 * 60),
    'minutes-seconds': 60,
    'minutes-hours': 1 / 60,
    'minutes-days': 1 / (24 * 60),
    'minutes-weeks': 1 / (7 * 24 * 60),
    'hours-seconds': 3660,
    'hours-minutes': 60,
    'hours-days': 1 / 24,
    'hours-weeks': 1 / (7 * 24),
    'days-seconds': 24 * 60 * 60,
    'days-minutes': 24 * 60,
    'days-hours': 24,
    'days-weeks': 1 / 7,
    'weeks-seconds': 7 * 24 * 60 * 60,
    'weeks-minutes': 7 * 24 * 60,
    'weeks-hours': 7 * 24,
    'weeks-days': 7,
    'default': 1
  };
  
  const factor = conversionFactors[`${fromOption.value}-${toOption.value}`] || conversionFactors.default;
  
  

  // Perform the conversion
  const inputValue = parseFloat(input.value);
  const outputValue = inputValue * factor;

  // Update the output element
  output.textContent = outputValue.toFixed(2);
}

// Add event listeners to the input and select elements
input.addEventListener('input', convert);
fromSelect.addEventListener('change', convert);
toSelect.addEventListener('change', convert);

// get the current year
const getYearAndUrl = () => {
  let year = document.getElementById('getYear');
  let currentPage = document.getElementById('currentPage');
  year.innerText = new Date().getFullYear();
  currentPage.href = window.location.href;
};