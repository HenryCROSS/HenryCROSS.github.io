/* Add any JavaScript you need to this file. */
var data = [
  {
    id: 1,
    name: 'Milk And Honey',
    image: 'milkAndHoney.jpg',
    description: 'A book for Magic studying',
    categories: 'Magic',
    price: 100
  },
  {
    id: 2,
    name: 'Pro Django',
    image: 'proDjango.jpg',
    description: 'A book for programming',
    categories: 'Coding',
    price: 200
  },
  {
    id: 3,
    name: 'Da Lat',
    image: 'DaLat.jpg',
    description: 'Advance Magical Study',
    categories: 'Magic',
    price: 100
  },
  {
    id: 4,
    name: 'WEB Learning Packet',
    image: 'webLearning.jpg',
    description: 'Getting better for web programming',
    categories: 'Coding',
    price: 450
  },
  {
    id: 5,
    name: 'Javascript For WEB Designers',
    image: 'javascriptForWEBDesigners.jpg',
    description: 'A book for web designing',
    categories: 'Coding',
    price: 200
  },
  {
    id: 6,
    name: 'ONYX & IVORY',
    image: 'ONYXnIVORY.jpg',
    description: 'One of the interesting magic book in 404 book store',
    categories: 'Magic',
    price: 404
  },
  {
    id: 7,
    name: 'The PATH 404',
    image: 'ThePATH404.jpg',
    description: 'A hero who step into the Path 404',
    categories: 'Novel',
    price: 404
  },
  {
    id: 8,
    name: 'The Path 301',
    image: 'ThePath301.jpg',
    description: 'A secret that hides in the shadow of the path...',
    categories: 'Novel',
    price: 301
  },
  {
    id: 9,
    name: 'The Goldem And The Jinni',
    image: 'TheGoldemAndTheJinni.jpg',
    description: 'A story about Goldem and Jinni',
    categories: 'Novel',
    price: 400
  },
  {
    id: 10,
    name: 'The Path 200',
    image: 'ThePath200.jpg',
    description: 'They finally succeeded and...',
    categories: 'Novel',
    price: 200
  }
];

var categories = [
  {
    name: 'Magic',
    icon: 'fas fa-hat-wizard'
  },
  {
    name: 'Coding',
    icon: 'fas fa-code'
  },
  {
    name: 'Novel',
    icon: 'far fa-laugh-wink'
  }
];

var goodsList = document.querySelector('.goods');

function appendBook(element) {
  var book = document.createElement('div');
  book.className = 'book';
  book.id = element.id;

  var figure = document.createElement('figure');
  var bookImg = document.createElement('img');
  bookImg.id = 'img';
  bookImg.src = './/image//' + element.image;
  bookImg.width = 170;
  bookImg.height = 150;
  bookImg.alt = 'Store logo';
  figure.appendChild(bookImg);
  book.appendChild(figure);

  var bookInfo = document.createElement('p');
  bookInfo.id = 'info';

  var bookCategory = document.createElement('categories');
  bookCategory.id = 'categories';
  bookCategory.innerHTML = 'Categories: ' + element.categories;
  bookInfo.appendChild(bookCategory);

  var bookName = document.createElement('span');
  bookName.id = 'name';
  bookName.innerHTML = 'Name: ' + element.name;
  bookInfo.appendChild(bookName);

  var bookPrice = document.createElement('price');
  bookPrice.id = 'price';
  bookPrice.innerHTML = 'Price: $' + element.price;
  bookInfo.appendChild(bookPrice);

  var bookDesc = document.createElement('desc');
  bookDesc.id = 'desc';
  bookDesc.innerHTML = 'Description: ' + element.description;
  bookInfo.appendChild(bookDesc);

  book.appendChild(bookInfo);

  var optionList = document.createElement('p');
  optionList.id = 'option';

  var optionAddToCart = document.createElement('span');
  optionAddToCart.innerHTML = 'Add to Cart';
  optionList.appendChild(optionAddToCart);

  var optionBuy = document.createElement('span');
  optionBuy.innerHTML = 'Buy';
  optionList.appendChild(optionBuy);

  book.appendChild(optionList);

  goodsList.appendChild(book);
}
// add the items
function appendBooks() {
  data.map(book => {
    appendBook(book);
  });
}
appendBooks();

