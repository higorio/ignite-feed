import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "../src/App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/higorio.png",
      name: "Higor Silva",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Hoje resolvi aprender ReactJS" },
      { type: "link", content: "#react" },
    ],
    publishedAt: new Date("2022-06-10 10:38:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/286459859_203002002054187_454552898324974324_n.jpg?ccb=11-4&oh=896a9e199fa573de2b4195aba4079abc&oe=62B3A0AA",
      name: "Gustavo Moreira",
      role: "Fisioterapeuta",
    },
    content: [
      {
        type: "paragraph",
        content: "Bora corrigir a nossa postura no trabalho?",
      },
      {
        type: "paragraph",
        content: "Que tal melhorar nossa postura no trabalho?",
      },
      { type: "link", content: "#partiu" },
    ],
    publishedAt: new Date("2022-06-10 10:40:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
