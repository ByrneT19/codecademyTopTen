// Find all even numbers up to a given number
function even() {
    let s = ' ';
    // Base specifies which number you want to know all the even numbers up to
    let base = 10;
    const result = document.getElementById('even');
    for (let i = 0; i <= base; i++) {
        if (i % 2 == 0) {
            s += i + ' ';
        }
    }
    result.innerHTML = (`
        <h2 id="evens">All the Even Numbers</h2>
        <p>Numbers up to: ${base}</p>
        <p>${s}</p>
    `);
    document.getElementById('evens').style.textDecoration = 'underline';
};
even();

// Convert kilometers to miles
function converter() {
    // Use kilometers to specify how many kilometers to convert
    let kilometers = 10;
    let miles = kilometers * 0.62137;
    let final = Math.round((miles + Number.EPSILON) * 100) / 100;
    document.getElementById('conversions').innerHTML = (`
        <h2 id="kilos">Kilometers to Miles</h2>
        <p>Kilometers (${kilometers}) = ${final} miles</p>
    `);
    document.getElementById('kilos').style.textDecoration = 'underline';
};
converter();

// Give the sum of an array
function arrayTotal() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
    let arr3 = [1, 2.2, 2.3, 4, 3.5, 6, 9.7, 8, 2.9];
    let arr4 = [1, 2.2, 2.3, 4, 3.5, 6, 9.7, 8, 2.9, -5, 99, 0.8, -9.9];
    const sum1 = arr1.reduce((a, b) => a + b);
    const sum2 = arr2.reduce((a, b) => a + b);
    const sum3 = arr3.reduce((a, b) => a + b);
    const sum4 = arr4.reduce((a, b) => a + b);
    document.getElementById('reducer').innerHTML = (`
        <h2 id="sums">Sum of Arrays</h2>
        <p>${arr1.join(', ')} = <span class="sumRen">${sum1}</span></>    
        <p>${arr2.join(', ')} = <span class="sumRen">${sum2}</span></>
        <p>${arr3.join(', ')} = <span class="sumRen">${sum3}</span></>
        <p>${arr4.join(', ')} = <span class="sumRen">${sum4}</span></>
    `);
    document.getElementById('sums').style.textDecoration = 'underline';
};
arrayTotal();

// Reverses a given array
function reverse() {
    let s = ', ';
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const heading = document.createElement('h2');
    heading.innerHTML = 'Reversed Array';
    document.getElementById('reverser').appendChild(heading);
    let h2 = document.getElementById('reverser').firstElementChild;
    h2.setAttribute('id', 'revHead');
    document.getElementById('revHead').style.textDecoration = 'underline';
    let orignalArray = document.createElement('p');
    orignalArray.innerHTML = `The original array was: ${arr1.join(', ')}`;
    document.getElementById('reverser').appendChild(orignalArray);
    let result = arr1.reverse();
    let renderedResult = document.createTextNode(result.join(s));
    document.getElementById('reverser').appendChild(renderedResult);
};
reverse();

// Sorts array from lowest to highest
function sorter() {
    let arr1 = [1, 66, 89, 8, 4, 55, 53.5, 6, 44, 151698, 4684, 13.548, 2.4864];
    let result = arr1.sort(
        (a, b) => a - b
    );
    const heading = document.createElement('h2');
    heading.innerHTML = 'Array Sorted from Lowest to Highest';
    document.getElementById('sort').appendChild(heading);
    heading.setAttribute('id', 'sortHead');
    document.getElementById('sortHead').style.textDecoration = 'underline';
    let pageResult = document.createTextNode(result.join(', '));
    document.getElementById('sort').appendChild(pageResult);
};
sorter();

