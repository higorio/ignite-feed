import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        className={styles.avatar}
        hasBorder={false}
        src="https://pps.whatsapp.net/v/t61.24694-24/286459859_203002002054187_454552898324974324_n.jpg?ccb=11-4&oh=1584e84f3c2d003fad721d7e8f3303b5&oe=62AF3BAA"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Moreira</strong>
              <time
                title="09 de Junho às 09:43h"
                dateTime="2022-06-09 09:43:00"
              >
                Certa de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Parabéns, Higor! Você vai longe... :D</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
