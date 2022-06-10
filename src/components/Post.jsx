import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setNewComment] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value);
  };

  const handleCreateNewComment = () => {
    event.preventDefault();

    if (!newCommentText) return;
    setNewComment([newCommentText, ...comments]);
    setNewCommentText("");
  };

  const deleteComment = (commentsToDelete) => {
    const commentListWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentsToDelete;
    });

    setNewComment(commentListWithoutDeletedOne);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="10 de Junho às 10:38h" dateTime="2022-06-10 10:38:00">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback...</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário..."
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div key={author.id} className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
