// src/components/CourseForm.tsx
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface CourseData {
  course: string;
  students: string[];
  time: string;
  day: string;
}

interface Props {
  onSubmit: (data: CourseData) => void;
}

export const CourseForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    course: "",
    students: "",
    time: "",
    day: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const courseData: CourseData = {
      course: formData.course,
      students: formData.students
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s),
      time: formData.time,
      day: formData.day,
    };
    onSubmit(courseData);
    setFormData({ course: "", students: "", time: "", day: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, mb: 4 }}
    >
      <TextField
        label="Course Name"
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        required
      />
      <TextField
        label="Students (comma-separated)"
        value={formData.students}
        onChange={(e) => setFormData({ ...formData, students: e.target.value })}
        required
      />
      <TextField
        label="Time"
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Day"
        value={formData.day}
        onChange={(e) => setFormData({ ...formData, day: e.target.value })}
        required
      />
      <Button variant="contained" type="submit">
        Add Course
      </Button>
    </Box>
  );
};
