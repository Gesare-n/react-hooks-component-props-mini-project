import React from 'react';

const Article = ({ title, date, preview }) => {
  const defaultDate = date ? new Date(date).toDateString() : "";
  const minutesToRead = Math.ceil(preview.length / 100);
  const timeEmoji =
    minutesToRead < 30
      ? "☕️".repeat(Math.ceil(minutesToRead / 5))
      : "🍱".repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>Date: {defaultDate || "January 1, 1970"}</small>
      <p>{timeEmoji} {minutesToRead} min read</p>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
