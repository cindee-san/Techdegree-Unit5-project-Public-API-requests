//search markup
const searchDiv = document.querySelector('.search-container');
const searchForm = document.createElement('form');
searchForm.setAttribute('method', 'get');
searchForm.setAttribute('action', '#');
searchDiv.appendChild(searchForm);

const searchField = document.createElement('input');
searchField.setAttribute('type','search');
searchField.setAttribute('id','search-input' );
searchField.setAttribute('class','search-input');
searchField.setAttribute('placeholder','Search...' );
searchForm.appendChild(searchField);

const submitSearch = document.createElement('input');
submitSearch.setAttribute('type','submit');
submitSearch.setAttribute('value','&#x1F50D;');
submitSearch.setAttribute('id','search-submit');
submitSearch.setAttribute('class','search-submit');
searchForm.appendChild(submitSearch);
