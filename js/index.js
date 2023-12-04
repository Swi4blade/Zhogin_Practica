//Выполнил Жогин Дмитрий 3ИСИП-821

//Практика
//Задание 464
//№1
let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
    parent.appendChild(p);
    p.addEventListener('click', function() {
        p.textContent = Number(p.textContent) + 1;
    }); 
};

//Задание 465
let elem = document.querySelector('#elem');
let arr2 = [1, 2, 3, 4, 5];
for (let i of arr) {
    let li = document.createElement('li');
    li.textContent = i;
    elem.appendChild(li);
    li.addEventListener('click', function() {
        console.log(li.textContent);
        if (! li.classList.contains('clicked')) {
            li.textContent = li.textContent + '!';
            li.classList.add('clicked');
        }
    });
};

//Задание 466
//№1-3
let table = document.querySelector('#table');
for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
        td.textContent = 'x';
		tr.appendChild(td);
	}
	table.appendChild(tr);
};

//№4
let table2 = document.querySelector('.table');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let button1 = document.querySelector('.button1');
button1.addEventListener('click', function() {
    let y = Number(input1.value);
    let x = Number(input2.value);
    for (let i = 0; i < y; i++) {
    	let tr = document.createElement('tr');
    	for (let i = 0; i < x; i++) {
    		let td = document.createElement('td');
            td.textContent = 'x';
    		tr.appendChild(td);
    	}
    	table2.appendChild(tr);
    };
});

//Задание 467
//№1-2
let table3 = document.querySelector('#table1');
let x = 2;
for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = x; 
		x++ * x++;
		tr.appendChild(td);
	}
	table3.appendChild(tr);
}

//Задание 468
//№1-2
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table4 = document.querySelector('#table2');
for (let subArr of arr3) {
	let tr = document.createElement('tr');
	for (let elem of subArr) {
		let td = document.createElement('td');
        td.textContent = elem * elem;
		tr.appendChild(td);
	}
	table4.appendChild(tr);
}

//Задание 469
//№1-3
let table5 = document.querySelector('#table3');
let users = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
for (let user of users) {
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
    td2.addEventListener('click', function() {
        user.age++;
        td2.textContent = user.age;
    });
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);
    td3.addEventListener('click', function() {
        user.salary = user.salary + (10 * (user.salary / 100));
        td3.textContent = user.salary;
    });
	table5.appendChild(tr);
}

//Задание 470
//№1
let table6 = document.querySelector('#table4');
let button2 = document.querySelector('.button2');
let tr = document.createElement('tr');
for (let i = 1; i <= 3; i++) {
    let td = document.createElement('td');
	tr.appendChild(td);
}
table6.appendChild(tr);
button2.addEventListener('click', function() {
    let tr = document.createElement('tr');
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table6.appendChild(tr);
});
//№2
let table7 = document.querySelector('#table5');
let button3 = document.querySelector('.button3');
button3.addEventListener('click', function() {
    let tr = document.createElement('tr');
    let trs = document.querySelectorAll('#table5 tr');
    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table7.appendChild(tr);
});

//Задание 471
//№1
let table8 = document.querySelector('#table6');
let button4 = document.querySelector('.button4');
button4.addEventListener('click', function() {
    let tds = document.querySelectorAll('#table6 td');
    for (let td of tds) {
        td.textContent = Number(td.textContent) * 2;
    }
});

//Задание 472
//№1
let parent2 = document.querySelector('#parent2');
let button5 = document.querySelector('.button5');
let lis = document.querySelectorAll('#parent2 li');
button5.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = parent2.children.length + 1;
    li.addEventListener('click', function() {
        this.remove();
    });
    parent2.appendChild(li);
});
for (let li of lis) {
    li.addEventListener('click', function() {
        this.remove();
    });
}

//Задание 473
//№1
let elem2 = document.querySelector('#elem2');
let remove = document.querySelector('#remove');
remove.addEventListener('click', function(event) {
	elem2.remove();
	event.preventDefault(); 
});

//Задание 474
//№1
let elems = document.querySelectorAll('#ul li');
for (let elem of elems) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'удалить';
	elem.appendChild(remove);
}
//№2
let trs = document.querySelectorAll('#table7 tr');
for (let tr of trs) {
    let td = document.createElement('td');
    tr.appendChild(td);
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'удалить';
    td.appendChild(remove);
    remove.addEventListener('click', function(event) {
        tr.remove(); 
        event.preventDefault();
    });
}

//Задание 475
//№1
let elem3 = document.querySelector('#elem3');
let input3 = document.querySelector('#input3');
input3.value = elem3.textContent;
input3.addEventListener('keypress', function() {
	elem3.textContent = input3.value;
});
//№2
let elem4 = document.querySelector('#elem5');
elem4.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem4.textContent;
	
	input.addEventListener('blur', function() {
		elem4.textContent = this.value;
		this.remove();
	});
	elem4.parentElement.appendChild(input);
});

//Задание 476
//№1
let elem5 = document.querySelector('#elem6');
elem5.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem5.textContent;
	elem5.textContent = '';
	elem5.appendChild(input);
	input.addEventListener('blur', function() {
		elem5.textContent = this.value;
		elem5.addEventListener('click', func);
	});
	elem5.removeEventListener('click', func);
});

