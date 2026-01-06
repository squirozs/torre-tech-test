// src/app/api/proxy/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const externalResponse = await axios.post(
            'https://torre.ai/api/entities/_searchStream',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Si necesitas tokens, agrégalos aquí
                },
            }
        );

        // 3. Devolvemos la respuesta al frontend
        return NextResponse.json(externalResponse.data);

    } catch (error: any) {
        console.error('Error en el proxy:', error.message);
        return NextResponse.json(
            { error: 'Error fetching data from external API' },
            { status: 500 }
        );
    }
}