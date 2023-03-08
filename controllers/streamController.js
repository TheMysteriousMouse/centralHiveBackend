const streamModel = require('../models/streamModel');

exports.createComment = async (req, res) => {
  const { comment, userId } = req.body;
  const streamId = req.params.streamId;

  const result = await streamModel.createComment(comment, userId, streamId);

  if (result) {
    res.send('User Created!');
  } else {
    res.send('Error Creating User');
  }
};

exports.createStreams = async (req, res) => {
  const { tagId, title, userId } = req.body;
  const date = new Date();
  const stream = {
    date,
    tagId,
    title,
    userId,
  };
  try {
    const result = await streamModel.createStream(stream);
    if (result) {
      res.send('User Created!');
    } else {
      res.send('Error Creating User');
    }
  } catch (err) {
    throw new Error('Could not create the stream');
  }
};

exports.getStreams = async (req, res) => {
  try {
    const result = await streamModel.getAllStreams();
    if (result) {
      res.send(result);
    } else {
      res.send('Error Creating User');
    }
  } catch (err) {
    throw new Error('Could not create the stream');
  }
};
exports.getStream = async (req, res) => {
  const streamId = req.params.id;
  const result = await streamModel.getStream(streamId);
  try {
    if (result) {
      res.send(result);
    } else {
      res.send('Error Getting Stream');
    }
  } catch (err) {
    throw new Error('Could not get stream');
  }
};
exports.getViews = async (req, res) => {
  const streamId = req.params.id;
  try {
    const result = await streamModel.getAllViews(streamId);
    if (result) {
      res.send(result);
    } else {
      res.send('Error getting views');
    }
  } catch (err) {
    throw new Error('Could not get views');
  }
};
exports.getComments = async (req, res) => {
  const streamId = req.params.id;
  try {
    const result = await streamModel.getAllViews(streamId);
    if (result) {
      res.send(result);
    } else {
      res.send('Error getting comments');
    }
  } catch (err) {
    throw new Error('Could not get comments');
  }
};
exports.getTags = async (req, res) => {
  try {
    const result = await streamModel.getAllTags();
    if (result) {
      res.send(result);
    } else {
      res.send('Error getting tags');
    }
  } catch (err) {
    throw new Error('Could not get tags');
  }
};

exports.deleteStream = async (req, res) => {
  const streamId = req.params.id;
  try {
    const result = await streamModel.deleteStreamById(streamId);
    if (result) {
      res.send(result);
    } else {
      res.send('Error deleting Stream');
    }
  } catch (err) {
    throw new Error('Could not delete the stream');
  }
};

// Add Later
// exports.createLike = async(req,res) => {};
// exports.createTag = async (req, res) => {};
// exports.updateStreams = async (req, res) => {};