//Задание 477
//№1
let elemsx = document.querySelectorAll('#elem7 li');
for (let elem of elemsx) {
	elem.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = elem.textContent;
		elem.textContent = '';
		elem.appendChild(input);
		input.addEventListener('blur', function() {
			elem.textContent = this.value;
			elem.addEventListener('click', func);
		});
		elem.removeEventListener('click', func);
	});
}

//Задание 478
//№1
let ps = document.querySelectorAll('#parent10 p span');
let pr = document.querySelectorAll('#parent10 p');
for (let p of pr) {
	let span = document.createElement('span');
	span.textContent = p.textContent;
	p.textContent = '';
	p.appendChild(span)
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'удалить';
    p.appendChild(remove);
    remove.addEventListener('click', function(event) {
        p.remove(); 
        event.preventDefault();
    });
}

for (let p of ps) {
	p.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = p.textContent;
		p.textContent = '';
		p.appendChild(input);
		input.addEventListener('blur', function() {
			p.textContent = this.value;
			p.addEventListener('click', func);
		});
		p.removeEventListener('click', func);
	});
}

//Задание 479
//№1-№2
let list = document.querySelectorAll('.n479 p');
for (let p of list) {
	let span = document.createElement('span');
	span.textContent = p.textContent;
	p.textContent = '';
	p.appendChild(span)
    let crs = document.createElement('a');
    crs.href = '';
    crs.textContent = 'перечеркнуть';
    p.appendChild(crs);
    crs.addEventListener('click', function(event) {
		span.style.textDecoration = 'line-through';
		event.preventDefault();
		crs.remove(); 
    });
}

//Задание 479
//№3-№4
let trs1 = document.querySelectorAll('#table9 tr');
for (let tr of trs1) {
    let td = document.createElement('td');
    tr.appendChild(td);
    let color = document.createElement('a');
    color.href = '';
    color.textContent = 'green';
    td.appendChild(color);
    color.addEventListener('click', function(event) {
		tr.classList.toggle('color');
        event.preventDefault();
    });
}

//Задание 480
//№1
let p = document.querySelector('#elem8');
let button6 = document.querySelector('.button6');
button6.addEventListener('click', function() {
	p.classList.toggle('hs');
});

//Задание 481
//№1
let buttons  = document.querySelectorAll('.n481 button');
for (let button of buttons) {
	button.addEventListener('click', function() {
		let elem = document.querySelector('#' + this.dataset.elem);
		elem.classList.toggle('hidden');
	});
}
//№2
let buttons1 = document.querySelectorAll('.n481 button');
let elems2 = document.querySelectorAll('.n481 p');
for (let i = 0; i < buttons1.length; i++) {
	buttons1[i].addEventListener('click', function() {
		elems2[i].classList.toggle('hidden');
	});
}
//№3
let buttons2 = document.querySelectorAll('.n481 button');
for (let btn of buttons2) {
	btn.addEventListener('click', function() {
		btn.previousElementSibling.classList.toggle('hs');
	});
}

//Задание 482
//№1-№2
let tds1 = document.querySelectorAll('#table10 td');
for (let td of tds1) {
    td.addEventListener('click', function() {
        td.classList.toggle('color2'); 
    });
}

//Задание 484
//№1-№5
let bd = document.querySelector('.n484');
let elements = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'];

for (let i = 0; i < 1; i++) {
    let ul = document.createElement('ul');

    for (let elem of elements) {
        let li = document.createElement('li');

        li.textContent = elem;
        ul.appendChild(li);
    }

    bd.appendChild(ul);

	let lis = document.querySelectorAll('.n484 li');

	for (let li of lis) {
		let span = document.createElement('span');
		span.textContent = li.textContent;
		li.textContent = '';
		li.appendChild(span)

	    let remove = document.createElement('a');
	    remove.href = '';
	    remove.textContent = 'удалить';

	    li.appendChild(remove);

	    remove.addEventListener('click', function(event) {
	        li.remove(); 
	        event.preventDefault();
	    });

		let crs = document.createElement('p');
		
		crs.textContent = 'перечеркнуть';
		li.appendChild(crs);
	
		crs.addEventListener('click', function() {
			span.style.textDecoration = 'line-through';
			crs.remove(); 
		});
	}

	let lispan = document.querySelectorAll('.n484 li span');

	for (let li of lispan) {
		li.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = li.textContent;
			
			li.textContent = '';
			li.appendChild(input);
			
			input.addEventListener('blur', function() {
				li.textContent = this.value;
				li.addEventListener('click', func);
			});
	
			li.removeEventListener('click', func);
		});
	}

	let input = document.createElement('input');
    input.placeholder = 'Введите новый элемент';

	input.addEventListener('blur', function() {
		let li = document.createElement('li');
		li.classList.add('newli');

        li.textContent = input.value;
        ul.appendChild(li);

		let lisnew = document.querySelectorAll('.newli');

		for (let li of lisnew) {
			let span = document.createElement('span');
			span.textContent = li.textContent;
			li.textContent = '';
			li.appendChild(span)
	
			let remove = document.createElement('a');
			remove.href = '';
			remove.textContent = 'удалить';
	
			li.appendChild(remove);
	
			remove.addEventListener('click', function(event) {
				li.remove(); 
				event.preventDefault();
			});
	
			let crs = document.createElement('p');
			
			crs.textContent = 'перечеркнуть';
			li.appendChild(crs);
		
			crs.addEventListener('click', function() {
				span.style.textDecoration = 'line-through';
				crs.remove(); 
			});
		}
	
		let newlispan = document.querySelectorAll('.newli span');
	
		for (let li of newlispan) {
			li.addEventListener('click', function func() {
				let input = document.createElement('input');
				input.value = li.textContent;
				
				li.textContent = '';
				li.appendChild(input);
				
				input.addEventListener('blur', function() {
					li.textContent = this.value;
					li.addEventListener('click', func);
				});
		
				li.removeEventListener('click', func);
			});
		}
    });

    bd.appendChild(input);
}

