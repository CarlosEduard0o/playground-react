"use client";

import { PieChart, Pie, Cell, Legend } from "recharts";
import { useEffect, useState } from "react";

export default function ProgressPieChart({ progress = 65 }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Evita erro de hidratação no Next.js

    const data = [
        { name: "Concluído", value: progress },
        { name: "Faltando", value: 100 - progress },
    ];

    const COLORS = ["#00C49F", "#E0E0E0"]; // Verde para concluído, cinza para restante

    return (
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PieChart width={200} height={200}>
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
                    top: "38%",
                    left: "54%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "25px",
                    fontWeight: "bold",
                }}
            >
                {progress}%
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", width: "100%" }}>
                <Legend verticalAlign="bottom" align="center" />
            </div>
        </div>
    );
}
