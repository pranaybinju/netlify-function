exports.handler = (event, context, callback) => {
  try {
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    const res = { quotes: ["Try try but don't cry"] };
    console.log(res);
    callback(null, {
      headers,
      statusCode: 200,
      body: JSON.stringify(res),
    });
  } catch (error) {
    console.log(error);
  }
};
