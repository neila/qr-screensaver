import {useEffect, useState } from "react";
import { DvdScreensaver, useDvdScreenSaver } from "react-dvd-screensaver";
import QRcode from "react-qr-code";

export const COLORS = [
    "#ff0000",
    "#ff4000",
    "#ff8000",
    "#ffbf00",
    "#ffff00",
    "#bfff00",
    "#80ff00",
    "#40ff00",
    "#00ff00",
    "#00ff40",
    "#00ff80",
    "#00ffbf",
    "#00ffff",
    "#00bfff",
    "#0080ff",
    "#0040ff",
    "#0000ff",
    "#4000ff",
    "#8000ff",
    "#bf00ff",
    "#ff00ff",
    "#ff00bf",
    "#ff0080",
    "#ff0040",
    "#ff0000",
] as const;

interface Props {
    value: string;
}

export function SS( { value } : Props){
    const screensaver = useDvdScreenSaver({ speed:0.13 });
    const [QRColor, setQRColor] = useState<string>(COLORS[0]);

    useEffect(() => {
        setQRColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }, [screensaver.impactCount]);

    return (
        <div className="contents">
            <div className="content">
                <div ref={screensaver.parentRef} className="hooks-parent">
                    <div
                        ref={screensaver.childRef}
                        className="hooks-child"
                        style={{ backgroundColor: QRColor}}
                    >
                        <QRcode 
                            value={ value || "https://twitter.com/shofosho"} 
                            size={128} 
                            bgColor={QRColor}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}