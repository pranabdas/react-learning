import React from 'react';

const bookList = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/91wRcPETM0L._AC_UL200_SR200,200_.jpg",
    title: "Change Sings: A Children's Anthem", 
    author: "Amanda Gorman"
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/7196WwHcD4L._AC_UL200_SR200,200_.jpg",
    title: "The Hill We Climb and Other Poems", 
    author: "Amanda Gorman"
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", 
    author: "James Clear"
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71V7ISaf5FL._AC_UL200_SR200,200_.jpg",
    title: "The Hill We Climb: An Inaugural Poem for the Country", 
    author: "Amanda Gorman"
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/7184Pp9Y-oL._AC_UL200_SR200,200_.jpg",
    title: "Keep Sharp: Build a Better Brain at Any Age", 
    author: "Sanjay Gupta M.D."
  }
];

const BookCard = (props) => {
  return(
    <article>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <hr/>
    </article>
  )
}

function App() {
    return(
      <>
        {bookList.map((item, index) => {
          return (
            <BookCard {...item} key={index} />  // spread operator
          );
        })}
      </>
    )
  }

export default App
