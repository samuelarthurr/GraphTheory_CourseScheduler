// src/components/ScheduleTable.tsx
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { CourseData } from "../types";

interface Props {
  schedule: CourseData[];
}

export const ScheduleTable: React.FC<Props> = ({ schedule }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell>Students</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.length > 0 ? (
            schedule.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.course}</TableCell>
                <TableCell>
                  {Array.isArray(row.students)
                    ? row.students.join(", ")
                    : row.students}
                </TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.day}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No courses added
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
