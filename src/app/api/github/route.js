// /src/app/api/github/route.js

export async function GET(req) {
  try {
    const response = await fetch('https://api.github.com/users/DEVRhylme-Foundation/repos');
    console.log(response);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status}`);
    }

    const data = await response.json();

    // Return the data as a Next.js Response
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching repositories:', error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch GitHub repositories' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
