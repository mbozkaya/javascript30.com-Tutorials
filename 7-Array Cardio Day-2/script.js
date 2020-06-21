// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  // Array.prototype.every() // is everyone 19 or older?

  // Some ve every mantıksal olarak 've - veya'ya benzetilebilir.
  //alttaki some sorgusunun true dönmesi için peopledan yılı 1988 olan bir index yeterli olacaktır. 
  const bornInEightyEight = people.some(s=> s.year===1988);
  console.log(bornInEightyEight);

  //every sorgusunun true dönmesi için ise şartın tüm obje için geçerli olması gerekmektedir.
  const bornInSeventyths = people.every(e=>e.year>1970 && e.year<1980);
  console.log(bornInSeventyths);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  // find sorgusu sonucunda null kontrolü log içinde bulunmaktadır.
const anyComment = comments.find(f=>f.id===823423);
console.log(anyComment || false);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
const index = comments.findIndex(f=>f.id===823423);
console.log(index);
console.table(comments);

//splice ilk parameteresi başlangıç indexi, ikinci parametre length'i yani bu indexten sonra kaç eleman kaldırılacağını alır.
// comments.splice(index,1);

console.table(comments);


// Slice arrayin belirlenen indexine eleman ekler.
const newCommends =[
    ...comments.slice(0,index),
    ...comments.slice(index+1),
]

console.table(newCommends);
