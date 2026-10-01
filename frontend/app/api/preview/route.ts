import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const slug = request.nextUrl.searchParams.get('slug');

  if (secret !== process.env.PREVIEW_SECRET) {
    return new NextResponse('Invalid preview secret', {
      status: 401,
    });
  }

  if (!slug) {
    return new NextResponse('Missing slug', {
      status: 400,
    });
  }

  const draft = await draftMode();

  draft.enable();

  return NextResponse.redirect(
    new URL(`/stories/${slug}`, request.url)
  );
}