"use client"
import { MapProvider } from 'react-map-gl'
import {Footer} from '@/components/footer'


export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MapProvider>
      <div className={"min-h-screen"}>
        {children}
        <Footer select={"car"} />
      </div>
    </MapProvider>
  );
}
