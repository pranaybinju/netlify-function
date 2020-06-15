exports.handler = (event, context, callback) => {
  const quotes = { quoteCollection: ["Try try but don't cry"] };
  try {
    const res = { quotes: ["Try try but don't cry"] };
    console.log(res);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res),
    });
  } catch (error) {
    console.log(error);
  }
};
