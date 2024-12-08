import React from "react";
import ForceGraph2D from "react-force-graph-2d";

interface Props {
  graphData: {
    [key: string]: string[];
  };
  colors: {
    [key: string]: number;
  };
}

export const ConflictGraph: React.FC<Props> = ({ graphData, colors }) => {
  const formatGraphData = () => {
    const nodes = Object.keys(graphData).map((course) => ({
      id: course,
      color: `hsl(${colors[course] * 137.5}, 70%, 60%)`,
    }));

    const links = Object.entries(graphData).flatMap(([course, conflicts]) =>
      conflicts.map((conflict) => ({
        source: course,
        target: conflict,
      }))
    );

    return { nodes, links };
  };

  const formattedData = formatGraphData();

  console.log("Graph data:", formattedData); // For debugging

  return (
    <div style={{ height: "500px", width: "100%", border: "1px solid #ddd" }}>
      {Object.keys(graphData).length > 0 ? (
        <ForceGraph2D
          graphData={formattedData}
          nodeLabel="id"
          nodeColor={(node) => (node as any).color}
          backgroundColor="#1a1a1a"
          nodeRelSize={8}
          linkWidth={2}
          linkColor={() => "#ffffff50"}
        />
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
          }}
        >
          Add courses to see conflicts
        </div>
      )}
    </div>
  );
};
