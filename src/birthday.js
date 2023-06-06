import "dotenv/config";
import dayjs from "dayjs";
import express from "express";

let birthdays = [
  // Change this first option while testing.
  {
    name: "Test",
    birthday: "06-05",
  },
  {
    name: "Frank",
    birthday: "06-05",
  },
  {
    name: "Bill",
    birthday: "06-05",
  },
  {
    name: "Alex",
    birthday: "12-29",
  },
  {
    name: "Tiffany",
    birthday: "12-23",
  },
  {
    name: "JJ",
    birthday: "06-12",
  },
  {
    name: "Swaggy Wags",
    birthday: "05-22",
  },
  {
    name: "Garrett",
    birthday: "02-11",
  },
  //   {
  //     name: "Joe",
  //     birthday: "12-23",
  //   },
  {
    name: "Justin",
    birthday: "04-08",
  },
  {
    name: "Jota",
    birthday: "07-19",
  },
  {
    name: "Mitch",
    birthday: "09-08",
  },
  {
    name: "Rudi",
    birthday: "05-26",
  },
  {
    name: "Trevor",
    birthday: "03-09",
  },
  {
    name: "Caleb",
    birthday: "09-19",
  },
  {
    name: "Eugene",
    birthday: "06-20",
  },
];

const app = express();

const PORT = process.env.PORT || 3000;

birthdays.forEach((birthday) =>
  app.get("/", (req, res) => res.send(getBirthday()))
);

export function determineBirthday() {
  const today = dayjs().format("MM-DD");
  const birthday = birthdays.find((birthday) => birthday.birthday === today);
  if (birthday) {
    app.post("/", (req, res) => res.send(getBirthday()));
  }
}

export function getBirthday() {
  const today = dayjs().format("MM-DD");
  const birthday = birthdays.find((birthday) => birthday.birthday === today);
  const name = birthday.name;
  if (birthday) {
    return `🥳 Happy Birthday ${name}! 🎉🎂`;
  } else {
    return "";
  }
}

determineBirthday();

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
