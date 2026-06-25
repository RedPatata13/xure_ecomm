import { useState } from "react";

export function useCopyToClipboard() {
    const [ copied, setCopied ] = useState(false);
    
    const copy = async (text: string) => {
        if (!navigator?.clipboard) {
            console.warn(`Clipboard API is not supported by this browser.`);
            return false;
        }

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000)
            return true;
        } catch (error) {
            console.error(`Failed to copy text: `, error);
            setCopied(false);
            return false;
        }

    }
    return { copied, copy };
}