'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function SingleArticlePage() {
    const searchParams = useSearchParams();

    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const content = searchParams.get('content');
    const authors = searchParams.get('authors');
    const description = searchParams.get('description');
    const mainImageUrl = searchParams.get('mainImageUrl');

  return <div>{title}</div>;
}

export default SingleArticlePage;