var categoryList = document.querySelector('.sidebar');

//add catagory
categories.map(element => {
  var category = document.createElement('div');

  var cateIcon = document.createElement('i');
  cateIcon.className = element.icon;
  category.appendChild(cateIcon);

  var cateName = document.createElement('p');
  cateName.innerHTML = element.name;
  category.appendChild(cateName);

  // selectionButtonRemoveFromCategoryList(category);
  selectionButtonAppend(category);

  categoryList.appendChild(category);
});

var selectionList = document.querySelector('#selection');
function selectionButtonAppend(button) {
  var categoryName = button.querySelector('p').innerHTML;
  button.addEventListener('click', () => {
    // whether the option is exist
    var exist = 0;
    selectionList.querySelectorAll('span').forEach(name => {
      if (name.innerHTML == categoryName) {
        ++exist;
      }
    });

    // if the selection has been actived, then remove the selection
    if (exist) {
      selectionList.querySelectorAll('span').forEach(element => {
        if (element.innerHTML == categoryName) {
          selectionList.removeChild(element);
          hideBooks();
          displayBooks();
          return;
        }
      });
      document
        .querySelector('.sidebar')
        .querySelectorAll('div')
        .forEach(element => {
          if (element.querySelector('p').innerHTML == categoryName) {
            element.style.backgroundColor = '#f0f0a7';
          }
        });
      return;
    }

    // append a button in the selection list
    var span_element = document.createElement('span');
    span_element.innerHTML = categoryName;
    selectionButtonRemove(span_element);
    selectionList.appendChild(span_element);

    // change color
    button.style.backgroundColor = '#DBAA6F';

    //display the correct books
    hideBooks();
    displayBooks();
  });
}

function selectionButtonRemove(button) {
  button.addEventListener('click', () => {
    selectionList.querySelectorAll('span').forEach(element => {
      if (element.innerHTML == button.innerHTML) {
        selectionList.removeChild(element);
        hideBooks();
        displayBooks();
        return;
      }
    });
    document
      .querySelector('.sidebar')
      .querySelectorAll('div')
      .forEach(element => {
        if (element.querySelector('p').innerHTML == button.innerHTML) {
          element.style.backgroundColor = '#f0f0a7';
        }
      });
  });
}

var bookList = document.querySelector('.goods');
function displayBooks() {
  var tagNumber = selectionList.querySelectorAll('span').length;
  if (!tagNumber) {
    bookList.innerHTML = null;
    appendBooks();
    return;
  }
  data.map(book => {
    var exist = 0;
    var trueType = 0;

    // whether exist in the book list
    bookList.querySelectorAll('.book').forEach(element => {
      if (element.id == book.id) {
        ++exist;
      }
    });
    if (exist) {
      return;
    }

    // whether is the correct category
    selectionList.querySelectorAll('span').forEach(element => {
      if (element.innerHTML == book.categories) {
        ++trueType;
      }
    });
    if (!trueType) {
      return;
    }
    appendBook(book);
  });
}

function hideBooks() {
  var tagNumber = selectionList.querySelectorAll('span').length;
  if (!tagNumber) {
    return;
  }

  var exist = 0;
  bookList.querySelectorAll('div').forEach(element => {
    selectionList.querySelectorAll('span').forEach(categories => {
      if ('Categories: ' + categories.innerHTML == element.querySelector('#categories').innerHTML) {
        exist++;
      }
    });

    if (!exist) {
      bookList.removeChild(element);
      return;
    } else {
      exist = 0;
    }
  });
}