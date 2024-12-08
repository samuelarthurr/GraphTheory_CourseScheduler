from pydantic import BaseModel
from typing import List, Dict

class CourseData(BaseModel):
    course: str
    students: List[str]
    time: str
    day: str

class ScheduleResponse(BaseModel):
    schedule: List[CourseData]
    colors: Dict[str, int]
    graph_data: Dict[str, List[str]]