let BookModel = require('../models/books');
// Corrested
module.exports.getBook = async function (req, res, next) {
  try {
    let book = await BookModel.findOne({ _id: req.params.id });


    res.json(book);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.create = async function (req, res, next) {
  try {
    // Get input from the request
    let book = req.body;

    // Insert into the DB
    let result = await BookModel.create(book);
    console.log("Result: ", result);

    // Send a response
    res.status(200);
    res.json(
      {
        success: true,
        message: "Book created successfully.",
        bookId: result._id
      }
    );

  } catch (error) {
    console.log(error);
    next(error);
  }

}

module.exports.getAll = async function (req, res, next) {
  try {
    // Get all from the DB.
    let list = await BookModel.find();

    // Send a response
    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
 

// CORRECTED:
module.exports.update = async function (req, res, next) {
  try {
    let result = await BookModel.updateOne(
      { _id: req.params.id },  // This is correct
      { $set: req.body }
    );




    // Handle the result: send a response.
    if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Book updated successfully."
        }
      );
    } else {
      throw new Error('Book not updated. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}

// CORRECTED:
module.exports.remove = async function (req, res, next) {
  try {
    let result = await BookModel.deleteOne({ _id: req.params.id }); // This is correct

    // Handle the result and send a response
    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Book deleted successfully."
        }
      );
    } else {
      throw new Error('Book not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}