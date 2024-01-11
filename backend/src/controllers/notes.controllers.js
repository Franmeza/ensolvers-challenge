import { Note } from "../db.js";

export const createNotes = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description)
      return res.status(400).json({ message: "Some information is missing" });

    const newNote = await Note.create({
      title,
      description,
    });
    res.status(200).json({ message: "Note created succesfully", newNote });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  const { category } = req.query;
  try {
    const result = !category
      ? await Note.findAll({
          attributes: ["id", "title", "description", "category", "archived"],
        })
      : await Note.findAll({
          where: {
            category: category,
          },
        });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findOne({
      where: {
        id: id,
      },

      attributes: ["id", "title", "description", "category", "archived"],
    });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;
  console.log(id);
  console.log(req.body);
  try {
    const note = await Note.findOne({
      where: {
        id: id,
      },
    });

    if (!note) return res.status(404).json({ message: "Note not found" });

    note.title = title || note.title;
    note.description = description || note.description;
    note.category = category;
    await note.save();

    res.status(200).json({ message: "Note succesfully updated!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNoteCategory = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  console.log(id);
  console.log(req.body);
  try {
    const note = await Note.findOne({
      where: {
        id: id,
      },
    });

    if (!note) return res.status(404).json({ message: "Note not founded" });

    note.category = category;
    await note.save();

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findOne({
      where: {
        id: id,
      },
    });

    if (!note) return res.status(404).json({ message: "Note not founded" });

    await Note.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Note deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const archiveToggle = async (req, res) => {
  const { id } = req.params;
  const { archived } = req.query;

  try {
    const note = await Note.findOne({
      where: {
        id: id,
      },
    });

    note.archived = archived;

    await note.save();

    if (note.archived)
      res.status(200).json({ message: "Note archived succesfully" });
    if (!note.archived)
      res.status(200).json({ message: "Note unarchived succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