// Remopoves negative numbers from an array
function posNums() {
    let arr1 = [-1, 9, 8, -25, 68, -99, -78, 8, -1, 0];
    let result = [];
    for (i of arr1) {
        if (i >= 0) {
            result.push(i);
        }
    }
    const heading = document.createElement('h2');
    heading.innerHTML = 'Array with Negative Numbers Removed';
    document.getElementById('negs').appendChild(heading);
    heading.setAttribute('id', 'negHead');
    document.getElementById('negHead').style.textDecoration = 'underline';
    let orig = document.createElement('p');
    let origCont = document.createTextNode(arr1.join(', ') + ':');
    orig.appendChild(origCont);
    document.getElementById('negs').appendChild(orig);
    let final = document.createElement('p');
    let rendered = document.createTextNode(result.join(', '));
    final.appendChild(rendered);
    document.getElementById('negs').appendChild(final);
};
posNums();

// Removes the spaces from a sentence
function spacer() {
    let string1 = "If you say this sentence really quickly it sounds like this";
    let result = string1.replaceAll(' ', '');
    const heading = document.createElement('h2');
    heading.innerHTML = 'String with all Spaces Removed';
    document.getElementById('space').appendChild(heading);
    heading.setAttribute('id', 'spaceHead');
    document.getElementById('spaceHead').style.textDecoration = 'underline';
    let p1 = document.createElement('p');
    let p1_text = document.createTextNode(string1 + ':');
    p1.appendChild(p1_text);
    let p2 = document.createElement('p');
    let p2_text = document.createTextNode(result + '!!!');
    p2.appendChild(p2_text);
    document.getElementById('space').appendChild(p1);
    document.getElementById('space').appendChild(p2);
    p2.setAttribute('id', 'shout');
    document.getElementById('shout').style.fontWeight = '900';
};
spacer();

// Boolean function to say if a number is divisible by ten
function booly() {
    let arr1 = [9, 20, 10, 8, 7, 3, 30, 100];
    let arr2 = [];
    for (i of arr1) {
        if (i % 10 == 0) {
            arr2.push([i] + ': ' + true);
        }
    }
    let element = document.createElement('p');
    let element_text = document.createTextNode(arr2.join(', '));
    element.appendChild(element_text);
    const heading = document.createElement('h2');
    heading.innerHTML = 'Returns "True" if Number is Divisible by 10';
    document.getElementById('bool').appendChild(heading);
    heading.setAttribute('id', 'boolHead');
    document.getElementById('boolHead').style.textDecoration = 'underline';
    let origEle = document.createElement('p');
    let origEle_text = document.createTextNode('Original array: ' + arr1.join(', '));
    origEle.appendChild(origEle_text);
    document.getElementById('bool').appendChild(origEle);
    document.getElementById('bool').appendChild(element);
};
booly();

// Finds and displays all the vowels in a sentence
function vowels() {
    let string1 = 'This is a sentence with consonants and vowels within it';
    let result = [];
    for (i of string1) {
        if ((i == 'a') || (i == 'e') || (i == 'i') || (i == 'o') || (i == 'u') || (i == 'y')) {
            result.push(i);
        }
    }
    let result_length = result.length;
    let heading = document.createElement('h2');
    heading.innerHTML = 'All the Vowels from a Sentence';
    document.getElementById('vowels').appendChild(heading);
    heading.setAttribute('id', 'vowelHead');
    document.getElementById('vowelHead').style.textDecoration = 'underline';
    let p1 = document.createElement('p');
    let sentence_text = document.createTextNode('"' + string1 + '"');
    p1.appendChild(sentence_text);
    let p2 = document.createElement('p');
    let result_length_text = document.createTextNode('There are ' + result_length + ' vowels in this sentence. They are:')
    p2.appendChild(result_length_text);
    let p3 = document.createElement('p');
    let result_text = document.createTextNode(result.join(', '));
    p3.appendChild(result_text);
    document.getElementById('vowels').appendChild(p1);
    document.getElementById('vowels').appendChild(p2);
    document.getElementById('vowels').appendChild(p3);
};
vowels();