import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ConflictGraph } from "./components/ConflictGraph";
import { CourseForm } from "./components/CourseForm";
import { ScheduleTable } from "./components/ScheduleTable";

interface CourseData {
  course: string;
  students: string[];
  time: string;
  day: string;
}

export default function App() {
  const [schedule, setSchedule] = useState<CourseData[]>([]);
  const [graphData, setGraphData] = useState<{ [key: string]: string[] }>({});
  const [colors, setColors] = useState<{ [key: string]: number }>({});

  const handleAddCourse = async (courseData: CourseData) => {
    try {
      const newSchedule = [...schedule, courseData];
      const response = await axios.post(
        "http://localhost:8000/api/schedule",
        newSchedule
      );

      console.log("Response:", response.data); // For debugging

      if (response.data.success) {
        setSchedule(newSchedule);
        setGraphData(response.data.graph_data);
        setColors(response.data.colors);
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Course Scheduler
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CourseForm onSubmit={handleAddCourse} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Schedule
          </Typography>
          <ScheduleTable schedule={schedule} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Conflict Graph
          </Typography>
          <ConflictGraph graphData={graphData} colors={colors} />
        </Grid>
      </Grid>
    </Container>
  );
}
