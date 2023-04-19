const Meeting = require("../models/meetingModel");

const getAllMeetings = async (req, res) => {
  try {
    let allMeetings = await Meeting.find({ participants: req.user.email });
    res.send({ data: allMeetings });
  } catch (err) {
    res.status(500).send({ message: "There was an server side error" });
  }
};

const createNewMeeting = async (req, res) => {
  try {
    const { topic, guest, dateandtime, duration } = req.body;

    if (!topic || !guest || !dateandtime || !duration) {
      return res.status(404).send({ message: "Some fields are missing" });
    }

    let newMeeting = await Meeting.create({
      topic,
      host: req.user.userId,
      hostEmail: req.user.email,
      participants: [req.user.email, guest],
      dateandtime,
      duration,
    });

    res.send({ data: newMeeting });
  } catch (err) {
    res.status(500).send({ message: "There was an server side error" });
  }
};

module.exports = { getAllMeetings, createNewMeeting };
