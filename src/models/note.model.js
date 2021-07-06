import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Note', NoteSchema);
