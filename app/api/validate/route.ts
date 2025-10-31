import { NextRequest, NextResponse } from 'next/server';
import { validateServerJson as validateCore, lintServerData, type ValidationResult } from '@teamsparkai/mcp-registry-validator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serverJson } = body;

    if (!serverJson || typeof serverJson !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid serverJson parameter' },
        { status: 400 }
      );
    }

    // Server-side validation using the Node.js validator package
    const result: ValidationResult = await validateCore(serverJson);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Validation API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal validation error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