//№6-№9
let table11 = document.querySelector('.table11');
let users1 = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of users1) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table11.appendChild(tr);
}

let tds = document.querySelectorAll('.n484-1 td');

for (let td of tds) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = td.textContent;
		
		td.textContent = '';
		td.appendChild(input);
		
		input.addEventListener('blur', function() {
			td.textContent = this.value;
			td.addEventListener('click', func);
		});

		td.removeEventListener('click', func);
	});
}

let trs2 = document.querySelectorAll('.n484-1 tr');

for (let tr of trs2) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'удалить';

	tr.appendChild(remove);

	remove.addEventListener('click', function(event) {
		tr.remove(); 
		event.preventDefault();
	});
}

let table13 = document.querySelector('.n484-1');

let inputs = document.createElement('input');
inputs.placeholder = 'Введите имя работника';
table13.appendChild(inputs);

let inputa = document.createElement('input');
inputa.placeholder = 'Введите возраст работника';
table13.appendChild(inputa);

let inputp = document.createElement('input');
inputp.placeholder = 'Введите зарплату работника';
table13.appendChild(inputp);

let btnx = document.createElement('button');
btnx.textContent = 'Добавить работника';
table13.appendChild(btnx);

btnx.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = inputs.value;
	td1.classList.add('new');
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = inputa.value;
	td2.classList.add('new');
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = inputp.value;
	td3.classList.add('new');
	tr.appendChild(td3);
	
	table11.appendChild(tr);

	let tdsnew = document.querySelectorAll('.new');

	for (let td of tdsnew) {
		td.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = td.textContent;

			td.textContent = '';
			td.appendChild(input);

			input.addEventListener('blur', function() {
				td.textContent = this.value;
				td.addEventListener('click', func);
			});

			td.removeEventListener('click', func);
		});
	}
});

//№10-№13
let table12 = document.querySelector('.table12');
let users2 = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of users2) {
	let tr = document.createElement('ul');
	
	let td1 = document.createElement('li');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('li');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('li');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table12.appendChild(tr);
}

let tdsb = document.querySelectorAll('.table12 li');

for (let td of tdsb) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = td.textContent;
		
		td.textContent = '';
		td.appendChild(input);
		
		input.addEventListener('blur', function() {
			td.textContent = this.value;
			td.addEventListener('click', func);
		});

		td.removeEventListener('click', func);
	});
}

let tdli = document.querySelectorAll('.table12 ul');

for (let ul of tdli) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'удалить';

	ul.appendChild(remove);

	remove.addEventListener('click', function(event) {
		ul.remove(); 
		event.preventDefault();
	});
}

let table14 = document.querySelector('.n484-2');

let inputs1 = document.createElement('input');
inputs1.placeholder = 'Введите имя работника';
table14.appendChild(inputs1);

let inputa1 = document.createElement('input');
inputa1.placeholder = 'Введите возраст работника';
table14.appendChild(inputa1);

let inputp1 = document.createElement('input');
inputp1.placeholder = 'Введите зарплату работника';
table14.appendChild(inputp1);

let btnx1 = document.createElement('button');
btnx1.textContent = 'Добавить работника';
table14.appendChild(btnx1);

btnx1.addEventListener('click', function() {
	let ul = document.createElement('ul');
	
	let td1 = document.createElement('li');
	td1.textContent = inputs1.value;
	td1.classList.add('new1');
	ul.appendChild(td1);
	
	let td2 = document.createElement('li');
	td2.textContent = inputa1.value;
	td2.classList.add('new1');
	ul.appendChild(td2);
	
	let td3 = document.createElement('li');
	td3.textContent = inputp1.value;
	td3.classList.add('new1');
	ul.appendChild(td3);
	
	table12.appendChild(ul);

	let tdsnew1 = document.querySelectorAll('.new1');

	for (let td of tdsnew1) {
		td.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = td.textContent;

			td.textContent = '';
			td.appendChild(input);

			input.addEventListener('blur', function() {
				td.textContent = this.value;
				td.addEventListener('click', func);
			});

			td.removeEventListener('click', func);
		});
	}
});