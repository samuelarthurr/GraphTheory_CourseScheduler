# backend/app/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CourseData(BaseModel):
    course: str
    students: List[str]
    time: str
    day: str

def find_conflicts(courses: List[CourseData]):
    graph_data = {}
    for i, course1 in enumerate(courses):
        conflicts = []
        for course2 in courses:
            if course1.course != course2.course:
                # Check for shared students
                if set(course1.students) & set(course2.students):
                    conflicts.append(course2.course)
        graph_data[course1.course] = conflicts
    
    # Generate colors (simple numbering for now)
    colors = {course.course: idx for idx, course in enumerate(courses)}
    return graph_data, colors

@app.post("/api/schedule")
async def generate_schedule(courses: List[CourseData]):
    try:
        graph_data, colors = find_conflicts(courses)
        return {
            "success": True,
            "graph_data": graph_data,
            "colors": colors,
            "message": "Schedule generated successfully"
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))