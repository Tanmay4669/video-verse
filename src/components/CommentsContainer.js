import React from "react";
import { DEFAULT_USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Tanmay Vaidya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanmay Vaidya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Tanmay Vaidya",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Tanmay Vaidya",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Tanmay Vaidya",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Tanmay Vaidya",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Tanmay Vaidya",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Tanmay Vaidya",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Tanmay Vaidya",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tanmay Vaidya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanmay Vaidya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanmay Vaidya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanmay Vaidya",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={DEFAULT_USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[1200px]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
