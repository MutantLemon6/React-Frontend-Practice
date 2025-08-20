import { useMemo } from "react";
import type { IBox } from "../interfaces/box";

interface QuickStatsProps {
    boxes?: IBox[] | null;
}

export default function QuickStats({ boxes }: QuickStatsProps) {
    const stats = useMemo(() => {
        if (!boxes || boxes.length === 0) {
            return {
                totalBoxes: 0,
                totalCards: 0,
                averageCardsPerBox: 0,
                mostRecentUpdate: null
            };
        }

        const totalBoxes = boxes.length;
        const totalCards = boxes.reduce((sum, box) => sum + box.cardCount, 0);
        const averageCardsPerBox = Math.round(totalCards / totalBoxes);
        
        const mostRecentUpdate = boxes.reduce((latest, box) => {
            const boxDate = new Date(box.updatedDate);
            return !latest || boxDate > latest ? boxDate : latest;
        }, null as Date | null);

        return {
            totalBoxes,
            totalCards,
            averageCardsPerBox,
            mostRecentUpdate
        };
    }, [boxes]);

    if (!boxes) {
        return (
            <div className="mt-3 p-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <small className="d-block mb-2">Collection Stats</small>
                <small>Loading...</small>
            </div>
        );
    }

    if (boxes.length === 0) {
        return (
            <div className="mt-3 p-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <small className="d-block mb-2">Collection Stats</small>
                <small>No boxes yet</small>
            </div>
        );
    }

    return (
        <div className="mt-3 p-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <small className="d-block mb-2">Collection Stats</small>
            
            <div className="row g-0 mb-1">
                <div className="col-7">
                    <small>Total Cards:</small>
                </div>
                <div className="col-5 text-end">
                    <small className="fw-medium">{stats.totalCards.toLocaleString()}</small>
                </div>
            </div>
            
            <div className="row g-0 mb-1">
                <div className="col-7">
                    <small>Storage Boxes:</small>
                </div>
                <div className="col-5 text-end">
                    <small className="fw-medium">{stats.totalBoxes}</small>
                </div>
            </div>
            
            <div className="row g-0 mb-1">
                <div className="col-7">
                    <small>Avg per Box:</small>
                </div>
                <div className="col-5 text-end">
                    <small className="fw-medium">{stats.averageCardsPerBox}</small>
                </div>
            </div>
            
            {stats.mostRecentUpdate && (
                <div className="row g-0">
                    <div className="col-12">
                        <small>
                            Last updated: {stats.mostRecentUpdate.toLocaleDateString()}
                        </small>
                    </div>
                </div>
            )}
        </div>
    );
}