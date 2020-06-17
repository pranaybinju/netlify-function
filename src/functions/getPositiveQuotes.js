exports.handler = (event, context, callback) => {
  const quotes = [
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    "We May Encounter Many Defeats But We Must Not Be Defeated",
    "Positive thinking will let you do everything better than negative thinking will.",
    "Always believe that something wonderful is about to happen.",
    "Remember that life’s greatest lessons are usually learned from worst times and from the worst mistakes.",
    "A hill is just another opportunity to leave your competition behind.",
    "You will never know your limits until you push yourself to them.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Don’t limit your challenges, challenge your limits.",
    "Doing what is comfortable is rarely profitable.",
    "Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Try not to become a person of success, but rather try to become a person of value.",
    "No masterpiece was ever created by a lazy artist.",
    "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.",
  ];
  try {
    const res = { quote: quotes[Math.floor(Math.random() * quotes.length)] };
    console.log(res);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res),
    });
  } catch (error) {
    console.log(error);
  }
};
