"use client";

import { PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";

export default function ProgressPieChart({ progress = 65 }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const data = [
        { name: "Concluído", value: progress },
        { name: "Faltando", value: 100 - progress },
    ];

    const COLORS = ["#00C49F", "#E0E0E0"];

    return (
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PieChart width={200} height={150}>
                <Pie
                    data={data}
                    cx={100}
                    cy={70}
                    innerRadius={50}
                    outerRadius={60}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
            </PieChart>
            <div
                style={{
                    position: "absolute",
                    top: "36%",
                    left: "54%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "25px",
                    fontWeight: "bold",
                }}
            >
                {progress}%
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "20px", height: "20px", backgroundColor: "#00C49F", borderRadius: "50%" }}></span>
                    <p style={{ fontSize: ".8em"}}>Aprovadas: 650 peças</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "20px", height: "20px", backgroundColor: "#E0E0E0", borderRadius: "50%" }}></span>
                    <p style={{ fontSize: ".8em"}}>Restante: 350 peças</p>
                </div>
            </div>
        </div>
    );
}
