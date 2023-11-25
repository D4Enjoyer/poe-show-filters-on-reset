// ==UserScript==
// @name        poe-show-filters-on-reset
// @namespace   https://github.com/D4Enjoyer/poe-show-filters-on-reset
// @version     1.0
// @description Automatically shows the filters when clearing a search on POE Trade
// @author      A God Gamer with his dear friend ChatGPT
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @match       https://www.pathofexile.com/trade*
// @grant       none
// @require     https://code.jquery.com/jquery-latest.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

// Function to show filters when reset is clicked
function showFiltersOnReset() {
    waitForKeyElements('.btn.clear-btn', (element) => {
        console.log('Clear button element found');

        // Function to handle click on 'clear-btn'
        $(element).unbind("click").on('click', handleClearButtonClick);
    });
}

// Function to handle click on 'clear-btn'
function handleClearButtonClick() {
    console.log('Clear button clicked');

    // Check if 'toggle-search-btn' contains 'Show Filters' text
    const toggleBtn = $(this).closest('.controls-right').find('.btn.toggle-search-btn');
    const toggleText = toggleBtn.text();
    console.log('Toggle button text:', toggleText);

    // If it does, click the 'Show Filters' button
    if (toggleText.includes('Show Filters')) {
        console.log('Show Filters button found');
        clickShowFiltersButton(toggleBtn);
    }
}

// Function to click on the 'Show Filters' button
function clickShowFiltersButton(button) {
    button.click();
    console.log('Clicked on Show Filters button');
}

// Initial execution of the main function
showFiltersOnReset();

