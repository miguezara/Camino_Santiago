import { useEffect, useState } from 'react';
type InstallEvent=Event&{prompt:()=>Promise<void>;userChoice:Promise<unknown>};
export function useInstall(){const[prompt,setPrompt]=useState<InstallEvent|null>(null);useEffect(()=>{const handler=(event:Event)=>{event.preventDefault();setPrompt(event as InstallEvent)};window.addEventListener('beforeinstallprompt',handler);return()=>window.removeEventListener('beforeinstallprompt',handler)},[]);return async()=>{if(!prompt)return;await prompt.prompt();await prompt.userChoice;setPrompt(null)}}
