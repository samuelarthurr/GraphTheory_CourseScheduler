# GraphTheory_ClassSchedule

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/0_yE0bFY)

# Course Scheduler #

| Name           | NRP        | Class    |
| ---            | ---        | ----------|
| Rayhan Fathurrahman Zata Amani | 5025221092 | Graph Theory (IUP) |
| Radian Try Darmawan | 5025221097 | Graph Theory (IUP) |
| Samuel Arthur Gamaliel | 5025221109 | Graph Theory (IUP) |
| Joanes Don Bosco B.| 5025221111 | Graph Theory (IUP) |

## Introduction ##
The objective of this project is to use graph coloring to solve scheduling problems, specifically in the context of assigning exam times to classes in a way that avoids conflicts. Graph coloring is a technique used in graph theory where we assign colors to the vertices of a graph such that no two adjacent vertices share the same color. In the context of scheduling exams, the colors represent different time slots, and the goal is to minimize the number of time slots needed while ensuring that no student has overlapping exams.

## Instruction to Run and Sample of Input and Output ##
cd backend
pip install fastapi uvicorn networkx matplotlib pandas pydantic python-multipart

cd frontend
npm install @mui/material @emotion/react @emotion/styled react-force-graph-2d @mui/icons-material axios

### Terminal 1 (backend)
cd backend
uvicorn app.main:app --reload

### Terminal 2 (frontend)
cd frontend
npm run dev

### Sample of Input : 
1. Math201
Students: John, Emma, Michael, Sarah, David
Time: 09:00
Day: Monday

2. Physics202
Students: Emma, Michael, Lisa, Tom, James
Time: 10:00
Day: Monday

3. Chemistry203
Students: Sarah, Lisa, Alex, Rachel, David
Time: 11:00
Day: Tuesday

4. Biology204
Students: James, Alex, Emily, Michael, Rachel
Time: 14:00
Day: Tuesday

5. Computer Science205
Students: Tom, Emily, John, Lisa, Sarah
Time: 15:00
Day: Wednesday

6. Psychology206
Students: Emma, Rachel, David, Emily, James
Time: 09:00
Day: Thursday

7. Economics207
Students: Alex, Tom, Michael, John, Lisa
Time: 10:00
Day: Thursday

8. History208
Students: Sarah, Emma, Rachel, James, Emily
Time: 14:00
Day: Friday

### Sample of Output :



## Summary of Results and Analysis ##

