import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import { CardNew } from "../CardNew/CardNew";
import { CardToday } from "../CardToday/CardToday";
import { CardTomorrow } from "../CardTomorrow/CardTomorrow";
import axios from "axios";

// const cardsItem = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolore",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.",
//   },
//   { id: 2, title: "Lorem ipsum dolore", desc: "" },
//   {
//     id: 3,
//     title: "Lorem ipsum dolore",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.",
//   },
//   { id: 4, title: "Lorem ipsum dolore", desc: "" },
// ];

export const Content = () => {
  const [title, setTitle] = useState("");
  const [body, setdescription] = useState("");
  const [cards, setCard] = useState([]);

  const getPosts = async () => {

    //Тестовый запрос на свой сервер данные лежат в файле проекта db.json
    // axios.get("https://my-json-server.typicode.com/MichelKukresh/Projekt/posts/1")
    // .then((res) => {
    //   console.log(res);
    // }) 

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res.data);
      setCard(res.data);
    })
    .catch(err => {
      console.log("ERROR")
    })

  }

  useEffect(() => {
    getPosts();


  }, []);

  const changleTitle = (e) => {
    setTitle(e.currentTarget.value);
    console.log(title);
  };

  const changleDescription = (e) => {
    setdescription(e.currentTarget.value);
    console.log(body);
  };



  const addCard = () => {
    console.log("Меня нажали");

    //cards.push({id: new Date().getTime(), title, desc: "Пусто"})
    setCard([ { id: new Date().getTime(), title, body}, ...cards]);
    setTitle("");
  };

  const deleteItem = (id) => {
    const updateCards = cards.filter(i => i.id !== id)
    setCard(updateCards);
  }

  return (
    <div className={styles.wrapper}>
      <CardNew
        title={title}
        changleTitle={changleTitle}
        description={body}
        changleDescription={changleDescription}
        buttonClick={addCard}
      />     
      <CardToday cards={cards} deleteItem={deleteItem}/>
      <CardTomorrow />
    </div>
  );
};
