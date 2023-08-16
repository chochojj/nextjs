"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Link from "next/link";

// export const metadata = {
//   title: "NextJS 연습",
//   description: "Generated by chocho",
// };

export default function RootLayout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/topics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopics(data);
      });
  }, []);

  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
