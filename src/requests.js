const request = {
  getToken: "https://opentdb.com/api_token.php?command=request",
  resetToken: "https://opentdb.com/api_token.php?command=reset&token=",
  easy: "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple",
  medium:
    "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple",
  hard: "https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple",
};

export default request;
