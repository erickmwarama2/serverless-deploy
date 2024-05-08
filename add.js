'use strict';

module.exports.add = async (event) => {
    let {num1, num2} = event;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        num1,
        num2,
        result: num1 + num2
      },
      null,
      2
    ),
  };
};
