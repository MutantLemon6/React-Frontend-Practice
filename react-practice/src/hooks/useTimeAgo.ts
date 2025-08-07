import { useEffect, useState } from "react";

function getTimeAgoString(date: Date | string) {
    const now = new Date();
    date = new Date(date);
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);
    
    if (diffSec < 60) return `${diffSec} second${diffSec !== 1 ? 's' : ''} ago`;
    if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
    if (diffHour < 12) return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`;
    if (diffDay === 0) return 'Today';
    if (diffDay === 1) return 'Yesterday';
    if (diffDay < 30) return `${diffDay} days ago`;
    if (diffMonth < 12) return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
    return `${diffYear} year${diffYear > 1 ? 's' : ''} ago`;
}

function getNextUpdateIn(date: Date | string) {
    const now = new Date();
    date = new Date(date);
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);

    if (diffSec < 60) return 1000;
    if (diffMin < 60) return 60000;
    if (diffHour < 12) return 3600000;
    return 3600000 * 6;
}

export function useTimeAgo(value: string | Date | undefined) {
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        if (!value) return;
        const date = new Date(value);
        const updateIn = getNextUpdateIn(date);

        const timer = setTimeout(() => {
            setNow(Date.now());
        }, updateIn);

        return () => clearTimeout(timer);
    }, [value, now]);

    if (!value) return '';
    return getTimeAgoString(value);
}