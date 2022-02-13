import "./App.css";
import { useState } from "react";

const commentData = [
  {
    id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
    points: "2",
    replies: [
      {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
        points: "3",
        replies: [
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
            points: "8",
          },
        ],
      },
      {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
        points: "2",
      },
    ],
  },
];


function Comment({ comment }) {
  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment.timestamp}  comment={comment} type="child" />;
  });

  return (
    // <div className="App"></div>
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>{comment.timestamp}</div>
      <div>{comment.body}</div>
      {nestedComments}
    </div>
  );
}

function App() {
  return (
    <div>
      {commentData.map((e) => {
        return <Comment key={e.timestamp} comment={e} />;
      })}
    </div>
  );
}

export default App;
