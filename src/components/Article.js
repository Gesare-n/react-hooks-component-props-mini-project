import React from 'react';

const Article = ({ title, date, preview }) => {
  // Convert date to a readable format or use a default value
  const defaultDate = date ? new Date(date).toDateString() : "January 1, 1970";

  // Calculate the approximate reading time based on the length of the preview text
  const wordsPerMinute = 200; // Average reading speed in words per minute
  const readingTime = Math.ceil(preview.split(" ").length / wordsPerMinute);

  return (
    <article>
      <h3>{title}</h3>
      <small>Date: {defaultDate}</small>
      <p>{readingTime} min read</p>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
