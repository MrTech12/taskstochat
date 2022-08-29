export async function handleRequest(): Promise<Response> {
    console.log("correct");
    return new Response("Hello World!");
}