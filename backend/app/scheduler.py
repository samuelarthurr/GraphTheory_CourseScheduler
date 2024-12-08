import networkx as nx
from typing import Dict, List, Tuple
import matplotlib.pyplot as plt
import io
import base64

def create_schedule(courses: List[Dict]) -> Tuple[Dict[str, int], str]:
    # Create graph
    G = nx.Graph()
    
    # Add nodes and edges
    for course in courses:
        G.add_node(course['course'])
    
    # Add edges for conflicts
    for i, course1 in enumerate(courses):
        for course2 in courses[i+1:]:
            if set(course1['students']) & set(course2['students']):
                G.add_edge(course1['course'], course2['course'])
    
    # Color the graph
    coloring = nx.coloring.greedy_color(G, strategy='largest_first')
    
    # Create graph visualization
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G)
    colors = [coloring[node] for node in G.nodes()]
    nx.draw(G, pos, with_labels=True, node_color=colors, 
            node_size=1500, cmap=plt.cm.rainbow)
    
    # Convert plot to base64 string
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_png = buffer.getvalue()
    buffer.close()
    graph_image = base64.b64encode(image_png).decode()
    
    return coloring, graph_image

def get_graph_data(courses: List[Dict]) -> Dict[str, List[str]]:
    graph_data = {}
    for course in courses:
        conflicts = []
        for other_course in courses:
            if course != other_course and set(course['students']) & set(other_course['students']):
                conflicts.append(other_course['course'])
        graph_data[course['course']] = conflicts
    return graph_data